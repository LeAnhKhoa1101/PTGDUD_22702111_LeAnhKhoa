const bill = 430;
if (bill >= 50 && bill <= 300) {
    const tip = bill * 0.15;
    const total = tip + bill;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);
} else {
    const tip = bill * 0.2;
    const total = tip + bill;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);
}