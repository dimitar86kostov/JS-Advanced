function magicMatrices(matrix) {
    let result = new Set();
    let sumCol = 0;
    let sumCol1 = 0;
    let sumCol2 = 0;

    for (let row = 0; row < matrix.length; row++) {

        let innerArr = matrix[row];
        let sumRow = 0

        if (row == 0) {
            for (const el of matrix) {
                sumCol += el[row];
                sumCol1 += el[row + 1];
                sumCol2 += el[row + 2];
            }
            result.add(sumCol);
            result.add(sumCol1);
            result.add(sumCol2);
        }


        for (let col = 0; col < innerArr.length; col++) {

            sumRow += innerArr[col];
        }
        result.add(sumRow);

    }


    if (result.size == 1) {
        console.log('true');
    } else {
        console.log('false');
    }

}
magicMatrices([
    [4, 6, 5],
    [6, 5, 4],
    [5, 5, 5]]

)