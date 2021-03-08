/*module.exports =*/ function toReadable(number) {
    let str = "";
    //let i = 0;
    let number1, number2;

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

    /*   function search(find_numb) {
        let str_find;
        let i = 0;
        for (i = 0; i < Object.keys(numb_obj).length; i++) {
            if (find_numb <= 20 && find_numb >= 0) {
                if (Object.keys(numb_obj)[i] === find_numb) {
                    str_find += numb_obj[find_numb];
                }
            }
        }
        console.log(str_find);
        return str_find;
    }

    for (i = 0; i < 3; i++) {
        if (number >= 100) {
            number1 = Math.trunc(number / 100);
            str += search(number1);
            number = number - number1 * 100;
            str += " hundred ";
        }
        if (number > 20 && number < 100) {
            number2 = (number - (number % 10)) * 10;
            str = str + search(number2) + " ";
            number = number - number2 * 10;
        }
        if (number <= 20 && number >= 0) {
            str += search(number);
        }
    }*/
    for (i = 0; i < Object.keys(numb_obj).length; i++) {
        if (number <= 20 && number >= 0) {
            if (Object.keys(numb_obj)[i] == number) {
                str += numb_obj[number];
            }
        }
    }

    console.log(str);
    return str;
}
