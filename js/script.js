const calculateExpense = () => {
  const income = document.querySelector("#income").value;
  console.log(income);
  const food = document.querySelector("#food").value;
  const rent = document.querySelector("#rent").value;
  const clothes = document.querySelector("#clothes").value;

  if (
    income < 0 ||
    income == "" ||
    food < 0 ||
    food == "" ||
    rent < 0 ||
    rent == "" ||
    clothes < 0 ||
    clothes == ""
  ) {
    alert("Inputs must be positive numbers");
    return;
  }
  // calculate expense
  const foodNumber = parseFloat(food);
  const rentNumber = parseFloat(rent);
  const clothesNumber = parseFloat(clothes);
  const expense = foodNumber + rentNumber + clothesNumber;

  // calculate balance
  const balance = parseInt(income) - expense;
  //   validate income
  if (expense > income) {
    alert("Expenses cannot be more than income");
  } else {
    // view total expense and balance
    document.getElementById("total-expense").innerText = expense;
    document.getElementById("balance").innerText = balance;
  }
};

const calculateSavings = () => {
  // calculate saving amount
  const income = document.querySelector("#income").value;
  const inputSavePercentage = document.getElementById("save").value;
  const savePercentage = parseInt(inputSavePercentage);
  console.log(typeof savePercentage);
//   Validate saving percentage value
  if (savePercentage < 0) {
    alert("Provide positive saving value");
  }
  const savingAmount = (savePercentage / 100) * income;
  console.log(savingAmount);

  // calculate remaining balance
  const balance = document.getElementById("balance").innerText;
  const remainingBalance = balance - savingAmount;

  //   validate saving amount
  if (savingAmount > balance) {
    alert("SavingAmount is greater than balance");
  } else {
    // view saving amount and remaining balance
    document.getElementById("saving-amount").innerText = savingAmount;
    document.getElementById("remaining-balance").innerText = remainingBalance;
  }
};
