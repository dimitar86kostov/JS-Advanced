function devisor(n1, n2) {
    
    let greatest

    for (let i = 2; i < 10; i++) {

        if (n1 % n2 == 0) {
            greatest = n2
            break;
        }
        if (n2 % n1 == 0) {
            greatest = n2
            break;
        }
        if (n1 % i == 0 && n2 % i == 0) {
            greatest = i
            
        }
        
    }
    console.log(greatest);
}
devisor(2, 20)
 devisor(2154, 458);
devisor(15, 5)