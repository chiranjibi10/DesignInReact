import React from "react";
import Student1 from "../Images/student.jpeg";
import Student2 from "../Images/Student2.jpeg";
import Student3 from "../Images/Student3.jpeg";

const HeroSection = () => {
  const cardStyle = {
    backgroundColor: "black", // Set the background color to black
    color: "white",
  };

  return (
    <div>
      <div className="card text-center mt-5 mb-5" style={cardStyle}>
        <div className="card-body">
          <h6 className="card-title" style={{ color: "red" }}>
            What's Included
          </h6>
          <h1>A bootcamp packed with</h1>
          <h2>lessons and live sessions</h2>
        </div>
      </div>

      <div
        className="text-center"
        style={{ margin: "0 auto", padding: " 0px 80px" }}
      >
        <table className="table" style={{ color: "white" }}>
          <thead>
            <tr>
              <th scope="col">Week 1: Discovery & Definition</th>
              <th scope="col">Week 2: Structure & Design</th>
              <th scope="col">Week 3: Building & Interacting</th>
              <th scope="col">Week 4: Final Touches & Launch</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Identifying your Unique Selling Proposition (USP)</td>
              <td>Site Mapping</td>
              <td>Creating Interactive Elements</td>
              <td>Optimizing for Performance</td>
            </tr>
            <tr>
              <td>Wireframing & Prototyping</td>
              <td>Designing User Interfaces</td>
              <td>Working with APIs</td>
              <td>Testing and Debugging</td>
            </tr>
            <tr>
              <td>Content Strategy</td>
              <td>Responsive Design</td>
              <td>Implementing User Feedback</td>
              <td>Preparing for Launch</td>
            </tr>
            <tr>
              <td>Visual Design Principles</td>
              <td>Typography and Color Theory</td>
              <td>Real-time Collaboration</td>
              <td>Final Polishing</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h1 className="text-center" style={{ color: "red" }}>
        The Bootcamp is now live, Jump in!
      </h1>
      <div className="text-center mt-4">
        <button
          type="button"
          className="custom-btn btn-3"
          style={{
            borderRadius: "7px",
            backgroundColor: "black",
            color: "white",
            height: "45px",
          }}
        >
          <span>Become a member</span>
        </button>
        <img
          className="card-img-top"
          src={Student1}
          alt="Student"
          style={{
            height: "35px",
            width: "30px",
            borderRadius: "100%",
            marginLeft: "20px",
          }}
        />
        <img
          className="card-img-top"
          src={Student2}
          alt="Student"
          style={{
            height: "35px",
            width: "30px",
            borderRadius: "100%",
            marginLeft: "-10px",
          }}
        />
        <img
          className="card-img-top"
          src={Student3}
          alt="Student"
          style={{
            height: "35px",
            width: "30px",
            borderRadius: "100%",
            marginLeft: "-10px",
            paddingRight: "5px",
          }}
        />
        389 others enrolled
      </div>
    </div>
  );
};

export default HeroSection;
