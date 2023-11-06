import React from "react";
import Laptop from "../Images/Laptop.jpeg";
import Student1 from "../Images/student.jpeg";
import Student2 from "../Images/Student2.jpeg";
import Student3 from "../Images/Student3.jpeg";

const Content2 = () => {
  const cardStyle = {
    backgroundColor: "black", // Set the background color to black
    color: "white",
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={cardStyle}
    >
      <div className="text-center">
        <div className="card mx-auto" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={Laptop}
            alt="Card image cap"
            style={{
              height: "200px",
              width: "200px",
            }}
          />
        </div>
        <div className="row ">
          <div className="col-sm-6">
            <div
              className="card"
              style={{ backgroundColor: "black", color: "white" }}
            >
              <div className="card-body">
                <p className="card-text">
                  <h6 style={{ backgroundColor: "black", color: "white" }}>
                    Conceptualize, build, and launch your personal site in 4
                    <br />
                    weeks. Become a member today to enroll in this
                    <br />
                    bootcamp, and unlock everything 10x has to offer!
                  </h6>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6" style={{ cardStyle }}>
            <div
              className="card"
              style={{ backgroundColor: "black", color: "white" }}
            >
              <div className="card-body">
                <p
                  className="card-text"
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  <h6>+ 4-week bootcamp, starting on Nov 1st</h6>
                  <h6>+ Build together with other designers</h6>
                  <h6>+ Launch with 50% off Framer (Yearly Basic Site)</h6>
                </p>
              </div>
            </div>
          </div>
          <div className="Button mx-auto mt-1">
            <button
              type="button"
              className="btn"
              style={{
                borderRadius: "7px",
                backgroundColor: "white",
                color: "black",
                height: "45px",
              }}
            >
              Become a member
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
            389 other enrolled
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content2;
