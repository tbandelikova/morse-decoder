const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const inputArr = (function (str) {
        let arr = [];
        for (let i = 0; i < expr.length; i += 10) {
            let letter = [];
            let x = expr.slice(i, i + 10);
            for (let j = 0; j < 10; j += 2) {
                let y = x.slice(j, j + 2);
                y !== '00' ? letter.push(y) : null;
            }
            arr.push(letter);
        }
        return arr;
    })(expr);

    let keys = Object.entries(MORSE_TABLE);
    let outputArr = inputArr.map((el) => {
        let arr = keys.find(key => key[0] == makeDashDot(el));
        return arr == undefined ? ' ' : arr[1];
    });

    return outputArr.join('');

    function makeDashDot(arr) {
        if (arr[0] == '**') return ' ';
        return arr.map((el) => el == '10' ? '.' : '-').join('');
    }
}

module.exports = {
    decode
}