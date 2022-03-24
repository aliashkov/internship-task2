function compress(originalString) {
    let compressedString = '';

    if (originalString.length === 0) {
        console.log('Error. This string must contain at least 1 symbol');
        return;
    }

    let amountRepeatings = 0;

    for (let i = 0; i < originalString.length; i++) {
        amountRepeatings++;
        if (originalString[i] != originalString[i + 1]) {
            compressedString += originalString[i] + amountRepeatings;
            amountRepeatings = 0;
        }
    }

    return compressedString;
}




function uncompress(originalString) {
    let uncompressedString = '';
    
    if (originalString.length === 0) {
        console.log('Error. This string must contain at least 1 symbol');
        return;
    }

    for (let i = 0; i < originalString.length; i += 2) 
        uncompressedString += originalString[i].repeat(originalString[i + 1]).split(',');

    return uncompressedString;
}

let output;
console.log(output = compress('aaaa')); //a4
console.log(output = compress('aaaabbc')); //a4b2c1
console.log(output = compress('aaaabbcaabb')); //a4b2c1a2b2
console.log(output = uncompress('a4b2')); //aaaaabb
console.log(output = uncompress('a2b1c3')); //aabccc
