function Location() {
  return (
    <div className="page">
      <div className="location-header">
        <h1>Find Us</h1>
      </div>

      <div className="location-content">
        {/* ============================================================
            LEFT COLUMN: Restaurant info
            TODO: Replace ALL placeholder text with YOUR restaurant's
            address, phone number, and hours of operation.
            ============================================================ */}
        <div className="location-info">
          <h2>Address</h2>
          <p>[YOUR STREET ADDRESS]</p>
          <p>[YOUR CITY, STATE ZIP]</p>
          <p className="phone">[YOUR PHONE NUMBER]</p>

          <h2>Hours of Operation</h2>
          <div>
            <div className="hours-row">
              <span className="day">Monday – Thursday</span>
              <span className="time">[YOUR HOURS]</span>
            </div>
            <div className="hours-row">
              <span className="day">Friday</span>
              <span className="time">[YOUR HOURS]</span>
            </div>
            <div className="hours-row">
              <span className="day">Saturday</span>
              <span className="time">[YOUR HOURS]</span>
            </div>
            <div className="hours-row">
              <span className="day">Sunday</span>
              <span className="time">[YOUR HOURS]</span>
            </div>
          </div>

          <h2>Getting Here</h2>
          <p>
            [Write 1-2 sentences about how to find your restaurant. Is there
            parking? Are you near a landmark? Public transit?]
          </p>
        </div>

        {/* ============================================================
            RIGHT COLUMN: Map
            WEEK 4: Replace the placeholder below with a Google Maps embed.
            Instructions:
            1. Go to Google Maps and search for any address
            2. Click "Share" > "Embed a map"
            3. Copy the src URL from the iframe code
            4. Uncomment the iframe below and paste your URL
            ============================================================ */}
        <div className="map-container">
          <div className="map-placeholder">
            <p>
              📍 Google Maps embed goes here
              <br />
              <small>(See instructions in the code comments)</small>
            </p>
          </div>

          {/* UNCOMMENT THIS in Week 4 and replace the URL:
          <iframe
            title="Restaurant Location"
            src="YOUR_GOOGLE_MAPS_EMBED_URL_HERE"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          */}
        </div>
      </div>
    </div>
  );
}

export default Location;
