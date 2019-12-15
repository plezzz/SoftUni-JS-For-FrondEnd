function solve(x, y, z) {
    let weight = y / 1000;
    let price = weight * z;

    console.log(`I need $${price.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${x}.`)
}
