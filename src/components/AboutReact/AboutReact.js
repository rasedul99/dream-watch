import React from "react";
import "./AboutReact.css";

const AboutReact = () => {
  return (
    <div className="Qna-container">
      <h2>Questions And Answer</h2>

      <h3>How does react works ?</h3>
      <p>
        Ans : React is a library for building user interfaces.It converts
        JavaScript code to JSX(JavaScript XML) by the help of react package. It
        makes a vartual dom when users interact on the client site. React
        compares changes between real DOM and vartual DOM. And it update only
        the spacific changes on the Real DOM without reloading the webpage by
        the help of React DOM. As it works without reloading the page it is very
        fast and popular among the developers
      </p>

      <h3>how does usestate works ? </h3>
      <p>
        Ans : useState is a Hook that allows developer to have state variables
        in functional components. It can store value, objects in an array. Use
        state is an array which has 2 elements. One is a start variable and
        other is a store function. The set function help developer to store the
        value on the state variable as an array for future uses.
      </p>
    </div>
  );
};

export default AboutReact;
