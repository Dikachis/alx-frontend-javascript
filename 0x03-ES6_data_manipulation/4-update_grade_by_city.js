export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter((std) => std.location === city)
    .map((std) => ({
      ...std,
      grade:
        newGrades
          .filter((g) => g.studentId === std.id)
          .map((g) => g.grade)[0] || 'N/A',
    }));
}

// First trial
// export default function updateStudentGradeByCity(arr, city, newGrades) {
//   if (!Array.isArray(arr)) return [];
//   const newArr = arr.filter((val) => val.location === city);

//   return newArr.map((val) => {
//     newGrades.forEach((ind) => {
//       if (ind.studentId === val.id) {
//         if (ind.grade) val.grade = `${ind.grade}`; // eslint-disable-line
//         else val.grade = 'N/A'; // eslint-disable-line
//       }
//     });
//     if (!val.grade) val.grade = 'N/A'; // eslint-disable-line
//     return val;
//   });
// }
