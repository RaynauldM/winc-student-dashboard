import "./App.css";
import React, { useState } from "react";

import { Route, Routes, Link } from "react-router-dom";

import { VictoryBar, VictoryChart, VictoryAxis, TextSize } from "victory";

import { mockData } from "./Studenten-Mock-data";

let data = mockData;

function createArrayOfObjects() {
  let nArray = data.split(/\r?\n/);

  let qArray = [];
  nArray.map((e) => {
    let x = e.split(",");
    qArray.push(x);
  });

  let pArray = [];

  qArray.map((e) => {
    pArray.push({
      name: e[0],
      course: e[1],
      fun: Number(e[2]),
      diff: Number(e[3]),
    });
  });

  return pArray;
}

let useData = createArrayOfObjects();

const testData = [
  { name: "Ray", course: "course1", fun: 4, diff: 6 },
  { name: "Ray", course: "course2", fun: 8, diff: 7 },
  { name: "Ray", course: "course3", fun: 9, diff: 4 },
  { name: "Tom", course: "course1", fun: 2, diff: 7 },
  { name: "Tom", course: "course2", fun: 1, diff: 2 },
  { name: "Tom", course: "course3", fun: 5, diff: 5 },
  { name: "Fien", course: "course1", fun: 6, diff: 2 },
  { name: "Fien", course: "course2", fun: 5, diff: 8 },
  { name: "Fien", course: "course3", fun: 4, diff: 2 },
];

let useOrTestData = useData;

let dataCommon = [];
let allNames = [];

//find all names and put them in allNames
useOrTestData.forEach((obj) => {
  if (!allNames.includes(obj.name)) allNames.push(obj.name);
});

//find all the courses and put them in dataCommon
useOrTestData.forEach((obj) => {
  for (let key in obj) {
    if (!dataCommon.some((co) => co.course == obj.course)) {
      dataCommon.push({ course: `${obj.course}`, fun: 0, diff: 0 });
    }
  }
});

//find all the fun and diff per course and update dataCommon

dataCommon.forEach((obj) => {
  useOrTestData.map((e) => {
    if (e.course == obj.course) {
      obj.fun += e.fun;
      obj.diff += e.diff;
    }
  });
  obj.fun = Math.floor(obj.fun / allNames.length);
  obj.diff = Math.floor(obj.diff / allNames.length);
});

function Header({ text }) {
  return (
    <>
      <h1>{text}</h1>
    </>
  );
}

function MainGraphComponent({ data }) {
  let [showFun, setShowFun] = useState(true);
  let [showDiff, setShowDiff] = useState(true);

  function handleChange(event) {
    let { id, checked } = event.target;
    if (id == "checkFun") {
      checked ? setShowFun(true) : setShowFun(false);
    }
    if (id == "checkDiff") {
      checked ? setShowDiff(true) : setShowDiff(false);
    }
  }

  return (
    <>
      <VictoryChart domainPadding={30} horizontal={true} height={2000}>
        <VictoryAxis style={{ tickLabels: { fontSize: 5 } }} />
        <VictoryAxis dependentAxis />
        {showFun ? (
          <VictoryBar
            data={data}
            x="course"
            y="fun"
            alignment="start"
            style={{ data: { fill: "blue" } }}
          />
        ) : (
          <VictoryBar
            data={data}
            x="course"
            y="fun"
            style={{ data: { opacity: 0 } }}
          />
        )}

        {showDiff ? (
          <VictoryBar
            data={data}
            x="course"
            y="diff"
            alignment="end"
            style={{ data: { fill: "green" } }}
          />
        ) : (
          <VictoryBar
            data={data}
            x="course"
            y="diff"
            style={{ data: { opacity: 0 } }}
          />
        )}
      </VictoryChart>
      <CheckFunDiff handleChange={handleChange} />
    </>
  );
}

function CheckFunDiff({ handleChange }) {
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

function NameList({ nameList }) {
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

function StudentPage() {
  let thisUrl = window.location.href;
  let thisUrlSplit = thisUrl.split("/", -1);
  let studentName = thisUrlSplit[thisUrlSplit.length - 1];

  function getData(student) {
    return useOrTestData.filter((e) => e.name == studentName);
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

function MainPage() {
  let [data] = useState(dataCommon);
  let [nameList] = useState(allNames);
  return (
    <>
      <div className="App">
        <Header text="--Student Dash Board--" />
        <MainGraphComponent data={data} />
        <NameList nameList={nameList} />
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/student/:id" element={<StudentPage />} />
      </Routes>
    </>
  );
}

export default App;
