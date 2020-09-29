const students = [
    {
        name: 'Grace', 
        grade: 7 
    },
    {
        name: 'Ana', 
        grade: 4
    },
    {
        name: 'Paul', 
        grade: 10
    },
    {
        name: 'Jennifer', 
        grade: 3 
    }
];

function getApprovedStudents(studentsList){
    return studentsLists.filter(students => students.grade >= 7);
}

console.log('Alunos aprovados: ');
console.log(getApprovedStudents(students));

console.log('\nLista de alunos:');
console.log(students);