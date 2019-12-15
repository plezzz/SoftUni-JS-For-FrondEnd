function solve(a) {
    let sum = a.reduce((a, b) => a + b, 0);
    let sumInverse = a.reduce((a, b) => a + 1/b, 0);
    let join = a.join("");


    console.log(sum);
    console.log(sumInverse);
    console.log(join);
}
