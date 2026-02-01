import ProductCard from "./component/Buoi1/Bai1/ProductCard"
import Button from "./component/Buoi1/Bai2/button"
import Alert from "./component/Buoi1/Bai3/alert"
import LoginForm from "./component/Buoi1/Bai4/LoginForm"
import ProductList from "./component/Buoi1/Bai5/ProductList"
import header from "./component/Buoi2/Bai1/header"
import footer from "./component/Buoi2/Bai1/footer"
import StudentInfo from "./component/Buoi2/Bai1/StudentInfo"
import Counter from "./component/Buoi2/Bai2/counter"
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
      <h1>Bài 2</h1>
      <Counter/>
    </div>
  )
  
}

export default App