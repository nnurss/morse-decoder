const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    const length_ten = /.{10}/g
    const array = expr.match(length_ten);

    const morse_array = [];
    array.forEach(function (element) {
        element = element.replace(/10/g,'.').replace(/11/g,'-').replace(/00/g,'');
        morse_array.push(element);
    });

    let string = '';
    morse_array.forEach(function (element) {
        if(element === '**********'){
            string += ' ';
        } else{
            string += MORSE_TABLE[element];
        }
    });

    return string;
};


module.exports = {
    decode
}
