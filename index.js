
const FIRST_NAME = "DAVID";
const LAST_NAME = "ANDREEA";
const GRUPA = "1077";

/**
 * Make the implementation here
 */
 
 function numberParser(a){
	 if(typeof(a)==='number'){
		 if(a>Number.MAX_SAFE_INTEGER||a<Number.MIN_SAFE_INTEGER)
			 return NaN;
		 return parseInt(a);
	 }
	 if(typeof(a)==='string')
		 return parseInt(a);
	 if(Number.isFinite(a)===false&&typeof(a)!='string')
		 return NaN;
 }
 
function dynamicPropertyChecker(input, property) {
    
}

module.exports = {
    FIRST_NAME,
    LAST_NAME,
    GRUPA,
    numberParser
}

