import React from "react";

function Button({ data }) {
  return (
    <button className="rounded bg-black text-white p-2">{data.text}</button>
  );
}

export default Button;
