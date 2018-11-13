/* setInterval(function(){
    console.log("NAOUI Yacine");
}, 12); */


/* var count1 = 0;

console.log(count1);
setInterval(function(){
    count1++;
    console.log("NAOUI Yacine " + count1);
    
}, 1000); */

/* setTimeout(function(){
    console.log("NAOUI Yacine ");
    
}, 3000); */


/* var recursive = function(){
    console.log("NAOUI Yacine");
    setTimeout(recursive, 1000);
}
recursive(); */

function yacine(){
    console.log("Welcome NodeJS");
}
var ya = setTimeout(yacine, 1000);
var hamid = setInterval(yacine, 1000);

// clearTimeout(ya);
clearInterval(hamid);