// Function to ask for the operation
function getOperation() {
  const operation = prompt("Choose an operation: +, -, *, /");
  return operation;
}

// Function to ask for numbers
function getNumbers() {
  const num1 = parseFloat(prompt("Enter first number:"));
  const num2 = parseFloat(prompt("Enter second number:"));
  return { num1, num2 };
}

// Perform the calculation based on the operation

      return num1 / num2;
    default:
      return "Invalid operation";
  }
}

// Main function to run the calculator
function runCalculator() {
  const operation = getOperation();
  const { num1, num2 } = getNumbers();
  const result = calculate(operation, num1, num2);
  alert(`Result: ${result}`);
}

// Run the calculator
runCalculator();