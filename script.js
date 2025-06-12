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
//Criar aluno
function addAluno() {
  const nome = document.getElementById("nome").value;
  const curso = document.getElementById("curso").value;
  const matricula = document.getElementById("matricula").value;

  if (!nome || !curso || !matricula) {
    alert("Preencha todos os campos.");
    return;
  }

  const alunos = JSON.parse(localStorage.getItem("alunos")) || [];
  alunos.push({ nome, curso, matricula });
  localStorage.setItem("alunos", JSON.stringify(alunos));
  listarAlunos();

  document.getElementById("nome").value = "";
  document.getElementById("curso").value = "";
  document.getElementById("matricula").value = "";
}

//Ler alunos
function listarAlunos() {
  const lista = document.getElementById("listaAlunos");
  lista.innerHTML = "";

  const alunos = JSON.parse(localStorage.getItem("alunos")) || [];

  alunos.forEach((aluno, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${aluno.nome}</strong> - ${aluno.curso} - ${aluno.matricula}
      <button onclick="editarAluno(${index})">Editar</button>
      <button onclick="removerAluno(${index})">Remover</button>
    `;
    lista.appendChild(li);
  });
}

//Deletar aluno
function removerAluno(index) {
  const alunos = JSON.parse(localStorage.getItem("alunos")) || [];
  alunos.splice(index, 1);
  localStorage.setItem("alunos", JSON.stringify(alunos));
  listarAlunos();
}

//Atualizar aluno
function editarAluno(index) {
  const alunos = JSON.parse(localStorage.getItem("alunos")) || [];
  const aluno = alunos[index];

  const novoNome = prompt("Editar nome:", aluno.nome);
  const novoCurso = prompt("Editar curso:", aluno.curso);
  const novaMatricula = prompt("Editar matrícula:", aluno.matricula);

  if (novoNome && novoCurso && novaMatricula) {
    alunos[index] = { nome: novoNome, curso: novoCurso, matricula: novaMatricula };
    localStorage.setItem("alunos", JSON.stringify(alunos));
    listarAlunos();
  }
}

// Chama listar alunos automaticamente na dashboard
if (window.location.pathname.includes("dashboard.html")) {
  listarAlunos();
}

