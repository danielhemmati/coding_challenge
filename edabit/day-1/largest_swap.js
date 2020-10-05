// https://edabit.com/challenge/hD3euqPHM82Cbr7R8

/**
 * 
 * @param {number} num
 */
function largestSwap(num) {
    var reverse = Number(num.toString().split("").reverse().join(""));
    return num >= reverse;
}
console.log(largestSwap(44));

//---------- other solution ----------

// shit this solution are awesome LOL
function largestSwap2(num) {
    // this is fucking amazing. how did she come up with this??
    return num / 10 > num % 10;
}

// console.log(largestSwap2(22));

/**
 *
 * @param {number} num
 */
function larestSwap3(num) {
    return Number(num.toString().split("").reverse().join("")) <= num;
}

// here is the good part
// console.log(typeof Number('123'));
// console.log(larestSwap3(43));

// basically we can come up with this conclusion
// that if the first  digit is bigger, the answer it true
// which is the someone else solution
/**
 *
 * @param {number} num
 */
function largesSwap4(num) {
    return num.toString().charAt(0) >= num.toString().charAt(1);
}

// console.log(largesSwap4(43));
