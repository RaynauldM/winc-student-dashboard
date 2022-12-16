export default function useCreateCourseArray(data) {
  let allCourses = [];
  data.map((element) => {
    if (!allCourses.includes(element.course)) {
      allCourses.push(element.course);
    }
  });
  return allCourses;
}
