// عرف المصفوفة هنا
let courses=[]

function addCourse() {
  let name = document.getElementById("name").value;
  let id = document.getElementById("id").value;
  let phone = document.getElementById("phone").value;
  let course = document.getElementById("course").value;
courses.push=({name,id, phone,course});
console.log(courses);
  
}
let container = document.getElementById("container");
function load() {
  courses.forEach((course) => {
  container.innerHTML+=`
  <div>
  <h1>${item.name} - ${item.id}</h1>
  <h3>${item.course}</h3>
  </div>`
 });
}
