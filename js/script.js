// for (let i = 1; i <= 10; i++) {
//     if (i === 6) { // Три равно используеться при continue
//         console.log("Выход из цикла")
//         continue
//     }
//     console.log(i)
// }

// for (let i = 1; i <= 10; i++) {
//     let res = i * 5;
//     console.log(res)
// }

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }

// console.log(sum)

// let countEven = 0; // чет
// let countOdd = 0; // ne chet

// for (let i = 20; i <= 60; i++) {
//     if (i % 2 == 0) {
//         countEven += 1;
//     } else {
//         countOdd += 1;
//     }
// }

// console.log(`| Количесвто четных чисел: ${countEven}`)
// console.log(countOdd)


// for (let i = 1; i <= 50; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(i)
//     }
// }

// let arr = ["s", true, "a", 34, 32]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

let arr = [1, 2, 45, 6, 7];

let res = 0;

for (let i = 0; i < arr.length; i++) {
    res += arr[i];
    console.log(res)
}