/* --- Coding Challenge #2 (Part 2) --- */

// 1. Viết hàm tính tiền Tip
// Gợi ý: Dùng toán tử 3 ngôi (Ternary Operator) cho gọn
const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Test thử hàm với giá trị 100 như đề bài yêu cầu
// console.log(calcTip(100)); // Kết quả nên là 15

// 2. Tạo mảng Bills
const bills = [125, 555, 44];

// 3. Tạo mảng Tips
// Gọi hàm calcTip cho từng phần tử của mảng bills
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// 4. Bonus: Tạo mảng Totals (Bill + Tip)
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// In kết quả ra console
console.log('--- Bills, Tips, and Totals ---');
console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Totals:', totals);