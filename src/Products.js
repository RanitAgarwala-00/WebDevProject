import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Swarna Rice", type: "Parboiled", desc: "Most popular variety in West Bengal. Fluffy and aromatic." },
  { id: 2, name: "Minikit Rice", type: "Raw", desc: "Fine grain rice. Light on stomach, cooks soft." },
  { id: 3, name: "Ratna Rice", type: "Steam", desc: "Premium grade rice with excellent taste." }
];

function Products() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Our Rice Products</h1>
      {products.map((item) => (
        <ProductCard
          key={item.id}
          name={item.name}
          type={item.type}
          desc={item.desc}
        />
      ))}
    </div>
  );
}

export default Products;
