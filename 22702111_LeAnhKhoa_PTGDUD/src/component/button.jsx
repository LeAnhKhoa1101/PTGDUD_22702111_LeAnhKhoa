// src/components/Button.jsx
import './Button.css';

// Component nhận 2 props:
// - type: để quyết định màu sắc (primary, danger, success)
// - children: nội dung chữ bên trong nút (ví dụ: "Click me", "Xóa")
const Button = ({ type, children }) => {
  
  // Tạo tên class động dựa vào props "type"
  // Ví dụ: nếu type="danger" -> className sẽ là "btn btn-danger"
  const className = `btn btn-${type}`; 

  return (
    <button className={className}>
      {children}
    </button>
  );
};

export default Button;