var student1,student2
function setup() {
  createCanvas(400,400);
  student1=new Student("Alessandra",12,8)
  student2=new Student("Lily",13,7)

}

function draw() 
{
  background(30);
  student1.display()
  student2.display()
}