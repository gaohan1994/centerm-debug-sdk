import React, { useState, useEffect } from "react";

function Demo() {
  useEffect(() => {
    throw new Error("hello");
  }, []);

  return <div>demo</div>;
}

export default Demo;
