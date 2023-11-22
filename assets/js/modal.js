// Modal de Detalhes e Edição
const detailsModal = document.getElementById('detailsModalToggle');
detailsModal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget; // O botão "Details" clicado
    const dataItem = JSON.parse(button.getAttribute('data-item'));

    const modalBody = detailsModal.querySelector('#modal-body');

    let dateVerif = dataItem.VerificationDate;
    let newDate = new Date(1900, 0, dateVerif - 1);
    let formattedDate = `${newDate.getUTCDate()}/${newDate.getUTCMonth() + 1}/${newDate.getUTCFullYear()}`;

    // Agora você pode acessar as propriedades do dataItem e exibi-las no modal
    modalBody.innerHTML = `
  <ul class="list-group">
     <span class="fw-bold">Branch:</span>
     <li class="list-group-item">${dataItem.Branch}</li>
     <span class="fw-bold">Hostname:</span>
     <li class="list-group-item">${dataItem.Hostname}</li>
     <span class="fw-bold">User: </span>
     <li class="list-group-item">${dataItem.User}</li>
     <span class="fw-bold">Key:</span>
     <li class="list-group-item">${dataItem.Key}</li>
     <span class="fw-bold">Version: </span>
     <li class="list-group-item">${dataItem.Version}</li>
     <span class="fw-bold">State: </span>
     <li class="list-group-item">${dataItem.State}</li>
     <span class="fw-bold">Verification Date: </span>
     <li class="list-group-item">${formattedDate}</li>
     <span class="fw-bold">Observation: </span>
     <li class="list-group-item">${dataItem.Observation}</li>
     <span class="fw-bold">Type</span>
     <li class="list-group-item">${dataItem.Type}</li>
  </ul>
   `;
});
const editModal = document.getElementById('editModalToggle');
editModal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget; // O botão "edit" clicado
    const dataItem = JSON.parse(button.getAttribute('data-item'));

    const modalBody = editModal.querySelector('#modal-body');
    let dateVerif = dataItem.VerificationDate;
    let newDate = new Date(1900, 0, dateVerif - 1);
    let formattedDate = formatDate(newDate);

    // Agora você pode acessar as propriedades do dataItem e exibi-las no modal
    modalBody.innerHTML = `
  <form class="needs-validation was-validated" novalidate="">
    <label class="fw-bold">Branch:</label>
    <input class="form-control" type="text" value="${dataItem.Branch}" required>

    <label class="fw-bold">Hostname:</label>
    <input class="form-control" type="text" value="${dataItem.Hostname}" required>
    
    <label class="fw-bold">User: </label>
    <input class="form-control " type="text" value="${dataItem.User}" required>
    
    <label class="fw-bold">Key: </label>
    <div class="input-group">
      <input type="text" class="form-control" value="${dataItem.Key}" disabled required>
      <button class="input-group-text btn btn-outline-secondary" id="btn-enable-edit-key">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
        </svg>
      </button>
    </div>

    <label class="fw-bold">Version: </label>
    <input class="form-control" type="text" value="${dataItem.Version}" required> 
    
    <label class="fw-bold">State: </label>
    <select name="state" id="" class="form-select" required>
      <option value="0" ${dataItem.State !== 'Em Uso' && dataItem.State !== 'Expirado' ? 'selected' : ''}>Disponível
      </option>
      <option value="1" ${dataItem.State === 'Em Uso' ? 'selected' : ''}>Em Uso</option>
      <option value="2" ${dataItem.State === 'Expirado' ? 'selected' : ''}>Expirado</option>
    </select>
    
    <label class="fw-bold">Verification Date: "mm/dd/aaaa" </label>
    <input class="form-control" type="date" value="${newDate.toISOString().substring(0, 10)}" required>
    
    <label class="fw-bold">Observation: </label>
    <input class="form-control"  type="text" value="${dataItem.Observation}" required>
    
    <label class="fw-bold">Type</label>
    <select name="state" id="" class="form-select" required>
    <option value="0" ${dataItem.Type !== 'Permanent' && dataItem.Type !== 'Temporario' ? 'selected' : ''}>Sem informação
    </option>
    <option value="1" ${dataItem.Type === 'Permanent' ? 'selected' : ''}>Permanente</option>
    <option value="1" ${dataItem.Type === 'Temporario' ? 'selected' : ''}>Temporário</option>
  </select>
</form>
   `;
});

