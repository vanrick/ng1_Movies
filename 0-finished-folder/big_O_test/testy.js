var a = new Array(30000).fill(2)


function IsFirstElementNull(someArray){
    return someArray[0] == null;
}

function testPerformance(callback, arr) {
  var time = process.hrtime();
  callback(arr);
  var diff = process.hrtime(time);
  return diff;
}

var results = testPerformance(sumValuesAndRemoveOdds, a);
console.log("****Results****");
console.log(results);

function sumValuesAndRemoveOdds(arr) {
  var i = 0;
  while (i < arr.length) {
    var sum = 0;
    var j = i;
    while (j < arr.length) {
      sum += arr[j];
      j += 1;
    }
    arr[i] = sum;
    i += 1;
  }

  var newArr = [];

  i = 0;

  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
    i += 1;
  }

  return newArr;
}

function squareAndDouble(arr) {
  var tempArr = arr.map(function(el) {
    return el * el;
  });
  return tempArr.map(function(el) {
    return 2 * el;
  });
}

function square(arr) {
  return arr.map(function(el) {
    return el * el;
  });
}

function print500000nums() {
  for (var i = 0; i < 500000; i++) {
    console.log(i);
  }
}

function addSomeNumbers(arr) {
  sum = 0;
  for (var i=0; i < Math.min(arr.length,1e7); i++) {
    sum += arr[i];
  }
  return sum;
}
