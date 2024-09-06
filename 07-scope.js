
var nn = 100;
var n1, n2, n3; // Declare the variables outside the if block

function add() {
    if (true) {
        n1 = 100;
        n2 = 200;
        const n3 = 300; 
    }
    console.log(n1, n2, n3);
}

add();