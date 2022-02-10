import React from "react";
import Header from "./Header";
import ProductController from "./ProductController";

function App() {
  const StyledComponentStyles = {
    backgroundColor: "#c0c3d9",
    height: "100vh",
    marginTop: "8vh",
    marginLeft: "10vw",
    marginRight: "10vw",
    paddingLeft: "10vw",
    paddingRight: "10vw",
    paddingTop: "5vh",
  };

  return (
    <div style={StyledComponentStyles}>
      <Header />
      <ProductController />
    </div>
  );
}

export default App;
