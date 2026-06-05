import React from "react";

const PricingPage: React.FC = () => {
  return (
    <div style={styles.page}>
      <nav style={styles.navbar}>
        <a style={styles.navLink} href="/about">
          About
        </a>
        { <a style={styles.navLink} href="/contact">
          Contact
        </a>}
        <a style={styles.navLink} href="/pricing">
          Pricing
        </a>
      </nav>

      <section style={styles.hero}>
        <p style={styles.badge}>BridgeTech Solutions</p>

        <h1 style={styles.title}>Choose Your Perfect Package</h1>

        <p style={styles.subtitle}>
          Simple, friendly, and affordable services for coding help, websites,
          and full web app projects.
        </p>
      </section>

      <section style={styles.cardsContainer}>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Basic Coding</h2>
          <p style={styles.price}>₱3,000</p>
          <p style={styles.description}>
            Best for small code fixes, debugging, and simple feature updates.
          </p>

          <ul style={styles.list}>
            <li>Code checking</li>
            <li>Bug fixing</li>
            <li>Small updates</li>
            <li>Beginner-friendly explanations</li>
          </ul>

          <button style={styles.button}>Choose Basic</button>
        </div>

        <div style={{ ...styles.card, ...styles.featuredCard }}>
          <p style={styles.featuredLabel}>Most Popular</p>

          <h2 style={styles.cardTitle}>Website Package</h2>
          <p style={styles.price}>₱8,000</p>
          <p style={styles.description}>
            Perfect for a clean and simple business website with important
            pages.
          </p>

          <ul style={styles.list}>
            <li>Homepage</li>
            <li>About page</li>
            <li>Contact page</li>
            <li>Responsive layout</li>
          </ul>

          <button style={styles.featuredButton}>Choose Website</button>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Premium Web App</h2>
          <p style={styles.price}>₱20,000</p>
          <p style={styles.description}>
            Made for custom systems that need database support and admin tools.
          </p>

          <ul style={styles.list}>
            <li>Custom web app</li>
            <li>Database setup</li>
            <li>Admin dashboard</li>
            <li>Deployment support</li>
          </ul>

          <button style={styles.button}>Choose Premium</button>
        </div>
      </section>

      <section style={styles.footerBox}>
        <h3 style={styles.footerTitle}>Team Member</h3>
        <p style={styles.footerText}>Nicholas Pastiu</p>
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
  cardsContainer: React.CSSProperties;
  card: React.CSSProperties;
  featuredCard: React.CSSProperties;
  featuredLabel: React.CSSProperties;
  cardTitle: React.CSSProperties;
  price: React.CSSProperties;
  description: React.CSSProperties;
  list: React.CSSProperties;
  button: React.CSSProperties;
  featuredButton: React.CSSProperties;
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
  cardsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#ffffff",
    width: "280px",
    padding: "28px",
    borderRadius: "25px",
    boxShadow: "0 10px 25px rgba(80, 50, 100, 0.12)",
    textAlign: "center",
    border: "2px solid #f4dff0",
  },
  featuredCard: {
    transform: "scale(1.05)",
    border: "2px solid #c78be0",
    backgroundColor: "#fff9fd",
  },
  featuredLabel: {
    display: "inline-block",
    backgroundColor: "#d9b3ff",
    color: "#4b2564",
    padding: "6px 14px",
    borderRadius: "15px",
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  cardTitle: {
    fontSize: "24px",
    marginBottom: "10px",
    color: "#5b3b72",
  },
  price: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#c05a8e",
    margin: "10px 0",
  },
  description: {
    fontSize: "15px",
    color: "#6d5c70",
    lineHeight: "1.5",
    minHeight: "70px",
  },
  list: {
    textAlign: "left",
    lineHeight: "1.9",
    color: "#4e4053",
    marginTop: "20px",
    marginBottom: "25px",
  },
  button: {
    backgroundColor: "#f6c4dc",
    color: "#4a305d",
    border: "none",
    padding: "12px 22px",
    borderRadius: "20px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  featuredButton: {
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

export default PricingPage;