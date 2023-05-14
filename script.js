// complete the given function

function palindrome(str){
	let isPalindrome=true;
let i=0;j=str.length-1;
	while(i<=j){
		if(str[i]!=str[j]){
			isPalindrome=false;
		}
		i++;
		j--;
	}
	return isPalindrome;
}
return;
module.exports = palindrome
