function About() {
  return (
    <div className="page">
      {/* ============================================================
          ABOUT HEADER
          TODO: Change the heading and subtitle for YOUR restaurant.
          ============================================================ */}
      <div className="about-header">
        <h1>About The Chef</h1>
        <p className="subtitle">The men behind the menu</p>
      </div>

      {/* ============================================================
          YOUR STORY
          TODO: Write 2-3 paragraphs telling YOUR restaurant's story.
          Be creative! You can make it all up. Think about:
          - How did the restaurant start?
          - Who founded it and why?
          - What is the restaurant's mission or philosophy?
          ============================================================ */}
      <div className="about-story">
        <p>
          Mason’s Menu began with a simple idea: 
          take the comfort foods people know and love and elevate them 
          into something memorable. Founded by Chef Mason, a graduate of 
          Johnson & Wales University, the restaurant was inspired by his 
          time working alongside talented chefs at large-scale events like
           the Masters Tournament and in country clubs. 
           It was in these fast-paced, high-expectation environments that 
           he developed a passion for blending precision with creativity, 
           leading him to create a space where familiar dishes could be 
           reimagined with bold flavors and refined technique.
        </p>
        <p>
          As the concept grew, so did the vision. Chef Mason began 
          crafting a menu that reflects both his Southern roots and his 
          appreciation for global cuisine, combining elements of Cajun, 
          Italian, and Asian-inspired flavors into one cohesive dining 
          experience. Along the way, he focused on high-quality 
          ingredients, thoughtful preparation, and consistency—lessons 
          learned from years in demanding kitchens. Today, Mason’s Menu 
          is known for its unique take on elevated comfort food, offering 
          dishes that feel approachable yet distinctive.
        </p>
        <p>
          At its core, Mason’s Menu is about creating an experience that 
          goes beyond the plate. The mission is to provide guests with food 
          that feels both comforting and exciting, in an atmosphere that is 
          welcoming and refined. Every detail—from the ingredients to the 
          presentation—is designed to leave a lasting impression, giving guests 
          a reason to return not just for the food, but for the experience as a 
          whole.
        </p>
      </div>

      <div className="about-divider"></div>

      {/* ============================================================
          MEET THE TEAM
          TODO: Create 2-3 fictional team members for YOUR restaurant.
          Change the emoji, name, role, and bio for each person.
          ============================================================ */}
      <div className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-avatar">🧑‍🍳</div>
            <h3>Chef Mason</h3>
            <p className="role">Executive Chef & Founder</p>
            <p>With a background from Johnson & Wales and 
              experience at elite culinary events, Chef Mason brings a creative, 
              globally inspired approach to elevated comfort food.</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">🤵‍♀️</div>
            <h3>Olivia Carter</h3>
            <p className="role">General Manager</p>
            <p>Olivia ensures every guest experience is seamless, 
              combining her passion for hospitality with a sharp eye for 
              detail and service excellence.</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">🔪</div>
            <h3>Marcus Reed</h3>
            <p className="role"> Sous Chef</p>
            <p>Marcus specializes in bold flavors and precise execution, 
              helping bring Chef Mason’s vision to life with consistency and 
              creativity in every dish.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
