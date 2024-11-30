import React, { useState } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import './ContactForm.css'; // Assuming you have custom CSS styles for further adjustments

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Just printing form data for now
    // You can send the data to the backend here
  };

  return (
    <div className="container py-5">
      <div className="row">
        {/* First div: Contact information */}
        <div className="col-md-6 mb-4">
          <div className="contact-info">
            <div className="d-flex align-items-center">
              <PhoneInTalkIcon className='contact-icon me-2 mb-3 fs-1' />
              <h4 className="ml-3 text-dark">Call To Us</h4>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
            <hr className='w-50'/>
            <div className="d-flex align-items-center">
              <MailOutlineIcon className='contact-icon me-2 mb-3 fs-1 '  />
              <h4 className="ml-3 text-dark">Write To Us</h4>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Email: customer@exclusive.com</p>
            <p>Email: support@exclusive.com</p>
          </div>
        </div>

        {/* Second div: Contact Form */}
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row  d-md-flex mb-3">
              <div className="col-md-3 col-sm me-2">
                <input
                  type="text"
                  className="form-control contact-input"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-3 col-sm me-2">
                <input
                  type="email"
                  className="form-control contact-input"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-3 col-sm me-sm-2">
                <input
                  type="tel"
                  className="form-control contact-input"
                  placeholder="Your Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group mb-3">
              <textarea
                className="form-control"
                placeholder="Your Message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn contact-submit-button float-right">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
