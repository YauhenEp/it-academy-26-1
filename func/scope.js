console.log(global)

let a = 10;
function testScope() {
    let b = 20;
    console.log(a);
    console.log(b); 
    if (true) {
        let c = 30;
        console.log(a);
        console.log(b); 
        console.log(c); 
    } 
    // console.log(c);
}
// console.log(b)
testScope();