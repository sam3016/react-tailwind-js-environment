import React from "react";

function App(props) {
  const data = props.props.data;
  return (
    <h1 className="text-3xl font-bold underline">{data}</h1>
  );
};

export default App;
