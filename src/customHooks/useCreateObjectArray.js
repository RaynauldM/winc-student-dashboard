export default function createArrayOfObjects(data) {
  let dataArray = data.split(/\r?\n/);

  let newArray = [];
  dataArray.map((element) => {
    let noComma = element.split(",");
    newArray.push(noComma);
  });

  let lastArray = [];

  newArray.map((e) => {
    lastArray.push({
      name: e[0],
      course: e[1],
      fun: Number(e[2]),
      diff: Number(e[3]),
    });
  });

  return lastArray;
}
