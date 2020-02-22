module.exports = function toReadable (number) {
    var NUMBER_NAMES = {
        max_19: [
            'zero',
            'one',
            'two',
            'three',
            'four',
            'five',
            'six',
            'seven',
            'eight',
            'nine',
            'ten',
            'eleven',
            'twelve',
            'thirteen',
            'fourteen',
            'fifteen',
            'sixteen',
            'seventeen',
            'eighteen',
            'nineteen'
        ],
        tens: [
            'twenty',
            'thirty',
            'forty',
            'fifty',
            'sixty',
            'seventy',
            'eighty',
            'ninety',
        ],
        hundred: 'hundred'
    }
    
    var res = [];
    
    if (number < 20) {
        return NUMBER_NAMES['max_19'][number];
    }
    
    if (number < 100) {
        res.push(NUMBER_NAMES['tens'][Math.floor(number / 10) - 2]);
        if (number % 10 !== 0) {
            res.push(NUMBER_NAMES['max_19'][number % 10]);
            return res.join(' ');
        }
        return res.join('');
    }
    if (number % 100 === 0) {
        res.push(NUMBER_NAMES['max_19'][Math.floor(number / 100)]);
        res.push(NUMBER_NAMES['hundred']);
        return res.join(' ');
    }
    res.push(NUMBER_NAMES['max_19'][Math.floor(number / 100)]);
    res.push(NUMBER_NAMES['hundred']);

    number = number % 100;

    if (number < 20) {
        res.push(NUMBER_NAMES['max_19'][number]);
        return res.join(' ');
    }

    res.push(NUMBER_NAMES['tens'][Math.floor(number / 10) - 2]);
    if (number % 10 !== 0) {
        res.push(NUMBER_NAMES['max_19'][number % 10]);
        return res.join(' ');
    }
    return res.join(' ');
}
