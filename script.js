// Registro de conta
function register() {
  const user = document.getElementById('newUser').value;
  const pass = document.getElementById('newPass').value;

  if (!user || !pass) {
    alert("Preencha todos os campos.");
    return;
  }

  localStorage.setItem("user", user);
  localStorage.setItem("pass", pass);
  alert("Cadastro realizado com sucesso!");
  window.location.href = "index.html";
}

// Login
function login() {
  const user = document.getElementById('loginUser').value;
  const pass = document.getElementById('loginPass').value;

  if (user === localStorage.getItem("user") && pass === localStorage.getItem("pass")) {
    alert("Login bem-sucedido!");
    window.location.href = "dashboard.html";
  } else {
    alert("Usuário ou senha incorretos.");
  }
}

// Logout
function logout() {
  window.location.href = "index.html";
}

// CRUD de alunos


