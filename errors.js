// try {
//     const x=2;
//     const d = x+y;
// } catch (e) {
//     console.log(e);
// }


const fs = require('fs');

function MuhammedCallback(err, data) {
    if(err){
        console.error("There is an error", err);
        return;
    }
    console.log(data);
}


fs.readFile('/use/qsdsd', MuhammedCallback);


