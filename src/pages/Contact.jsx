import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  // Validate form fields
  function validate() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name so we know who to thank!";
    }

    if (!formData.email.trim()) {
      newErrors.email = "We need your email to respond to you.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Tell us how we can help you!";
    }

    return newErrors;
  }

  // Handle input changes
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }

    if (status) {
      setStatus("");
    }
  }

  // Handle submit
  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("Thanks for reaching out! We’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  }

  return (
    <div className="page">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>Questions, feedback, or cravings? We’re here for you.</p>
      </div>

      <div className="form-container">
        {status && <p className="success-msg">{status}</p>}

        <div className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="What can we help you with?"
              rows="5"
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <button onClick={handleSubmit} className="submit-btn">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;