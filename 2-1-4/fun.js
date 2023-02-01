//在JavaScript中，一个函数可以作为另一个函数的参数。

function say(answer) {
    var message = "Hello World!";
    answer(message);
}

// function answer(message) {
//     console.log(message);
// }
// say(answer);


say(function(m){
    console.log(m);
});