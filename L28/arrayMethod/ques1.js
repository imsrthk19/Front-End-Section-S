let student = [
  { name: "Smith", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "John", rollNumber: 31, marks: 35 },
  { name: "Tiger", rollNumber: 31, marks: 55 },
];

// Step 1: Add 20 marks to those who scored less than 60
let updatedStudents = student.map(item => {
  if (item.marks < 60) {
    item.marks += 20;
  }
  return item;
});

// Step 2: Filter students who now have marks > 60
let passedStudents = updatedStudents.filter(item => item.marks > 60);

// Step 3: Calculate total marks of these students
let totalMarks = passedStudents.reduce((acc, item) => acc + item.marks, 0);

console.log("Total Marks:", totalMarks);