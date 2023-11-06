import React from "react";
import { Facebook } from "react-feather";
import { Youtube } from "react-feather";
import { Slack } from "react-feather";

const AudioVideo = () => {
  return (
    <div className="container">
      <div className="card text-center mt-5" style={{ border: "none" }}>
        <div
          className="card-body"
          style={{ backgroundColor: "black", color: "white", border: "none" }}
        >
          <h6
            className="card-title"
            style={{
              backgroundColor: "black",
              color: "red",
              border: "none",
            }}
          >
            Audio and video Lesson
          </h6>
          <h1 className="card-text">Build your Skillset</h1>
          <h6
            className="card text-center mt-4"
            style={{ color: "grey", backgroundColor: "black" }}
          >
            We are here for those who want to keep growing. Currently, you can
            <br /> jump into 3 skillsets, while we are actively working on
            adding more
          </h6>
        </div>
      </div>
      <div className="card-group d-flex justify-content-between mt-4">
        <div
          className="card mx-3"
          style={{ backgroundColor: "black", boxShadow: "10px 10px grey" }}
        >
          <span
            className="icons ml-4 mt-4"
            style={{ backgroundColor: "black", color: "white" }}
          >
            <Slack
              style={{
                color: "red",
                borderRadius: "100%",
                backgroundColor: "black",
              }}
            />
          </span>
          <div
            className="card-body"
            style={{ backgroundColor: "black", color: "white" }}
          >
            <h3 className="card-title">Visual Design</h3>
            <p className="card-text" style={{ color: "grey" }}>
              Improve your visual skills
              <br /> through hands-on
              <br />
              lessons and exercises.
            </p>
          </div>
        </div>
        <div
          className="card mx-3"
          style={{ backgroundColor: "black", boxShadow: "10px 10px grey" }}
        >
          <span
            className="icons ml-4 mt-4"
            style={{
              color: "red",
              borderRadius: "100%",
              backgroundColor: "black",
            }}
          >
            <Facebook style={{ color: "red", borderRadius: "100%" }} />
          </span>
          <div
            className="card-body"
            style={{ backgroundColor: "black", color: "white" }}
          >
            <h3 className="card-title">Product Design</h3>
            <p className="card-text" style={{ color: "grey" }}>
              Learn product design from research to UI
              <br /> design and prototyping.
            </p>
          </div>
        </div>
        <div
          className="card mx-3"
          style={{ backgroundColor: "black", boxShadow: "10px 10px grey" }}
        >
          <span
            className="icons ml-4 mt-4"
            style={{
              color: "red",
              borderRadius: "100%",
              backgroundColor: "black",
            }}
          >
            <Youtube style={{ color: "red", borderRadius: "100%" }} />
          </span>
          <div
            className="card-body"
            style={{ backgroundColor: "black", color: "white" }}
          >
            <h3 className="card-title">Career and Freelance</h3>
            <p className="card-text" style={{ color: "grey" }}>
              Learn how to present, handle feedback,
              <br /> brand yourself, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioVideo;
