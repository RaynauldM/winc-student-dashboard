export default function useCreateCourseArray(data) {
  let allCourses = [];
  data.map((e) => {
    if (!allCourses.includes(e.course)) {
      allCourses.push(e.course);
    }
  });
  return allCourses;
}
