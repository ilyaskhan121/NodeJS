const path =  require('path' )
// type of path separator used 
console.log(path.sep)
// method for joining the path
const fullPath = path.join('/content','test','test.js')
console.log(fullPath); 
// to get base name from path 
console.log(path.basename(fullPath));
// to get absolute path
const absolutePath = path.resolve(__dirname, "content", "test", "test.js");
console.log(absolutePath);