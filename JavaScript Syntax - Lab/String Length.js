function length(a,b,c) {
let l = [a.length,b.length,c.length];
    const arrSum = l.reduce((a,b) => a + b, 0);
    console.log(arrSum);
    console.log(Math.floor(arrSum/l.length))
}

length('chocolate', 'ice cream', 'cake');
