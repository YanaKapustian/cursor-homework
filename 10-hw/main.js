class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [5, 4, 4, 5];
        this.dismissed = false;
    }
    getInfo() {
        return `Студент ${this.course} курсу ${this.university}, ${this.fullName}`;
    }
    get getMarks() {
        if (this.dismissed) return null
        return this.marks;
    }
    set setMarks(mark) {
        if (this.dismissed) return null
        this.marks.push(mark)
    }
    getAverageMark() {
        if (this.dismissed) return null
        return this.marks.reduce((sum, mark) => sum += mark, 0) / this.marks.length;
    }
    dismiss() {
        this.dismissed = true;
    }
    recover() {
        this.dismissed = false;
    }
}

const yanaKapustian = new Student('Полтавська політехніка', 1, 'Капустян Яна')
console.log(yanaKapustian.getInfo());
console.log(yanaKapustian.getMarks)
yanaKapustian.setMarks = 5;
console.log(yanaKapustian.getMarks)
console.log(yanaKapustian.getAverageMark());
yanaKapustian.dismiss();
console.log(yanaKapustian.getMarks);
yanaKapustian.recover();
console.log(yanaKapustian.getMarks);

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName)
        this.marks = [5, 4, 4, 5];
        this.dismissed = false;
        setInterval(() => this.getScholarship(), 30000)
    }
    getScholarship() {
        if (this.getAverageMark() > 4 && !this.dismissed) console.log('Ви отримали 1400 грн. стипендії');
    }
}

const olegShevchenko = new BudgetStudent('Полтавська політехніка', 1, 'Шевченко Олег')
console.log(olegShevchenko.getInfo());