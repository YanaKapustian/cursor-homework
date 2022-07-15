export class Student {
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

export class BudgetStudent extends Student {
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
