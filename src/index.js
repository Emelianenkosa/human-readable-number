module.exports = function toReadable (number) {
    number = String(number);
    let result;

    const singleNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const twoDigitNumber = ['zero21', 'zero22', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    if (number <= 19) {
        return result = singleNumber[number];
    };

    if ((number >= 20) && (number <= 99)) {
        if (number[1] === '0') {
            return result = twoDigitNumber[number[0]];
        } else {
            return result = twoDigitNumber[number[0]] + ' ' + singleNumber[number[1]];
        }
    };

    if (number >= 100 && number <= 999) { 
        if (Number(number.slice(1,3)) <= 19 && Number(number.slice(1,3)) >=1) {
            return result = `${singleNumber[number[0]]} hundred ${singleNumber[Number(number.slice(1,3))]}`;
        } 
        if (number[1] === '0') {
            return result = `${singleNumber[number[0]]} hundred`;
        }
        if (number[2] === '0') {
            return result = `${singleNumber[number[0]]} hundred ${twoDigitNumber[number[1]]}`;
        }
        else return result = `${singleNumber[number[0]]} hundred ${twoDigitNumber[number[1]]} ${singleNumber[number[2]]}`;
        
    };

}
