const fs= require('fs');
if(process.argv[2]=='add'){
    let file=JSON.parse(fs.readFileSync('studentsDetails.txt','utf-8'))
    let studentsDetails={id:file.length+1,studentName:process.argv[3],studentGrade:process.argv[4]}

    file.push(studentsDetails);
    // console.log(studentsDetails);
    fs.writeFileSync('studentsDetails.txt',JSON.stringify(file));
}
else if(process.argv[2]=='edit')
{
    let file=JSON.parse(fs.readFileSync('studentsDetails.txt','utf-8'))
    file[parseInt(process.argv[4])].studentGrade=parseInt(process.argv[3]);
   
    fs.writeFileSync('studentsDetails.txt',JSON.stringify(file));
    console.log(file);
}
else if(process.argv[2]=='del')
{
    let file=JSON.parse(fs.readFileSync('studentsDetails.txt','utf-8'))
    file.splice(parseInt(process.argv[3]), 1)

    fs.writeFileSync('studentsDetails.txt',JSON.stringify(file));
}
else if(process.argv[2]=='list')
{
    let file=JSON.parse(fs.readFileSync('studentsDetails.txt','utf-8'))
    file.forEach(student => {
    console.log(    student.studentGrade),
    console.log(    student.studentName)
    fs.writeFileSync('studentsDetails.txt',JSON.stringify(file));

        
    });
    
}
else {
    console.log(err)
}