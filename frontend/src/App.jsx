import { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [refresh, setRefresh] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const refreshList = () => {
    setRefresh(!refresh);
  };

  const editProduct = (product) => {
    setSelectedProduct(product);
  };

  const clearSelection = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container">
      <h1 className="title">Product Inventory</h1>

      <div className="card">
        <ProductForm
          onAdd={refreshList}
          selectedProduct={selectedProduct}
          clearSelection={clearSelection}
        />
      </div>

      <div className="card">
        <ProductList refresh={refresh} onEdit={editProduct} />
      </div>
    </div>
  );
}

export default App;
