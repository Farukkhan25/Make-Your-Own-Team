console.log("Budget Ready!");


document
  .getElementById("btn-calculate")
    .addEventListener("click", function () {
        const perPlayerSalary = getInputFieldValueById("per-player");
        const selectedPlayerNumber = selectedArray.length;
        const playerExpenses = perPlayerSalary * selectedPlayerNumber;
        setTextElementValueById("player-expenses", playerExpenses);
    });
  
document
    .getElementById("btn-calculate-total")
    .addEventListener("click", function () {
        const playerTotalExpenses = getTextElementValueById('player-expenses');
        const managerSalary = getInputFieldValueById("manager-salary");
        const coachSalary = getInputFieldValueById("coach-salary");
        const totalExpenses = playerTotalExpenses + managerSalary + coachSalary;
        setTextElementValueById("total", totalExpenses);
    });