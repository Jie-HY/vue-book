// 回调函数
// var Person = {
//     'age': 18,
//     'sayHello': function () {
//       setTimeout(function () {
//         console.log(age);
//         console.log(this.age);
//       });
//     }
// };
// var age = 20;
// Person.sayHello(); 
// 此时 this 指向的是全局对象

// 回调函数
var Person1 = {
    'age': 18,
    'sayHello': function () {
      setTimeout(() => {
          console.log(age);
        console.log(this.age);
      });
    }
};
var age = 20;
Person1.sayHello(); 
// 此时的 this 指向 Person1 对象


// var Person2 = {
//     'age': 18,
//     'sayHello': () => {
//         console.log(age);
//         console.log(this.age);
//     }
// };
// var age = 20;
// Person2.sayHello();
// 此时 this 指向的是全局对象


// var Person3 = {
//     'age': 18,
//     'sayHello': function(){
//         console.log(age);
//         console.log(this.age);
//     }
// }
// var age = 20;
// Person3.sayHello();
// 此时的 this 指向 Person1 对象