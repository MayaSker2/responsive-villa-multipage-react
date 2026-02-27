import './Form.css';

const Form = () => {
  return (
    <div className="contact_form">
      <form>

        <div className="form_group">
          <label htmlFor="name">Full Name</label>
          <input id="name" type="text" placeholder="Your Name" />
        </div>

        <div className="form_group">
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" placeholder="Your E-mail" />
        </div>

        <div className="form_group">
          <label htmlFor="subject">Subject</label>
          <input id="subject" type="text" placeholder="Subject" />
        </div>

        <div className="form_group">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Your Message"></textarea>
        </div>

        <button type="submit">Send Message</button>

      </form>
    </div>
  );
};

export default Form;