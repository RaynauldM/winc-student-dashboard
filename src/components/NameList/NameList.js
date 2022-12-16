import React from "react";
import { Link } from "react-router-dom";

import "./NameList.css";

export default function NameList({ nameList }) {
  return (
    <div className="listContainer">
      <h3>Studentlist</h3>

      <ul className="list">
        {nameList.map((name, index) => (
          <li key={index}>
            <Link to={`/student/${name}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
