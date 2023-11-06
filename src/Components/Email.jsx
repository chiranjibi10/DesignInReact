import React from "react";

const Email = () => {
  return (
    <div>
      <div className="card text-center" style={{ backgroundColor: "black" }}>
        <h6 style={{ color: "red", backgroundColor: "black" }}>Get a taste</h6>
        <div
          className="card-body"
          style={{ backgroundColor: "black", color: "white" }}
        >
          <h1 className="card-title">Try a Lesson</h1>
          <h6 className="card-text" style={{ color: "grey" }}>
            Drop your email below, and we'll send you one video lesson for
            <br /> free, so you get a taste of the lessons on 10x.
          </h6>
          <form className="form-inline justify-content-center">
            <div className="form-group mb-2 mt-5">
              <label htmlFor="inputemail2" className="sr-only">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputemail2"
                placeholder="Email address"
                style={{
                  borderRadius: "5px",
                  borderColor: "black",
                  width: "250px",
                }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary mb-2 ml-4 mt-5"
              style={{ borderRadius: "5px" }}
            >
              Send Review
            </button>
          </form>
          <small style={{ color: "grey" }}>
            By signing up you agree to receive occasional updates
          </small>
        </div>
      </div>
    </div>
  );
};

export default Email;
