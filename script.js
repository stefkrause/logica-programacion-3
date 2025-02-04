const numInput = document.getElementById("num");

const factorialSpan = document.getElementById("factorial");

function calcularFactorial() {

  const num = parseInt(numInput.value);
  if (isNaN(num)) {
    alert("Error: Solo puede ingresar números.");
    return; 
  }

  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i; 
  }

  factorialSpan.textContent = factorial;
}

numInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {  // Verificar si la tecla presionada es Enter
        calcularFactorial();
    }
});