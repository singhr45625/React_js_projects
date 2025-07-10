import { useState } from "react";
import "../App.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submit
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="page-container">
      <h2>Contact Us</h2>
      {submitted && <p style={{ color: "green" }}>Thank you for your message!</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label>Message:</label><br />
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
