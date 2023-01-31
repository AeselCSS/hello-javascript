const sayHello = () => {
    document.querySelector("#display").textContent =
    "Hej " + document.querySelector("#name").value + 
    ", din alder er " + document.querySelector("#age").value +
    " og din email er " + document.querySelector("#email").value;
}

document.querySelector("#btn").addEventListener("click", sayHello);
