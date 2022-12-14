export default function useCreateNameArray(data) {
  let allNames = [];
  data.forEach((obj) => {
    if (!allNames.includes(obj.name)) allNames.push(obj.name);
  });
  return allNames;
}
