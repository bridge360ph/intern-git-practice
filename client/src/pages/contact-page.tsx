import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div style={styles.page}>
      <nav style={styles.navbar}>
        <a style={styles.navLink} href="/about">
          About
        </a>

        <a style={styles.navLink} href="/contact">
          Contact
        </a>

        <a style={styles.navLink} href="/pricing">
          Pricing
        </a>
      </nav>

      <section style={styles.hero}>
        <p style={styles.badge}>BridgeTech Solutions</p>

        <h1 style={styles.title}>Contact Us</h1>

        <p style={styles.subtitle}>
          Questions, suggestions, or feedback? Feel free to send us a message.
        </p>
      </section>

      <section style={styles.contactBox}>
        <h2 style={styles.contactTitle}>Get In Touch</h2>

        <p style={styles.contactText}>
          We would love to hear from you. Send us your message below.
        </p>

        <input
  type="text"
  placeholder="Your Name"
  style={styles.input}
/>

<textarea
  placeholder="Write your message"
  rows={6}
  style={styles.textarea}
/>

        <button style={styles.button}>Send Message</button>
      </section>

      <section style={styles.footerBox}>
        <h3 style={styles.footerTitle}>Team Member</h3>
        <p style={styles.footerText}>Aldrich Yang</p>
      </section>
    </div>
  );
};

const styles: {
  page: React.CSSProperties;
  navbar: React.CSSProperties;
  navLink: React.CSSProperties;
  hero: React.CSSProperties;
  badge: React.CSSProperties;
  title: React.CSSProperties;
  subtitle: React.CSSProperties;
  contactBox: React.CSSProperties;
  contactTitle: React.CSSProperties;
  contactText: React.CSSProperties;
  input: React.CSSProperties;
  textarea: React.CSSProperties;
  button: React.CSSProperties;
  footerBox: React.CSSProperties;
  footerTitle: React.CSSProperties;
  footerText: React.CSSProperties;
} = {
  page: {
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(135deg, #fff5f8, #f3f0ff)",
    padding: "30px",
    color: "#3d2c3e",
  },

  navbar: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    marginBottom: "45px",
  },

  navLink: {
    textDecoration: "none",
    color: "#7b4f8f",
    fontWeight: "bold",
    backgroundColor: "#ffffff",
    padding: "10px 18px",
    borderRadius: "20px",
    boxShadow: "0 4px 12px rgba(123, 79, 143, 0.15)",
  },

  hero: {
    textAlign: "center",
    maxWidth: "750px",
    margin: "0 auto 40px",
  },

  badge: {
    display: "inline-block",
    backgroundColor: "#ffe0ec",
    color: "#a33f6b",
    padding: "8px 18px",
    borderRadius: "20px",
    fontWeight: "bold",
    marginBottom: "12px",
  },

  title: {
    fontSize: "42px",
    margin: "10px 0",
    color: "#4a305d",
  },

  subtitle: {
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#6c5a70",
  },

  contactBox: {
    backgroundColor: "#ffffff",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "30px",
    borderRadius: "25px",
    boxShadow: "0 10px 25px rgba(80, 50, 100, 0.12)",
    textAlign: "center",
  },

  contactTitle: {
    color: "#5b3b72",
    marginBottom: "10px",
  },

  contactText: {
    color: "#6d5c70",
    marginBottom: "20px",
  },

 input: {
  width: "100%",
  padding: "12px",
  borderRadius: "12px",
  border: "1px solid #ddd",
  marginBottom: "15px",
  boxSizing: "border-box",
  backgroundColor: "#ffffff",
  color: "#333333",
  fontSize: "16px",
},

textarea: {
  width: "100%",
  padding: "12px",
  borderRadius: "12px",
  border: "1px solid #ddd",
  marginBottom: "20px",
  boxSizing: "border-box",
  backgroundColor: "#ffffff",
  color: "#333333",
  fontSize: "16px",
  resize: "vertical",
},

  button: {
    backgroundColor: "#b983d6",
    color: "#ffffff",
    border: "none",
    padding: "12px 22px",
    borderRadius: "20px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  footerBox: {
    textAlign: "center",
    marginTop: "50px",
    backgroundColor: "#ffffff",
    maxWidth: "400px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20px",
    borderRadius: "22px",
    boxShadow: "0 8px 20px rgba(80, 50, 100, 0.1)",
  },

  footerTitle: {
    margin: "0 0 8px",
    color: "#5b3b72",
  },

  footerText: {
    margin: 0,
    color: "#6d5c70",
  },
};

export default ContactPage;