function sortAnArrayBy2Criteria(params) {
    let obj = {};
    let result = [];

    for (const name of params) {
        obj[name] = name.length;
    }

    let entries = Object.entries(obj);

    let sorted = entries.sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0]));
    sorted.forEach((x) => result.push(x[0]));
    console.log(result.join('\n'));

}
sortAnArrayBy2Criteria(
    ['Isacc',
        'Theodor',
        'Jack',
        'Harrison',
        'George']
)