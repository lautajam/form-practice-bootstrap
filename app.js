const formSubmit = document.querySelector("#formSubmit");

formSubmit.addEventListener("submit", e =>{
    e.preventDefault();
    const data = new FormData(formSubmit);
    console.log("Email area: ", data.get("emailArea"));
    console.log("Passwrod area: ", data.get("pswrdArea"));
    console.log("Checkbox area: ", data.get("checkArea"));
    formSubmit.reset();
});

