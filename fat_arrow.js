
  class Student{
    static count=0;
    static min_marks=50;
    constructor(name,age, phn,marks){
        this.name=name;
        this.age=age;
        this.phn=phn;
        this.marks=marks;
       
        Student.countStudents();

    }
    static countStudents(){
        
        return(Student.count++);

    }
    eligible(minPlacementAge){
        
     
        return  (minMarks)=>{
            
           
            if(this.marks>minMarks&&this.age>minPlacementAge){
                console.log(this.name+" is ready for placements");
            }else{
                    console.log(this.name+" is not ready for placements");
                }
            }
            
        }

    }
  
  const Riya=new Student('Riya',18,1234,34);

  const Hiya=new Student('Hiya',15,2345,35);
  
  const Diya=new Student('Diya',16,4567,60);
  
  const Siya=new Student('Siya',17,7891,70);
  
  const Rooh=new Student('Rooh',19,3456,80);
  
  //console.log(Student.countStudents());
  
  Riya.eligible(18)(40);
  
  Hiya.eligible(18)(40);
  
//   Diya.eligible();
  
//   Siya.eligible();
  
//   Rooh.eligible();

