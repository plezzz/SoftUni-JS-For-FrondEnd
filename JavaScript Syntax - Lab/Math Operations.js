function solve(x,y,operator) {
    let math = {
        '+': function (x, y) { return x + y },
        '-': function (x, y) { return x - y },
        '*': function (x, y) { return x * y },
        '/': function (x, y) { return x / y },
        '%': function (x, y) { return x % y },
        '**': function (x, y) { return x ** y }
    };

    console.log(math[operator](x,y))
}
