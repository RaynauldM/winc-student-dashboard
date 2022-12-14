export default function createArrayOfObjects(data) {
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
