import React, { useState } from "react";

import { VictoryChart, VictoryAxis, VictoryBar } from "victory";

import CheckFunDiff from "./CheckFunDiff/CheckFunDiff";

export default function MainGraphComponent({ data, courses }) {
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
  let barR = 0.4;
  return (
    <div style={{ width: 5000 }} className="graph-container">
      <div className="fun-diff-container">
        <CheckFunDiff handleChange={handleChange} />
      </div>
      <VictoryChart
        padding={{ top: 20, bottom: 600, left: 70, right: 40 }}
        domainPadding={150}
        height={2000}
        width={20000}
        style={{ parent: { marginLeft: 30, marginBottom: 45 } }}
      >
        <VictoryAxis
          style={{
            tickLabels: { fontSize: 60, padding: 250, angle: 90 },
          }}
          tickValues={courses}
        />
        <VictoryAxis
          dependentAxis
          domain={{ y: [1, 5] }}
          style={{
            tickLabels: { fontSize: 80 },
          }}
          tickValues={[1, 2, 3, 4, 5]}
        />
        {showFun ? (
          <VictoryBar
            data={data}
            x="course"
            y="fun"
            alignment="start"
            style={{ data: { fill: "blue" } }}
            barRatio={barR}
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
            barRatio={barR}
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
    </div>
  );
}
