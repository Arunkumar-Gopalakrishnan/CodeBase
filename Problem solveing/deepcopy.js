
const obj = { x: 10, y: { z: 20 } };    
const deepCopy = JSON.parse(JSON.stringify(obj));
deepCopy.y.z = 30; console.log(obj.y.z);