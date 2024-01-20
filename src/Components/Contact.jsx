import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="contact-main-container">
        <div className="c-main-container">
          <h2 className="heading">Contact Me</h2>
          <div className="main-container">
            <div className="skills">
              <div className="skill-img">
                <a
                  href="https://www.linkedin.com/in/prasad-shelke-1b5764233/"
                  target="_blank"
                >
                  <img src="src/Image/linkedin.jpeg" alt="linkedin" />
                </a>
              </div>
              <div className="skill-img">
                <a href="https://github.com/Prasad1102" target="_blank">
                  <img src="src/Image/github.jpeg" alt="github" />
                </a>
              </div>
              <div className="skill-img">
                <a
                  href="https://www.facebook.com/prasad.shelke.5686"
                  target="_blank"
                >
                  <img src="src/Image/facebook.jpeg" alt="facebook" />
                </a>
              </div>
              <div className="skill-img">
                <a
                  href="https://www.instagram.com/prasad_shelke_1102/"
                  target="_blank"
                >
                  <img src="src/Image/insta.jpeg" alt="instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
