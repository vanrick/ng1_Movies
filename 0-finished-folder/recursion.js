//what is recursion
//another loops


// function recur(num){
//   if (num == 0) {  //base or return
//     console.log('hello1 ', num);
//     return num
//   }else{
//     console.log('hello2 ', num);
//     return num + (recur(num-1)) //recur recalls itself
//   }
// }
//
// console.log(recur(3));

// var power = function(base, exponent){
//   if(exponent === 0){
//     console.log('hello1 ', base, exponent);
//     return 1;
//   }else{
//     console.log('hello2 ', base, exponent);
//     return base * power(base, exponent -1)
//   }
// }
// console.log(power(3,3));
//
// 3*(power(3,3-1)) ==2
//  3*(power(3,2-1)) ==1
//   3*(power(3,1-1)) ==0
//
//27

// function processString(str){
//   if (str.length === 0) {
//     return str
//   }else{
//     console.log('str is ', str);
//     return str[0] + processString(str.substring(1))+str[0];
//   }
// }
// console.log(processString('apple'));

function bottlesOfBeer(bottlesRemaining = 0, songLyrics = "") {
if (bottlesRemaining === 0) {
  console.log('hey1 ', bottlesRemaining, songLyrics);
  return bottlesOfBeer, songLyrics = "No more bottles of beer on the wall. No more bottles of beer!"
  }else{
  console.log('hey2 ', bottlesRemaining + songLyrics);
  return bottlesRemaining + ((bottlesOfBeer(bottlesRemaining - 1)) + songLyrics)
}
}
bottlesOfBeer(bottlesRemaining = 100, songLyrics = " bottles of beer on the wall")
