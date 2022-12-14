import React from "react";
import { Link } from "react-router-dom";

export default function NameList({ nameList }) {
  return (
    <>
      <h3>Studentlist</h3>

      <ul>
        {nameList.map((element, index) => (
          <li key={index}>
            <Link to={`/student/${element}`}>{element}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
