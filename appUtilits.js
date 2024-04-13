const sum = (num1,num2) => num1 + num2;
const PI = 3.14;
class Student {
    constructor(){
        console.log("object created")
    }
}
module.exports.sum = sum;//exposing  our function to outside modules
module.exports.PI = PI;//exposing  our variable to outside modules
module.exports.Student = Student;//exposing  our class to outside modules
//alternative way
// module.exports = {sum:sum,PI:PI,Student:Student};
exports.myDateTime = function () {
    return Date();
  };