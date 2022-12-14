export default function useCreateAverage(data, allNames) {
  let dataCommon = [];
  data.forEach((obj) => {
    for (let key in obj) {
      if (!dataCommon.some((co) => co.course == obj.course)) {
        dataCommon.push({ course: `${obj.course}`, fun: 0, diff: 0 });
      }
    }
  });

  dataCommon.forEach((obj) => {
    data.map((e) => {
      if (e.course == obj.course) {
        obj.fun += e.fun;
        obj.diff += e.diff;
      }
    });
    obj.fun = Math.floor(obj.fun / allNames.length);
    obj.diff = Math.floor(obj.diff / allNames.length);
  });
  return dataCommon;
}
