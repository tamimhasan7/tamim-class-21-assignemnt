//example 1
// for (let i = 0; i < 10; i++) {
//     let str = "";
//     for (let j = 0; j <= i; j++) {
//         str += "1";
//     }
//     console.log(str);
// }

//example 2
// for (let i =0; i < 10; i++) {
//     let str = "";
//     for (let j = 0; j <= i; j++) {
//         str += j+" ";
//     }
//     console.log(str);
// }

//example 3
// for (let i = 0; i <= 5; i++) {
//     let str = "";
//     for (let j = 0; j <= i; j++) {
//         str += j + " ";
//     }
//     console.log(str);
// }


//////////////////////
for (let i = 5; i >= 0 && i <= 5; i--) {
    let str = "";
    for (let j = 0; j <= i; j--) {
        str += j + " ";
    }
    console.log(str);
}