/* Dữ liệu 1 */
// 1. Lưu thông tin vào biến
const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

// 2. Tính BMI
// Công thức: mass / height ** 2
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

// In thử kết quả ra để kiểm tra
console.log("BMI của Mark:", BMIMark);
console.log("BMI của John:", BMIJohn);

// 3. Tạo biến Boolean so sánh
const markHigherBMI = BMIMark > BMIJohn;

// Kết quả
console.log("Mark có BMI cao hơn John không?", markHigherBMI);