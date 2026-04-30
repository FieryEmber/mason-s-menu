import { Link } from "react-router-dom";
import restaurantPhoto from "../assets/IMG_0077.PNG";

function Home() {
  return (
    <div className="page">
      {/* ============================================================
          HERO SECTION
          TODO: Replace the name, tagline, and button text with yours.
          ============================================================ */}
      <section className="hero">
        <h1>Mason's Menu</h1>
        <p className="tagline">"Where Comfort Meets Craft."</p>
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
            A modern upscale restaurant with a wide range of tastes and 
            techniques from around the world. 
            Every dish presented as not just a meal, but as a work of art.
          </p>
          <p style={{ marginTop: "1rem" }}>
            Our approach centers on high-quality, thoughtfully sourced ingredients, 
            combining fresh seafood, premium cuts of meat, and seasonal produce to 
            build dishes that feel both familiar and elevated.
            By blending Southern influences with global flavors, 
            we create a dining experience that is approachable yet distinctive. Where 
            each dish is crafted to surprise, satisfy, and leave a lasting impression.
          </p>
        </div>
        <div className="welcome-image">
          {/* TODO: Replace with an <img> tag once you add images in Week 4 */}
          <img
    src={restaurantPhoto}
    alt="Restaurant interior"
    style={{ width: "100%", height: "auto", borderRadius: "8px" }}
  />
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
            <div className="feature-icon">🍝</div>
            <h3>Fresh, Made-to-Order Experiences</h3>
            <p>Every dish is prepared fresh after you order, using high-quality ingredients for maximum flavor and consistency.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏡</div>
            <h3>Locally Loved in Kernersville</h3>
            <p>A community favorite known for friendly service, generous portions, and a welcoming atmosphere that keeps guests coming back.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🫶</div>
            <h3>Comfort Food with Heart</h3>
            <p>Classic, satisfying dishes made to feel familar yet unique.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
