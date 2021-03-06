const rectangle = require('./rectangle');
const rect = require('./rectangle');

function solveRect(l, w) {
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);

    rect(l, w, (err, rectangle) => {
        if(err){
            console.log('ERROR:', err.message);
    } else {
        console.log(`Area of rectangle with dimensions of ${l} and ${w} is: ${rectangle.area()}`);
        console.log(`Perimeter of rectangle with dimensions of ${l} and ${w} is: ${rectangle.perimeter()}`);
    }
    });
    console.log('This statement is logged after call to rect()');
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);
solveRect(6, 8);