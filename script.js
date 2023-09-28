function convertToRoman(number) {
  //your code here
	let num = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    let sym = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
    let i=12;
    let ans = "";
    while(number>0)
    {
    let div = Math.floor(number/num[i]);
    number = number%num[i];
    while(div--)
    {
        // document.write(sym[i]);
        ans += sym[i];
    }
    i--;
    }
    return ans;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman