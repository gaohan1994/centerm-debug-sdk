import React, { useState, useEffect } from "react";

function Demo() {
  // useEffect(() => {
  //   throw new Error("hello");
  // }, []);

  const throwErorr = () => {
    throw new Error("click error");
  };

  return (
    <div>
      <button onClick={() => throwErorr()}>click error</button>
    </div>
  );
}

export default Demo;
