function extractIncreasingSubsequenceFromArray(params) {
let max = 0;
    let result = [];

    // for (const el of params) {

    //     if (el > max) {
    //         max = el
    //         result.push(max)
    //     }
    // }

    let finalResult = params.reduce((el,x) =>  {

        el > x;
        
        if (el > x) {
            result.push(el)
        }
        return el;
    }) 
    console.log(finalResult);
}
extractIncreasingSubsequenceFromArray([1,
    3,
    8,
    4, 10,
    12,
    3,
    2,
    24])