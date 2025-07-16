let year = 2020

if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    console.log("Là năm nhuận")
} else {
    console.log("Là năm không nhuận")
}