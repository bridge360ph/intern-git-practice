import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div style={styles.page}>

      <nav style={styles.navbar}>
        <a style={styles.navLink} href="/about">
          About
        </a>
        {<a style={styles.navLink} href="/contact">
          Contact
        </a>}
        <a style={styles.navLink} href="/pricing">
          Pricing
        </a>
      </nav>

      <section style={styles.hero}>
        <p style={styles.badge}>BridgeTech Solutions</p>

        <h1 style={styles.title}>About Us</h1>

        <p style={styles.subtitle}>
          Learn more about our mission, services, and commitment to helping
          businesses succeed through technology.
        </p>
      </section>

      <section style={styles.card}>
        <h2 style={styles.sectionTitle}>Who We Are</h2>

        <p style={styles.text}>
          BridgeTech Solutions is a technology startup focused on creating
          software solutions for businesses and organizations.
        </p>
      </section>

      <section style={styles.card}>
        <h2 style={styles.sectionTitle}>Our Mission</h2>

        <p style={styles.text}>
          Our mission is to help clients improve efficiency and productivity
          through reliable and innovative technology.
        </p>
      </section>

      <section style={styles.card}>
        <h2 style={styles.sectionTitle}>Services We Offer</h2>

        <ul style={styles.list}>
          <li>Web Development</li>
          <li>Software Solutions</li>
          <li>Cloud Services</li>
        </ul>
      </section>

      <section style={styles.footerBox}>
        <h3 style={styles.footerTitle}>Team Member</h3>
        <p style={styles.footerText}>Ysa Andre A. Mendoza</p>
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
  card: React.CSSProperties;
  sectionTitle: React.CSSProperties;
  text: React.CSSProperties;
  list: React.CSSProperties;
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
  card: {
    backgroundColor: "#ffffff",
    maxWidth: "800px",
    margin: "0 auto 25px",
    padding: "28px",
    borderRadius: "25px",
    boxShadow: "0 10px 25px rgba(80, 50, 100, 0.12)",
    border: "2px solid #f4dff0",
  },
  sectionTitle: {
    color: "#5b3b72",
    marginBottom: "12px",
  },
  text: {
    color: "#6d5c70",
    lineHeight: "1.7",
  },
  list: {
    color: "#4e4053",
    lineHeight: "2",
    paddingLeft: "20px",
  },
  footerBox: {
    textAlign: "center",
    marginTop: "40px",
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

export default AboutPage;