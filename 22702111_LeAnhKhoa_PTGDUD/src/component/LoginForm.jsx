import './LoginForm.css';

const LoginForm = () => {
  return (
    // Wrapper này dùng để căn giữa Form ra giữa màn hình
    <div className="login-container">
      <form className="login-form">
        <h2 className="title">Đăng Nhập</h2>
        
        <div className="form-group">
          <label htmlFor="username">Tên đăng nhập</label>
          <input 
            type="text" 
            id="username" 
            placeholder="Nhập username..." 
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Mật khẩu</label>
          <input 
            type="password" 
            id="password" 
            placeholder="Nhập mật khẩu..." 
          />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;