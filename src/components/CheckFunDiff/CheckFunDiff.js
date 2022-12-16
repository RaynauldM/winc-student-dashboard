import React from "react";

import "./CheckFunDiff.css";

export default function CheckFunDiff({ handleChange }) {
  return (
    <div className="container">
      <label>
        <input
          type="checkbox"
          id="checkFun"
          onChange={handleChange}
          defaultChecked={true}
        />
        Grade of fun (blue)
      </label>
      <label>
        <input
          type="checkbox"
          id="checkDiff"
          onChange={handleChange}
          defaultChecked={true}
        />
        Grade of difficulty (green)
      </label>
    </div>
  );
}
