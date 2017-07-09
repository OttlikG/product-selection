import renderer from 'react-test-renderer';
import shallowEqual from 'shallowequal'

global.__API_URL__ = ''
global.__EXTERNAL_CONFIG__ = {}
global.__DEV__ = false
global.__VERSION__ = 'test'
global.window = {}
global.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn()
}

//https://github.com/facebook/react/issues/7386
//jest.mock('react-dom');

const NOT_FOUND = Symbol();

function find(acc, node, T, first, parent) {
  if (node === T) return acc(node, parent);
  if (node===null)  return acc();
  let found = NOT_FOUND;
  if (node.props) {
    // look for classes...
    if (T[0] === '.') {
      if (T==='.ANY' || node.props.className && node.props.className.split(' ').includes(T.substr(1))) found = node;
    }
    // look for ids...
    else if (T[0] === '#') {
      if (T==='#ANY' || node.props.id && node.props.id == T.substr(1)) found = node;
    }
    // look for props...
    else if (typeof T === 'object') {
      const P = Object.keys(T)[0];
      if (node.props[P] && (shallowEqual(node.props[P], T[P]) || T[P] === ANY)) {
        found = node;
      }
    }
    // look for type...
    if (node.props.type === T) found = node;
    if (found === NOT_FOUND || !first) {
      if (node.props.children) {
        // recurse into children and do the same...
        // Note: result order will be depth first,
        const fc = acc().length;
        let cc = false;
        for (let c in (node.props.children || [])) {
          if (node.props.children[c]) {
            const nc = find(acc, node.props.children[c], T, first, node).length;
            cc = first && nc > fc;
            if (cc) break;
          }
        }
      }
    }
  }
  if (found === NOT_FOUND) {
    // look for tag types...
    const type = T[0] === '$'? T.substr(1) : T
    if (node.type === type) {
      found = node;
    }
    else {
      // look for text...
      if (typeof T == 'string' && (node.children || []).find(c => (c.toString() || '').indexOf(T) >= 0)) found = node;
    }
  }

  if (found === NOT_FOUND || !first) {
    // recurse into children and do the same...
    // Note: result order will be depth first,
    const fc = acc().length;
    let cc = false;
    for (let c in (node.children || [])) {
      if (node.children[c]) {
        const nc = find(acc, node.children[c], T, first, node).length;
        cc = first && nc > fc;
        if (cc) break;
      }
    }
    if (!cc) {
      for (let p in node.props) {
        if (typeof node.props[p] == 'object')  {
          const np = find(acc, node.props[p], T, first, node).length
          cc = first && np > fc;
          if (cc) break;
        }
      }
    }
  }
  return acc(found, parent);
}

const flatMap = (text, prop) => {
  (prop.children || []).forEach(child => {
    text += typeof child === 'object' ? flatMap('', child) : child
  });
  return text;
}

const filters = tree => ({
  find: T => find(accumulate([]), tree, T, true)[0],
  findAll: T => find(accumulate([]), tree, T),
  findLast: T => find(accumulate([]), tree, T).slice(-1)[0],
  findNth: (T, nth) => find(accumulate([]), tree, T).slice(nth, nth + 1)[0],
  text: T => find(accumulate([]), tree, T).reduce(flatMap, '')
});

const accumulate = acc => (node, parent) => {
  // recurse filters into objects
  // eg: component.find(x).find(y).find(z) assumes {x: y: {z:{}}}
  if (typeof node === 'object') {
    acc.push({...node, parent, ...filters(node)});
  }
  else if (node && node !== NOT_FOUND) {
    acc.push({...node, parent});
  }
  return acc;
};

const bindFilters = (rendered, tree) => {
  return Object.assign({
    tree,
    getInstance: rendered.getInstance.bind(rendered),
    snapshot: () => bindFilters(rendered, snapshot(rendered)),
    children: tree.children,
    props: tree.props
  }, filters(tree));
};

// use for attribute filters: {prop: ANY}, '.ANY', '#ANY', etc..
global.ANY = Symbol();

global.snapshot = (rendered, test) => {
  const tree = rendered.toJSON();
  if (test) {
    expect(tree).toMatchSnapshot();
  }
  return tree || {children: []};
}

global.render = (component, test = true, rendererOptions) => {
  const rendered = renderer.create(component, rendererOptions);
  const tree = snapshot(rendered, test);
  return bindFilters(rendered, tree);
}
