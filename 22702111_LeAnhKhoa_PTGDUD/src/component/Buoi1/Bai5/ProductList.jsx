import ProductCard from 'C:/PTGDUD_22702111_LeAnhKhoa/22702111_LeAnhKhoa_PTGDUD/src/component/Buoi1/Bai1/ProductCard.jsx'
import 'C:/PTGDUD_22702111_LeAnhKhoa/22702111_LeAnhKhoa_PTGDUD/src/component/Buoi1/Bai5/ProductList.css'
const ProductList = () => {
    const pro = [1,2,3,4,5,6];
    return (
        <div className="container"><h2 style={{textAlign: 'center'}}>Danh sach san pham
            </h2>
            <div className="product-grid">
                {pro.map((item)=> (
                    <ProductCard key={item}/>
                ))}
            </div>
            </div>
    );
};
export default ProductList;