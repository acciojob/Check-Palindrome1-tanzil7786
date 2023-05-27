// complete the given function

function palindrome(str){
	let isPalindrome=true;
let i=0;j=str.length-1;
	while(i<=j && isPalindrome){
		if(str[i]!==str[j]){
			isPalindrome=false;
		}
		i++;
		j--;
	}
	return isPalindrome;
}
module.exports = palindrome
