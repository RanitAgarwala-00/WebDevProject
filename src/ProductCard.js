import React from "react";
import PropTypes from "prop-types";

function ProductCard({ name, type, desc }) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "16px",
        marginBottom: "16px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <h3>{name}</h3>
      <p><strong>Type:</strong> {type}</p>
      <p>{desc}</p>
    </div>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default ProductCard;
