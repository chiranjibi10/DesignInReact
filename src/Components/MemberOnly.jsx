import React from "react";

const MemberOnly = () => {
  return (
    <div>
      <div className="card text-center mt-5" style={{ border: "none" }}>
        <div
          className="card-body"
          style={{ backgroundColor: "black", color: "white" }}
        >
          <h6 className="card-title" style={{ color: "red" }}>
            Member only content
          </h6>
          <h1 className="card-text">Unlock hours of</h1>
          <h1>design education</h1>
        </div>
      </div>
      <div className="text-center">
        <div className="card-group">
          <div
            className="card"
            style={{ backgroundColor: "black", color: "white" }}
          >
            <div className="card-body">
              <h1 className="card-title">
                42+
                <br />
                Lessons
              </h1>

              <h6 className="card-text" style={{ color: "grey" }}>
                How to present designs
                <br />
                <br />
                Using AI tools for design
                <br />
                <br />
                Balancing composition
                <br />
                <br />
                Creating color palettes
                <br />
                <br />
                Train your designer eye
              </h6>
            </div>
          </div>
          <div
            className="card"
            style={{ backgroundColor: "black", color: "white" }}
          >
            <div
              className="card-body"
              style={{ backgroundColor: "black", color: "white" }}
            >
              <h1 className="card-title">
                36+
                <br />
                Workshops
              </h1>
              <h6 className="card-text" style={{ color: "grey" }}>
                Config poster breakdown
                <br />
                <br />
                prompt engineering
                <br />
                <br />
                Motion design with Lottie
                <br />
                <br />
                intro to type design
                <br />
                <br />
                How to build an Audience
              </h6>
            </div>
          </div>
          <div
            className="card"
            style={{ backgroundColor: "black", color: "white" }}
          >
            <div
              className="card-body"
              style={{ backgroundColor: "black", color: "white" }}
            >
              <h1 className="card-title">
                12+
                <br />
                Challenges
              </h1>
              <h6 className="card-text" style={{ color: "grey" }}>
                Spatial Ui
                <br />
                <br />
                Making a statement
                <br />
                <br />
                All about the Footer
                <br />
                <br />
                Design a(VST) plugin
                <br />
                <br />
                Design Patterns
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberOnly;
