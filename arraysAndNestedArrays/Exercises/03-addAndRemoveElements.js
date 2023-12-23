function addAndRemoveElements(arr) {

    let result = [];
    let num = 0
    for (const el of arr) {

        if (el == 'add') {
            num++

            result.push(num);



        } else if (el == 'remove') {
            num++
            result.pop();

        }
    }
    if (result.length == 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));

    }
}
addAndRemoveElements(['add',
    'add',
    'add',
    'add']);
addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']
)