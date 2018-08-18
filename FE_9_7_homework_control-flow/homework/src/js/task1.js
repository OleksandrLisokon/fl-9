let login = prompt('Please login: ');
let password = '';
const currentTime = new Date().getHours();

if (!login) {
    alert('Canceled.');
} else if (login.length < 4) {
    alert('I don\'t know any users having name length less than 4 symbols');
} else if (login === 'User') {
    password = prompt('Please enter password: ');
    if (!password) {
        alert('Canceled.');
    } else if (password === 'SuperUser') {
        currentTime < 20 ? alert('Good day!') : alert('Good evening!');
    } else {
        alert('Wrong password');  
    }
} else {
    alert('I don’t know you');
}