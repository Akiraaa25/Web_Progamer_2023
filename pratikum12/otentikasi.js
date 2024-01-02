document.getElementById('formLogin').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'ahmad2017' && password === 'integrity') {
        window.location.href = 'berhasil_login.html'; 
    } 
    else if (username === '123' && password === '456') {
        window.location.href = 'berhasil_login.html'; 
    } 
    else {
        alert('Login gagal, silakan coba lagi'); 
    }
    }
    );