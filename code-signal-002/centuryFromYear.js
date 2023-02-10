function solution(year) {
  // var century = 0;
  // var modulus = 0;

  // century = Math.floor(year/100);
  // modulus = year % 100;
  // if (modulus > 0) {
  //     century++
  // }
  // return century

  var century = Math.ceil(year / 100);
  return century;
}
