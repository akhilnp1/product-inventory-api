import { useEffect, useState } from "react";
import API from "../services/api";

const ProductList = ({ refresh, onEdit }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [refresh]);

  const fetchProducts = async () => {
    const response = await API.get("products/");
    setProducts(response.data);
  };

  const deleteProduct = async (id) => {
    await API.delete(`products/${id}/`);
    fetchProducts();
  };

  return (
    <>
      <h2 className="form-title">Product List</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.length === 0 && (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No products available
              </td>
            </tr>
          )}

          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>₹{product.price}</td>
              <td>{product.stock}</td>
              <td className="action-buttons">
                <button onClick={() => onEdit(product)}>Edit</button>
                <button
                  className="secondary"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductList;
