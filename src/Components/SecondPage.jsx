import React from "react";

const SecondPage = () => {
  const cardStyle = {
    backgroundColor: "black", // Set the background color to black
    color: "white",
  };

  return (
    <div
      className=" d-flex justify-content-center align-items-center mt-4"
      style={{ height: "50vh" }}
    >
      <div
        className="card-body d-flex justify-content-center align-items-center"
        style={cardStyle}
      >
        <p className="card-text">
          <h6 style={{ color: "red", marginLeft: "27%" }}>
            {" "}
            Announcing our first Bootcamp
          </h6>
          <h1>Design, Build and launch your</h1>
          <h1 style={{ marginLeft: "14%" }}>best personal site yet</h1>
        </p>
      </div>
    </div>
  );
};

export default SecondPage;
