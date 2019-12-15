function solve(input) {
    const [N, X] = input;
    if (X >= N) {
        console.log(N * X)
    } else {
        console.log(N / X)
    }
}
solve([2,3]);
solve([13,13]);
solve([3,2]);
solve([144,12]);
