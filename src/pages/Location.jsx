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
          <p>9361 Benefit Church Rd.</p>
          <p>Kernersville, NC 27284</p>
          <p className="phone">336-813-8438</p>

          <h2>Hours of Operation</h2>
          <div>
            <div className="hours-row">
              <span className="day">Monday – Thursday</span>
              <span className="time">11:00 AM – 10:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="day">Friday</span>
              <span className="time">11:00 AM – 11:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="day">Saturday</span>
              <span className="time">11:00 AM – 10:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="day">Sunday</span>
              <span className="time">11:00 AM – 10:00 PM</span>
            </div>
          </div>

          <h2>Getting Here</h2>
          <p>
            You’ll find us right in the heart of Kernersville, just a few minutes from Fourth of July Park and the downtown strip. 
            There’s plenty of free parking out front, and we’re an easy stop whether you’re driving through town or coming in from Winston-Salem or Greensboro.
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
            <iframe
            title="Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3219.301028013461!2d-80.0508292!3d36.207877499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8852fe32ff3f49ef%3A0x3d6368bb3eea75d4!2s9361%20Benefit%20Church%20Rd%2C%20Kernersville%2C%20NC%2027284!5e0!3m2!1sen!2sus!4v1777564164778!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
            </p>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Location;
