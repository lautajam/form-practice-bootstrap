const formSubmit = document.querySelector("#formSubmit");
const btnSubmit = document.querySelector("#btn-submit");
const btnLoading = document.querySelector("#btn-loading");
const toast = document.querySelector(".toast");
var userData = document.querySelector("#user-data")

formSubmit.addEventListener("submit", e =>{
    e.preventDefault();

    btnSubmit.classList.add("d-none");
    btnLoading.classList.remove("d-none");

    const data = new FormData(formSubmit);
    console.log("Email area: ", data.get("emailArea"));
    console.log("Passwrod area: ", data.get("pswrdArea"));
    console.log("Checkbox area: ", data.get("checkArea"));

    var emailArea = data.get("emailArea");
    var pswrdArea = data.get("pswrdArea");

    window.setTimeout(()=>{
        btnSubmit.classList.remove("d-none");
        btnLoading.classList.add("d-none");

        const eventToast =  new bootstrap.Toast(toast);
        userData.innerHTML += "Email: " + emailArea + "<br>";
        userData.innerHTML += "Password: " + pswrdArea;
        eventToast.show();

    },3000);

    formSubmit.reset();
});

