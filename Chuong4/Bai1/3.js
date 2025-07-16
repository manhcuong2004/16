let a = 3, b = 3, c = 3
if (a == b && a == c && b == c) {
    console.log("Tam giác đều")
}
else if (a === b || a === c || b === c) {
    console.log("Tam giác cân")
}
else {
    console.log("Tam giác thường")
}