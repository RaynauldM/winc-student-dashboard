import React from "react";

import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import StudentPage from "./pages/StudentPage/StudentPage";

import useCreateObjectArray from "./customHooks/useCreateObjectArray";
import useCreateNameArray from "./customHooks/useCreateNameArray";
import useCreateAverage from "./customHooks/useCreateAverage";
import useCreateCourseArray from "./customHooks/useCreateCourseArray";

import { mockData } from "./Studenten-Mock-data";

function App() {
  let useData = useCreateObjectArray(mockData);
  let allNames = useCreateNameArray(useData);
  let dataCommon = useCreateAverage(useData, allNames);
  let allCourses = useCreateCourseArray(dataCommon);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              data={dataCommon}
              nameList={allNames}
              courses={allCourses}
            />
          }
        />
        <Route
          path="/student/:id"
          element={<StudentPage useData={useData} />}
        />
      </Routes>
    </>
  );
}

export default App;
