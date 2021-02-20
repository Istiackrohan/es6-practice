class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'KPB School';
    }
}
const student1 = new Student(12, "Mahi");
const student2 = new Student(13, "Rafi");
console.log(student1, student2);
console.log(student1.name, student2.name);