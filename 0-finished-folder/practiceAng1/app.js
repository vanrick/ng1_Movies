var user = document.getElementById('user_input')
var div = document.getElementById('output')


document.addEventListener('keyup',callback)
function callback(){
  div.innerHTML = user_input.value.toUpperCase();
}



// function myFunction() {
//     var x = document.getElementById("user_input");
//     x.value = x.value.toUpperCase();
// }
