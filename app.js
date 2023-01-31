// const sayHello = () => {
//     document.querySelector("#display").textContent =
//     "Hej " + document.querySelector("#name").value + 
//     ", din alder er " + document.querySelector("#age").value +
//     " og din email er " + document.querySelector("#email").value;
// }

document.querySelector("#user-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const age = document.querySelector("#age").value;
    const email = document.querySelector("#email").value;

    document.querySelector("#display").textContent = `Hej ${name}, din alder er ${age} og din email er ${email}`;
});
