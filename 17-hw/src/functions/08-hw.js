export const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

export function getSubjects(student) {
    let keys = Object.keys(student.subjects);
    let res = [];
    for (let i = 0; i < keys.length; i++) {
        if (keys[i].includes('_')) {
            keys[i] = keys[i].replaceAll('_', ' ')
        }
        res.push(keys[i].substring(0, 1).toUpperCase() + keys[i].substring(1).toLowerCase())
    }
    return res
}

function getAverageMark(student) {
    let length = 0;
    let sum = 0;
    for (let subject of Object.values(student.subjects)) {
        subject.forEach(mark => sum += mark)
        length += subject.length
    }
    return +(sum / length).toFixed(2)
}

function getStudentInfo(student) {
    let obj = {}
    obj.course = student.course
    obj.name = student.name
    obj.averageMark = getAverageMark(student)
    return obj
}

function getStudentsNames(students) {
    let names = [];
    for (let i = 0; i < students.length; i++) {
        names.push(students[i].name)
    }
    return names.sort()
}

function getBestStudent(students) {
    let indexOfBest = 0;
    let bestMark = getAverageMark(students[0])
    for (let i = 1; i < students.length; i++) {
        let currentMark = getAverageMark(students[i])
        if (currentMark > bestMark) {
            bestMark = currentMark;
            indexOfBest = i;
        }
    }
    return students[indexOfBest].name
}

function calculateWordLetters(word) {
    let arr = word.replace(' ', '').split('')
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++;
        } else {
            obj[arr[i]] = 1
        }
    }
    return obj
}