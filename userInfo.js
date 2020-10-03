var posts = [];
var todo = [];
var album = [];
var users = [];
var userid;

function select(id) {
    userid = id

    gettodo()
    getalbum()
    getpost()
}

function getuser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((data) => {
            users = data
            document.getElementById('spinner').innerHTML = ""
            mapUser()
        })
}
function mapUser() {
    var u = ""
    for (let i = 0; i < users.length; i++) {
        u += "<a href='#' class='list-group-item list-group-item-action' onclick='select(" + users[i].id + ")'>" + users[i].name + "</a>"
    }
    document.getElementById('userarea').innerHTML = u
}

function getpost() {
    fetch('https://jsonplaceholder.typicode.com/users/' + userid + '/posts')
        .then(response => response.json())
        .then((data) => {
            posts = data
            mapPosts()
        })
}
function mapPosts() {
    var p = ""
    for (let i = 0; i < posts.length; i++) {
        p += "<div class='card my-2'>"
            + "<div class='card-body'>"
            + "<h5 class='card-title-top text-primary'>" + posts[i].title + "</h5>"
            + "<p class='card-text'>" + posts[i].body + "</p>"
            + "</div>"
            + "</div>"
    }
    document.getElementById('area').innerHTML = p
}


function gettodo() {
    fetch('https://jsonplaceholder.typicode.com/users/' + userid + '/todos')
        .then(response => response.json())
        .then((data) => {
            todo = data
            maptodo()
        })
}
function maptodo() {
    var t = ""
    for (let i = 0; i < todo.length; i++) {
        t += "<li class='list-group-item d-flex justify-content-between align-items-center text-primary'>"
            + todo[i].title
            + "<span>" + ((todo[i].completed) ? "<i class='material-icons text-success'>assignment_turned_in</i>" : "<i class='material-icons text-warning'>hourglass_top</i>")
            + "</span>"
            + " </li>"
    }
    document.getElementById('list').innerHTML = t
}



function getalbum() {
    fetch('https://jsonplaceholder.typicode.com/users/' + userid + '/albums')
        .then(response => response.json())
        .then((data) => {
            album = data
            mapalbum()
        })
}
function mapalbum() {
    var a = ""
    for (let i = 0; i < album.length; i++) {
        a += "<div class='card my-2'>"
            + "<img src='images.jpg' alt='' class='card-img-top'>"
            + "<div class='card-body'>"
            + "<h5 class='card-title text-primary'>" + album[i].title + "</h5>"
            + " </div>"
            + "</div>"
    }
    document.getElementById('abt').innerHTML = "<div class='card-columns'>" + a + "</div>"
}
