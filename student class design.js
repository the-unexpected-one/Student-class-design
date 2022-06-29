
  class Student{
    static count=0;
    constructor(name,age, phn,marks){
        this.name=name;
        this.age=age;
        this.phn=phn;
        this.marks=marks;
        console.log(Student.count);
        Student.countStudents();

    }
    static countStudents(){
        console.log(Student.count);
        return(Student.count++);

    }
    eligible(){
        if(this.marks>=40){
            console.log(`${this.name} age ${this.age} is eligible`);
        }else if(this.marks<40){
            console.log(`${this.name} age ${this.age} is not eligible`);
            
        }
    }
  }
  const Riya=new Student('Riya',18,1234,34);

  const Hiya=new Student('Hiya',15,2345,35);
  
  const Diya=new Student('Diya',16,4567,60);
  
  const Siya=new Student('Siya',17,7891,70);
  
  const Rooh=new Student('Rooh',19,3456,80);
  
  console.log(Student.countStudents());
  
  Riya.eligible();
  
  Hiya.eligible();
  
  Diya.eligible();
  
  Siya.eligible();
  
  Rooh.eligible();

