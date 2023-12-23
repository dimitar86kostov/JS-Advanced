function sortingNumbers(params) {
    let result = [];
    let isOdd = false;

    let sorted = params.sort((a, b) => a - b);
    if (sorted.length % 2 != 0) {
        isOdd = true;
    }

    for (let i = 0; i < sorted.length / 2; i++) {
        let left = sorted[i];
        let right = sorted[sorted.length - 1 - i];

        result.push(left);
        result.push(right);
    }
    if (isOdd) {

        result.pop();
    }
    return result;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 47]));