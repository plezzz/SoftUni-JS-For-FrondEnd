function solve(i) {
    let nCount = 0;
    let zero = false;
    i.map(e => {
        if (e < 0) {
            nCount++;
        } else if (e == 0) {
            zero = true;
        }
    });

    if (zero) {
        console.log('Positive');
        return;
    }
    if (nCount % 2 == 0) {
        console.log('Positive');
    } else {
        console.log('Negative')
    }
}

solve(['2', '3', '-1']);
solve(['2', '0', '-1']);
