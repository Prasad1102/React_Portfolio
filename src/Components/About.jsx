import "./About.css";
import Education from "./Education";
function About() {
  return (
    <>
      <div className="about-main-container">
        <div className="about-text">
          <h2 className="about-heading">About Me</h2>
          <p className="About-Me">
            I am currently immersed in pursuing my Bachelor's degree in Computer
            Science at Dr. D. Y. Patil University located in Pune, India. <br />
            My academic journey has been a captivating exploration into the
            intricacies of computing, programming, and the foundations of
            technology.
            <br /> While I haven't yet delved into the professional landscape, I
            am fervently enthusiastic about channeling my technical acumen and
            passion <br />
            for technology into the vibrant realm of the tech industry,
            particularly in the captivating sphere of web development. My
            dedication to mastering the craft of web development and database
            management led me to undertake an invigorating one-month internship
            at CodeClause. During this invaluable experience, I actively engaged
            in honing my coding skills, particularly in the context of web
            development, and gained practical insights into managing and
            optimizing databases. This brief yet immersive internship fueled my
            passion and reaffirmed my commitment to pursuing a career in the
            tech industry. Embracing the dynamic world of Computer Science, I
            have remained resolute in my choice of specialization. My
            fascination with web development, coding, and the seamless
            management of databases continues to drive my academic pursuits. I
            am deeply invested in expanding my knowledge base and refining my
            skills in these domains, recognizing the vast potential they hold in
            shaping the digital landscape. As I embark on this exhilarating
            journey, I am enthusiastic about the prospect of contributing my
            expertise and dedication to the ever-evolving tech industry. My
            aspirations align with a fervent desire to apply my proficiency in
            web development and database management to real-world challenges,
            contributing meaningfully to innovative projects and technological
            advancements.
          </p>
        </div>
        <div className="about-image">
          <img src="src/Image/programmer.png" alt="Programmer" />
        </div>
      </div>
      <h1 className="education-heading">Education</h1>
      <Education />
    </>
  );
}

export default About;
