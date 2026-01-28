import ProductCard from "./component/Buoi1/ProductCard"
import Button from "./component/Buoi1/button"
import Alert from "./component/Buoi1/alert"
import LoginForm from "./component/Buoi1/LoginForm"
import ProductList from "./component/Buoi1/ProductList"
import header from "./component/Buoi1/Buoi2/header"
import footer from "./component/Buoi1/Buoi2/footer"
import StudentInfo from "./component/Buoi1/Buoi2/StudentInfo"
function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Bài 1: Product Card</h1>
      <ProductCard />
      <hr style={{ margin: '30px 0' }} /> {/* Đường kẻ ngang phân cách */}

      <h1>Bài 2: Button Component (Props)</h1>
      <div>
        {/* Truyền type="primary" -> Nút màu xanh dương */}
        <Button type="primary">Lưu lại</Button>

        {/* Truyền type="danger" -> Nút màu đỏ */}
        <Button type="danger">Xóa bỏ</Button>

        {/* Truyền type="success" -> Nút màu xanh lá */}
        <Button type="success">Thành công</Button>
      </div>
      <Alert/>
      <h1>Bài 4: Login form</h1>
      <LoginForm/>
      <h1>Bai 5: Reponsive layout</h1>
      <ProductList/>
      <h1>Buoi 2 - Bai 1:</h1>
      <header/>
      <h2 style={{textAlign: 'center'}}>Danh sach lop hoc</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap'
      }}>
        <StudentInfo
          name = "Nguyen Van A"
          id = "SV01"
          className = "DHCNTT1C"
        />
        <StudentInfo
          name = "Le Thi C"
          id = "SV02"
          className = "DHCNTT3A"
        />
      </div>
      <footer/>
    </div>
  )
  
}

export default App