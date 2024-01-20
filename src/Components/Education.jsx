import "./Education.css";

function Education() {
  return (
    <>
      <div className="education-main-container">
        <div className="Emain-container">
          <h2 className="heading">EDUCATION</h2>
          <div className="education">
            <div className="degree">
              <h2 className="degree-name">
                Bachelors Of Computer Aplication (Science)
              </h2>
              <h3 className="degree-collage">
                Dr. D. Y. Patil University, Pune
              </h3>
              <h3 className="date">
                Expected Graduation Date: May 2024{" "}
                <span className="space"></span>
                Average SGPA : 9.09
              </h3>
            </div>
            <div className="degree">
              <h2 className="degree-name">11th And 12th</h2>
              <h3 className="degree-collage">
                Shree Ganesh Junior Collage, Shirdi
              </h3>
              <h3 className="date">
                March 2021 <span className="space"></span>
                Percentage : 71.33%
              </h3>
            </div>
            <div className="degree">
              <h2 className="degree-name">10th</h2>
              <h3 className="degree-collage">New English School, Chitali</h3>
              <h3 className="date">
                March 2019 <span className="space"></span>
                Percentage : 65.20%
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
