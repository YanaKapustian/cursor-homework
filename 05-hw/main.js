const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];

let pairs = [];
let studentsInOrder = [];

//1
function getPairs(students) {
    //створюю копію масиву, щоб не видозмінювати початковий масив
    studentsInOrder = students.slice(0);
    studentsInOrder.splice(1, 2, "Олена", "Ігор");
    for (let i = 0; i < studentsInOrder.length; i += 2){
        pairs.push([studentsInOrder[i], studentsInOrder[i + 1]])
    }

    return pairs;
}

console.log("Поділити студентів на пари", getPairs(students));

//2
let pairsThemes = [];
function getThemes(pairs, themes) {
    for (let i = 0; i < pairs.length; i++){
        pairsThemes.push([`${pairs[i][0]} і ${pairs[i][1]}`, themes[i]])
    }
    return pairsThemes;
}

console.log("Дати студентам теми", getThemes(pairs, themes));

//3
function getMark(studentsInOrder, marks) {
    let studentsMarks = [];
    for (let i = 0; i < studentsInOrder.length; i++) {
        studentsMarks.push([studentsInOrder[i], marks[i]])
    }
    return studentsMarks;
}

console.log("Виставити оцінки студентам", getMark(studentsInOrder, marks));

//4
let pairsThemesMarks = []
function getMarkForProject() {
    for (let i = 0; i < pairs.length; i++){
        pairsThemesMarks.push([`${pairs[i][0]} і ${pairs[i][1]}`, themes[i], +`${Math.round(Math.random() * (5 - 1) + 1)}`])
    }
    return pairsThemesMarks;
}

console.log("Поставити оцінки проєктам", getMarkForProject());





