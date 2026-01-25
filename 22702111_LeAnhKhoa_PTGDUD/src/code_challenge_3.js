const dolphinsData = (97 + 112 + 101) / 3;
const koalasData = (109 + 95 + 106) / 3;

console.log("Trung binh Dolphins:", dolphinsData);
console.log("Trung binh Koalas:", koalasData);

if (dolphinsData > koalasData && dolphinsData >= 100) {
    console.log("Dolphins chien thang");
} else if (dolphinsData < koalasData && koalasData >= 100) {
    console.log("Koalas chien thang");
} else if (dolphinsData == koalasData && dolphinsData >= 100 && koalasData >= 100) {
    console.log("Hai doi hoa");
} else {
    console.log("Khong ai chien thang");
}