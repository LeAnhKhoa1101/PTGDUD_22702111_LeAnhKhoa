import { useState } from 'react';
import './Alert.css';

const Alert = () => {
  // State lưu trạng thái hiện tại (mặc định là null - không hiện gì)
  // Các giá trị có thể có: 'success', 'warning', 'error', null
  const [status, setStatus] = useState(null);

  return (
    <div className="alert-wrapper">
      <h3>Bài 3: Alert Component</h3>
      
      {/* Khu vực các nút bấm để kích hoạt State */}
      <div className="controls">
        <button className="btn-trigger success" onClick={() => setStatus('success')}>
          Success
        </button>
        <button className="btn-trigger warning" onClick={() => setStatus('warning')}>
          Warning
        </button>
        <button className="btn-trigger error" onClick={() => setStatus('error')}>
          Error
        </button>
      </div>

      {/* Conditional Rendering: Chỉ hiển thị khi status có giá trị (khác null) */}
      {status && (
        <div className={`alert-box alert-${status}`}>
           <span className="alert-text">
             Thông báo: Bạn đang ở trạng thái <strong>{status.toUpperCase()}</strong>
           </span>
           
           {/* Nút đóng: Reset state về null để ẩn alert */}
           <span className="close-btn" onClick={() => setStatus(null)}>
             &times;
           </span>
        </div>
      )}
    </div>
  );
};

export default Alert;