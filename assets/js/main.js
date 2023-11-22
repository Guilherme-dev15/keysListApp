const selectKeyFilter = document.getElementById('filterKey');
const tableBody = document.getElementById("table-list-tbody");

// Select Filtro Status das Licenças
selectKeyFilter.addEventListener("change", function () {
  let e = document.getElementById("filterKey");
  let selectedOption = e.options[e.selectedIndex];
  if (selectedOption.value === '0') {
    handleListAll();
  }
});
selectKeyFilter.addEventListener("change", function () {
  let e = document.getElementById("filterKey");
  let selectedOption = e.options[e.selectedIndex];
  if (selectedOption.value === '1') {
    handleListUsed();
  }
});
selectKeyFilter.addEventListener("change", function () {
  let e = document.getElementById("filterKey");
  let selectedOption = e.options[e.selectedIndex];
  if (selectedOption.value === '2') {
    handleListAvailable();
  }
});
selectKeyFilter.addEventListener("change", function () {
  let e = document.getElementById("filterKey");
  let selectedOption = e.options[e.selectedIndex];
  if (selectedOption.value === '3') {
    handleListTemp();
  }
});
selectKeyFilter.addEventListener("change", function () {
  let e = document.getElementById("filterKey");
  let selectedOption = e.options[e.selectedIndex];
  if (selectedOption.value === '4') {
    handleListExpired();
  }
});


// Tratamentos (Criação de linhas - Limpar Tabela - Formatar Data - XLS > JSON)
function createTableRow(dataItem) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${dataItem.Branch}</td>
    <td>${dataItem.Hostname}</td>
    <td>${dataItem.User}</td>
    <td>${dataItem.Key}</td>
    <td>${dataItem.Version}</td>
    <td>${dataItem.State}</td>
    <td>
      <div class="">
      <button type="button" id="btn-details-${dataItem.ID}" class="border-0 bg-transparent" data-bs-toggle="modal"
      data-bs-target="#detailsModalToggle" data-item='${JSON.stringify(dataItem)}'>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#FFF" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
      </svg>
     </button>

     <button type="button" id="btn-edit-${dataItem.ID}" class="border-0 bg-transparent" data-bs-toggle="modal"
     data-bs-target="#editModalToggle" data-item='${JSON.stringify(dataItem)}'>
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil"
         viewBox="0 0 16 16">
         <path
             d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
     </svg>
     </button>
      </div>
    </td>
  `;
  return row;
}
function formatDate(date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
function clearTable() {
  tableBody.innerHTML = '';
}

// Carregar função listar todos quando carregar a pagina
window.onload = function () {
  handleListAll()
}
