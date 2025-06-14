

const submit = document.getElementById("submit");

let usuarios = [
 {
    admin: { name: "admin", pass: "admin" },
    lusia: { name: "lusia", pass: "12345" },
    kenner: { name: "kenner", pass: "fenix1" },
    danyer: { name: "danyer", pass: "danyer2" },
    janin: { name: "janin", pass: "danyer" }
 }
];

submit.addEventListener("click", () => {
    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    const axu = usuarios[0]; 
    const user = axu[usuario];

    if (user && user.pass === password) {
        console.log("Usuario correcto");
        window.location.href = "html/index.html";
    } else {
    alert("Usuario o contraseña incorrectos");
    }
});
