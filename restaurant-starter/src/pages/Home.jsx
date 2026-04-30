import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      {/* ============================================================
          HERO SECTION
          TODO: Replace the name, tagline, and button text with yours.
          ============================================================ */}
      <section className="hero">
        <h1>[YOUR RESTAURANT NAME]</h1>
        <p className="tagline">[YOUR TAGLINE HERE]</p>
        <Link to="/menu" className="cta-button">
          View Our Menu
        </Link>
      </section>

      {/* ============================================================
          WELCOME SECTION
          TODO: Write 1-2 paragraphs about YOUR restaurant.
          What makes it special? What's your story?
          ============================================================ */}
      <section className="welcome-section">
        <div className="welcome-text">
          <h2>Welcome</h2>
          <p>
            [Write a paragraph about your restaurant here. What do you serve?
            What makes you special? Why should someone eat here? Use your
            planning document to guide this section.]
          </p>
          <p style={{ marginTop: "1rem" }}>
            [Write a second paragraph. Maybe talk about your history, your
            ingredients, your philosophy, or what makes the dining experience
            unique.]
          </p>
        </div>
        <div className="welcome-image">
          {/* TODO: Replace with an <img> tag once you add images in Week 4 */}
          📸 Add your restaurant photo here
        </div>
      </section>

      {/* ============================================================
          FEATURE CARDS
          TODO: Change the icons, titles, and descriptions below
          to highlight 3 things that make YOUR restaurant special.
          ============================================================ */}
      <section>
        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">🍽️</div>
            <h3>[Feature 1 Title]</h3>
            <p>[Describe what makes this feature special about your restaurant.]</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3>[Feature 2 Title]</h3>
            <p>[Describe another highlight of your restaurant.]</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">❤️</div>
            <h3>[Feature 3 Title]</h3>
            <p>[Describe a third thing that sets you apart.]</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
