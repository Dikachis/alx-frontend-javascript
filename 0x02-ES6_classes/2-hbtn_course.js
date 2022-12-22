export default class HolbertonCourse {
  // Google closure compiler's advanced mode to check parameters data type
  //   /**
  //    * @param {string} name name of the course
  //    * @param {number} length lenght of the course
  //    * @param {Array<string>} students names of students
  //    * @throws {TypeError} if data does not have the expected type
  //    */

  // constructor
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // name getter and setter

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  // length getter and setter
  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('length must be a number');
    }
    this._length = length;
  }

  // students getter and setter
  get students() {
    return this._students;
  }

  set students(students) {
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array of strings');
    }

    students.forEach((student) => {
      if (typeof student !== 'string') {
        throw new TypeError('Students must be an array of strings');
      }
    });
    this._students = students;
  }
}
