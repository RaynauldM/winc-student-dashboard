import React from "react";

export default function CheckFunDiff({ handleChange }) {
  return (
    <>
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
    </>
  );
}
