function solve(input) {
    const [i, a, b, c] = input;
    const [ia, va] = a.split(' - ');
    const [ib, vb] = b.split(' - ');
    const [ic, vc] = c.split(' - ');

    let result = new Array(+i).fill(0);
    for (let j = 0; j <= i; j++) {

        if (ia == j) {
            result[ia] = va
        }
        if (ib == j) {
            result[ib] = vb
        }
        if (ic == j) {
            result[ic] = vc
        }
    }
    console.log(result.join('\n'))
}

solve(['3', '0 - 5', '1 - 6', '2 - 7']);
solve(['5', '0 - 3', '3 - -1', '4 - 2']);
