function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  while (true) {
    let num1 = prompt("Introduceți primul număr sau exit pentru a ieși:");
    if (num1 === "exit") {
      break;
    }
  
    let operation = prompt("Introduceți operația (+, -, * sau /):");
    let num2 = parseFloat(prompt("Introduceți al doilea număr:"));
  
    try {
      if (operation === "+") {
        alert("Rezultatul este: " + add(num1, num2));
      } else if (operation === "-") {
        alert("Rezultatul este: " + subtract(num1, num2));
      } else if (operation === "*") {
        alert("Rezultatul este: " + multiply(num1, num2));
      } else if (operation === "/") {
        alert("Rezultatul este: " + divide(num1, num2));
      } else {
        throw "Operația introdusă este incorectă.";
      }
    } catch (error) {
      alert("A apărut o eroare: " + error);
    }
  }
  