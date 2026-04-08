import React from "react";

function ProductCard(props) {
  const validTypes = ["Parboiled", "Raw", "Steam"];
  const isValidType = validTypes.includes(props.type);

  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 6px #e8080814",
    fontFamily: "sans-serif",
  };

  const tagStyle = {
    fontSize: "0.75rem",
    color: isValidType ? "#888" : "#fff",
    backgroundColor: isValidType ? "transparent" : "#9a2020",
    padding: isValidType ? "0" : "4px 8px",
    borderRadius: "4px",
    marginBottom: "6px",
    textTransform: "uppercase",
    display: "inline-block"
  };

  return (
    <div style={cardStyle}>
      <p style={tagStyle}>
        {isValidType ? props.type : "Invalid Type"}
      </p>
      
      <h3 style={{ fontSize: "1rem", color: "#9a2020", marginBottom: "6px" }}>
        {props.name}
      </h3>
      
      <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.5 }}>
        {props.desc}
      </p>
    </div>
  );
}

ProductCard.defaultProps = {
  desc: "Premium quality rice processed under strict hygiene standards."
};

export default ProductCard;