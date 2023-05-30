// complete the given function
function palindrome(str){
	const formattedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Compare the formatted string with its reverse
	const reversedStr = formattedStr.split('').reverse().join('');
	formattedStr === reversedStr;
}
return formattedStr;
}
module.exports = palindrome
