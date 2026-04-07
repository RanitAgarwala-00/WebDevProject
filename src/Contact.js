import { useState, useEffect } from "react";

const validTypes = ["Parboiled", "Raw", "Steam"];

const styles = {
  page: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "sans-serif",
  },
  row: {
    display: "flex",
    gap: "40px",
    flexWrap: "wrap",
    marginTop: "24px",
  },
  info: {
    flex: 1,
    minWidth: "200px",
    lineHeight: 2,
    color: "#444",
    fontSize: "0.9rem",
  },
  form: {
    flex: 1,
    minWidth: "200px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "8px 10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "0.9rem",
    fontFamily: "sans-serif",
  },
  btn: {
    padding: "10px",
    backgroundColor: "#9a2020",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "0.95rem",
  },
  btnDisabled: {
    padding: "10px",
    backgroundColor: "#ccc",
    color: "#666",
    border: "none",
    borderRadius: "4px",
    cursor: "not-allowed",
    fontSize: "0.95rem",
  },
  success: {
    backgroundColor: "#eaffea",
    border: "1px solid #a3d9a3",
    color: "#2d6a2d",
    padding: "8px 12px",
    borderRadius: "4px",
    fontSize: "0.85rem",
  },
  validationBadge: {
    fontSize: "0.8rem",
    padding: "6px 10px",
    borderRadius: "4px",
    display: "inline-block",
    width: "fit-content",
    marginTop: "-4px",
    marginBottom: "4px"
  }
};

function Contact() {
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    riceName: "",
    riceType: "",
    message: "" 
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted]); 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmitted(true);
    setForm({ name: "", email: "", riceName: "", riceType: "", message: "" }); 
  };

  const isTypeEntered = form.riceType.length > 0;
  const isValidType = validTypes.includes(form.riceType);

  return (
    <div style={styles.page}>
      <h2 style={{ color: "#9a2020" }}>Order & Contact</h2>
      <p style={{ color: "#777" }}>
        Reach out for bulk orders. Enter your product requirements below.
      </p>

      <div style={styles.row}>

        <div style={styles.info}>
          <p><strong>Sunita Agro Rice Mills Pvt. Ltd.</strong></p>
          <p>📍 Kalkadanga, Palsanda More</p>
          <p>Nabagram, Murshidabad</p>
          <p>West Bengal – 742238</p>
          <p>📧 sales.sunitaricemill@gmail.com</p>
          <p>🌐 www.sunitaricemill.com</p>
          <p>🏭 ISO 9001:2008 | ✅ FSSAI Certified</p>

          <div style={{ marginTop: "20px", padding: "12px", backgroundColor: "#f9f9f9", borderLeft: "4px solid #9a2020" }}>
            <p style={{ fontSize: "0.85rem", margin: 0 }}><strong>Valid Processing Types:</strong></p>
            <p style={{ fontSize: "0.85rem", color: "#555", margin: "4px 0 0 0" }}>Parboiled, Raw, Steam</p>
          </div>
        </div>

        <form style={styles.form} onSubmit={handleSubmit}>

          {submitted && (
            <p style={styles.success}>✅ Order request sent! We will verify stock and contact you.</p>
          )}

          <input
            style={styles.input}
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            style={styles.input}
            type="text"
            name="riceName"
            placeholder="Rice Variety (e.g., Swarna)"
            value={form.riceName}
            onChange={handleChange}
            required
          />

          <input
            style={styles.input}
            type="text"
            name="riceType"
            placeholder="Processing Type (e.g., Parboiled)"
            value={form.riceType}
            onChange={handleChange}
            required
          />

          {isTypeEntered && (
            <div
              style={{
                ...styles.validationBadge,
                backgroundColor: isValidType ? "#eaffea" : "#ffebeb",
                color: isValidType ? "#2d6a2d" : "#9a2020",
                border: `1px solid ${isValidType ? "#a3d9a3" : "#e6b3b3"}`
              }}
            >
              {isValidType 
                ? "✅ Valid Processing Type" 
                : "⚠️ Invalid Type: Must be exactly Parboiled, Raw, or Steam"}
            </div>
          )}

          <textarea
            style={styles.input}
            name="message"
            placeholder="Quantity required and other details"
            value={form.message}
            onChange={handleChange}
            rows={4}
            required
          />

          <button 
            style={isTypeEntered && !isValidType ? styles.btnDisabled : styles.btn} 
            type="submit"
            disabled={isTypeEntered && !isValidType}
          >
            Submit Order Request
          </button>

        </form>
      </div>
    </div>
  );
}

export default Contact;