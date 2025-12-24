import { useEffect, useState } from "react";
import API from "../services/api";

const ProductForm = ({ onAdd, selectedProduct, clearSelection }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  useEffect(() => {
    if (selectedProduct) {
      setName(selectedProduct.name);
      setPrice(selectedProduct.price);
      setStock(selectedProduct.stock);
    }
  }, [selectedProduct]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      if (selectedProduct) {
        await API.put(`products/${selectedProduct.id}/`, {
          name,
          price,
          stock,
        });
        clearSelection();
      } else {
        await API.post("products/", {
          name,
          price,
          stock,
        });
      }

      setName("");
      setPrice("");
      setStock("");
      onAdd();
    } catch (error) {
      alert("Failed to save product");
      console.error(error);
    }
  };

  return (
    <>
      <h2 className="form-title">
        {selectedProduct ? "Update Product" : "Add Product"}
      </h2>

      <form onSubmit={submitHandler}>
        <div className="form-row">
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            required
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            type="number"
            placeholder="Stock"
            value={stock}
            required
            onChange={(e) => setStock(e.target.value)}
          />

          <button type="submit">
            {selectedProduct ? "Update" : "Add"}
          </button>

          {selectedProduct && (
            <button
              type="button"
              className="secondary"
              onClick={clearSelection}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default ProductForm;
