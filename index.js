function printString(myString) {
	console.log(myString[0]);

	if (myString.length > 1) {
		let mySubString = myString.substring(1, myString.length);
		printString(mySubString);
	} else {
		return true;
	}
}

function reverseString(string) {
    if (string === "") {
        return "";
    } else {
        return reverseString(string.substring(1)) + string.charAt(0)
    }
}

function isPalindrome(string) {
    if (string[0] === string[string.length - 1] && string.length > 1) {
        isPalindrome(string.substring(1, string.length -1)) 
        return true
      } else {
        return false
    }
}

function addUpTo(arr, i) {
    return i ? arr[i] + addUpTo(arr, --i) : arr[i];
}

function maxOf(arr) {
    if (arr.length === 1) {
        return arr[0]
    } else {
        return Math.max(arr.pop(), maxOf(arr));
    }
}

function includesNumber(arr, n) {
    if (!arr.length) {
        return false
    } else if (arr[0] === n) {
        return true
    } else {
        return includesNumber(arr.slice(1), n)
    }
}