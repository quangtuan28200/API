

var courseApi = 'http://localhost:3000/course';

function start(){
    getCourses(renderCourses);

    handleCreateForm();
}

start();

//function
function getCourses(callback) {
    fetch(courseApi)
        .then(function(response){
            return response.json();
        })
        .then(callback);
}

function setCourse(data) {
    var option = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(courseApi, option);
}

function deleteCourse(courseID) {
    var option = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
    };
    fetch(courseApi + '/' + courseID, option);
}

function renderCourses(courses) {
    var listCoursesSlt = document.querySelector('.list_courses');
    var htmls = courses.map(function (course) {  
        return `
            <li>
                <h2>${course.name}</h2>
                <p>${course.description}</p>
                <button onclick="deleteCourse(${course.id})">XOA</button>
            </li>
        `;
    });
    listCoursesSlt.innerHTML = htmls.join('');
}

function handleCreateForm() {
    var addBtn = document.querySelector('.add_btn');
    addBtn.onclick = function (e) {  
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        var formData = {
            name: name,
            description: description
        };
        setCourse(formData);
    };
}
