import { useState } from 'react';
import './Counter.css'; // File CSS sẽ tạo ở bước sau

const Counter = () => {
  // Khởi tạo state count bắt đầu từ 0
  const [count, setCount] = useState(0);

  // Hàm tăng
  const handleIncrease = () => {
    setCount(count + 1);
  };

  // Hàm giảm (Có kiểm tra điều kiện < 0)
  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Hàm Reset
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h2>Counter App</h2>
      
      {/* Logic đổi màu: Nếu count > 10 thì màu đỏ, ngược lại màu đen */}
      <h1 className="count-number" style={{ color: count > 10 ? 'red' : 'black' }}>
        {count}
      </h1>

      <div className="btn-group">
        <button onClick={handleDecrease} className="btn btn-dec">-</button>
        <button onClick={handleReset} className="btn btn-reset">Reset</button>
        <button onClick={handleIncrease} className="btn btn-inc">+</button>
      </div>
      
      {/* Hiển thị gợi ý khi số lớn */}
      {count > 10 && <p style={{ color: 'red' }}>Số đã vượt quá 10!</p>}
    </div>
  );
};

export default Counter;