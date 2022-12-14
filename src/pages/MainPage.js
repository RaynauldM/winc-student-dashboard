import React from "react";

import Header from "../components/Header";
import MainGraphComponent from "../components/MainGraphComponent";
import NameList from "../components/NameList";

export default function MainPage({ data, nameList, courses }) {
  return (
    <>
      <div className="App">
        <Header text="--Student Dash Board--" />
        <MainGraphComponent data={data} courses={courses} />
        <NameList nameList={nameList} />
      </div>
    </>
  );
}
