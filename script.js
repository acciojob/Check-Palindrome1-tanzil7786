// complete the given function

function palindrome(str){
	let isPalindrome=str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
	let len=isPalindrome.length;
	for(let i=0;i<mMath.floor(length/2);i++){
		if(isPalindrome[i]!==isPalindrome[length-1-i]){
			return false;
		}
	}
	return true;
}
module.exports = palindrome
