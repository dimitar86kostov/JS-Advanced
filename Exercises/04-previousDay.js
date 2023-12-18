function prevDay(year, month, day) {

    let d = new Date(`${year}-${month}-${day}`);

    if (day == 1) {

        if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
            day = 31
            
        } else if (month == 1) {
            day = 29
        } else if (month == 3 || month == 5 || month == 8 || month == 10) {
            day = 30
        }

    } else {
        day = day - 1
    }

    console.log(`${year}-${month}-${day}`);

}
// prevDay(2016, 9, 30);
prevDay(2015, 2, 1)