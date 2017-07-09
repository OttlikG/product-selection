
// RFC4122 version 4 compliant solution
// http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
export function randomId () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
  });
}

export function errorResponse ({ name, message: title } = {}, errorSpecification) {
  let errorObj = {
    id: randomId(),
    title: `${name}: ${title}`,
    ...errorSpecification
  }

  return { errors: [ errorObj ] }
}
