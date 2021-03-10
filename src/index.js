/*module.exports =*/ function toReadable(number) {
    let str = "";
    let i = 0;

    let numb_obj = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    let numb2dig;
    let numb3dig;

    while (1) {
        if (number >= 100) {
            numb3dig = number % 100;
            number = Math.trunc(number / 100);
            for (i = 0; i < Object.keys(numb_obj).length; i++) {
                if (Object.keys(numb_obj)[i] == number) {
                    str += numb_obj[number] + " ";
                }
            }
            str += "hundred ";
            if (numb3dig == 0) break;
            number = numb3dig;
        } else if (number > 20 && number <= 99) {
            numb2dig = number % 10;
            number = Math.trunc(number / 10) * 10;
            for (i = 0; i < Object.keys(numb_obj).length; i++) {
                if (Object.keys(numb_obj)[i] == number) {
                    str += numb_obj[number] + " ";
                }
            }
            if (numb2dig == 0) break;
            number = numb2dig;
        } else {
            for (i = 0; i < Object.keys(numb_obj).length; i++) {
                if (Object.keys(numb_obj)[i] == number) {
                    str += numb_obj[number];
                }
            }
            break;
        }
    }
    return str;
}
