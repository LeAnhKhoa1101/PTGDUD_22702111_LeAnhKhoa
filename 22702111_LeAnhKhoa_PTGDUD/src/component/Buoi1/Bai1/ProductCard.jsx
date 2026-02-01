import  'C:/PTGDUD_22702111_LeAnhKhoa/22702111_LeAnhKhoa_PTGDUD/src/component/Buoi1/Bai1/ProductCard.css'

const ProductCard = () => {
  return (
    <div className="product-card">
      <img 
        src="https://via.placeholder.com/150" 
        alt="Product" 
        className="product-img" 
      />
      <div className="product-info">
        <h3>Giày Thể Thao</h3>
        <p className="price">1.200.000 đ</p>
        <button className="add-btn">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;