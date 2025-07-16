let l = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let s = 0
for (let i = 0; i < l.length; i++) {
    if (i % 2 != 0) {
        s += i
    }
}
console.log(s)