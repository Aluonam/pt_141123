
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

const highGrades = students.filter(student => student.grade >= 90);
console.log('High Grades:', highGrades);

const gradeSummaries1 = students.map(student=> `${student.name} : ${student.grade}`)
console.log("estudiante y nota: ", gradeSummaries1)


// ----------EJERCICIO 3-----------------------
let fruits = ['apple', 'banana', 'orange', 'strawberry'];
console.log(fruits)

// Agrega 'grape' al final del array.
fruits.push('grape')
console.log("añade uva: ",fruits)

// Elimina 'banana' del array.
const deleteBanana = fruits.filter(fruit => fruit != "banana")
console.log("borra banana: ",deleteBanana)
// Utiliza un método de array para invertir el orden de los elementos en el array.
const invertido = fruits.reverse()
console.log("invierte sentido: ",invertido)