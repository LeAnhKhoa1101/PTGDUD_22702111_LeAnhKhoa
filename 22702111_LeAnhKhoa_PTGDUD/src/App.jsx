import ProductCard from "./component/ProductCard"
import Button from "./component/button"
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

       
        
      </div>
    </div>
  )
}

export default App