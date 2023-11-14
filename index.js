
// ----------EJERCICIO 1-----------------------
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((num)=>{
    const squared = num*num
    console.log(squared)
    // alert(squared)
})
squaredNumbers

// ----------EJERCICIO 2-----------------------
const students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 90 },
    { name: 'Charlie', grade: 78 },
    { name: 'David', grade: 95 }
  ];

const highGrade = () =>{
    const grade = students.map((obj)=>{console.log(obj.grade)})
}

highGrade()