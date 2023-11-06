import React from "react";
import FirstPage from "../Images/black.jpeg";
import { ShoppingBag } from "react-feather";
import { Codesandbox } from "react-feather";
import { Cpu } from "react-feather";
import { Radio } from "react-feather";
import { Twitter } from "react-feather";
import { Facebook } from "react-feather";
import { Youtube } from "react-feather";
import { Slack } from "react-feather";
import { Sun } from "react-feather";

const content = () => {
  const backgroundStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Adjusted height to fill the viewport
    backgroundColor: "black", // Set the background color to black
    background: `url(${FirstPage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const cardStyle = {
    backgroundColor: "transparent", // Make the card background transparent
    padding: "20px", // Add some padding to the card
    borderRadius: "10px", // Add rounded corners to the card
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", // Add a subtle shadow to the card
  };

  return (
    <div style={backgroundStyle}>
      <div className="card text-center" style={cardStyle}>
        <div className="card-body">
          <p style={{ color: "red" }}>Welcome to 10xDesigners</p>
          <h1 className="card-title" style={{ color: "white" }}>
            Expand your Skillset and
            <br />
            Increase your earning potential
          </h1>
          <p className="card-text" style={{ color: "grey" }}>
            Expand your Design skillset through live workshops, async
            <br />
            lessons, and connect with like-minded individuals
          </p>
          <button
            href="#"
            className="btn btn-primary"
            style={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "7px",
            }}
          >
            Start your Journey
          </button>
        </div>
        <div
          className="card d-flex justify-content-center align-items-center mt-5"
          style={cardStyle}
        >
          <div className="card-body" style={{ color: "white" }}>
            We empower designers from top companies
          </div>
          <div>
            <div>
              <span className="icons mr-4">
                <Slack style={{ color: "red" }} />
              </span>
              <span className="icons mr-4">
                <Sun style={{ color: "red" }} />
              </span>
              <span className="icons mr-4">
                <ShoppingBag style={{ color: "red" }} />
              </span>
              <span className="icons mr-4">
                <Codesandbox style={{ color: "red" }} />
              </span>
              <span className="icons mr-4">
                <Cpu style={{ color: "red" }} />
              </span>
              <span className="icons mr-4">
                <Radio style={{ color: "red" }} />
              </span>
              <span className="icons mr-4">
                <Twitter style={{ color: "red" }} />
              </span>
              <span className="icons mr-4">
                <Facebook style={{ color: "red" }} />
              </span>
              <span className="icons mr-4">
                <Youtube style={{ color: "red" }} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default content;
