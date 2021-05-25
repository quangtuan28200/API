
var listCoursesSlt = document.querySelector('.list_courses');

var courseApi = 'http://localhost:3000/course';

function start(){
    getCourse(function (courses) {  
        console.log(courses);
    });
}

start();

//function
function getCourse(callback) {
    fetch(courseApi)
        .then(function(response){
            return response.json();
        })
        .then(callback);
}

// fetch(postApi)
//     .then(function (response) {  
//         return response.json();
//     })
//     .then(function (posts) {  
//         var htmls = posts.map(function (post) {  
//             return `<li><h2>${post.name}</h2><p>${post.description}</p></li>`;
//         });
//         var html = htmls.join('');
//         document.querySelector('.post_block').innerHTML = html;
//     })
//     .catch(function (err) {  
//         console.log('error');
//     });