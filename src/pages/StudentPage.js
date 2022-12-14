import React from "react";

import { Link } from "react-router-dom";

import Header from "../components/Header";
import MainGraphComponent from "../components/MainGraphComponent";

export default function StudentPage({ useData }) {
  let thisUrl = window.location.href;
  let thisUrlSplit = thisUrl.split("/", -1);
  let studentName = thisUrlSplit[thisUrlSplit.length - 1];

  function getData(student) {
    return useData.filter((e) => e.name == studentName);
  }

  let studentData = getData(studentName);

  return (
    <>
      <Header text={studentName} />

      <MainGraphComponent data={studentData} />

      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  );
}
