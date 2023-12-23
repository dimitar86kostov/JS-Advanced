function rotateArray(arr, n) {

    for (let i = 0; i < n; i++) {
        let num = arr.pop();
        arr.unshift(num);

    }
    console.log(arr.join(' '));
}
rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15

)