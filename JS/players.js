console.log("Players Ready!");
const selectedArray = [];

function display(playerList) {
  // console.log(playerList);
  const tableBody = document.getElementById("players");
  tableBody.innerHTML = "";
  for (let i = 0; i < playerList.length; i++) {
    if (playerList.length <= 5) {
      const name = selectedArray[i];
      const tr = document.createElement("tr");
      tr.innerHTML = `
      <th>${i + 1 + "."}</th>
      <td>${name}</th>
      `;
      tableBody.appendChild(tr);
    } else {
      const warningMassage = document.getElementById("warning");
      warningMassage.style.display = "block";
      document
        .getElementsByClassName("card-button")
        .addEventListener("click", function (element) {
          element.disabled = true;
        });
    }
  }
}

function selectedPlayers(element) {
  const playerName = element.parentNode.children[0].innerText;
  selectedArray.push(playerName);
  display(selectedArray);
  element.disabled = true;
}
