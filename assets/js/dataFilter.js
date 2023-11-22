// Selecione o campo de pesquisa
const inputSearch = document.getElementById("input-search");

// Função para filtrar e exibir os dados
async function filterAndDisplayData(searchTerm) {
  try {
    const dataList = await loadAndProcessXLSXData();
    clearTable();

    if (!searchTerm) {
      handleListAll();
      return;
    }

    const filteredData = dataList.filter(item => {
      return (
        (typeof item.Branch === 'string' && item.Branch.toLowerCase().includes(searchTerm)) ||
        (typeof item.Hostname === 'string' && item.Hostname.toLowerCase().includes(searchTerm)) ||
        (typeof item.User === 'string' && item.User.toLowerCase().includes(searchTerm)) ||
        (typeof item.Key === 'string' && item.Key.toLowerCase().includes(searchTerm)) ||
        (typeof item.State === 'string' && item.State.toLowerCase().includes(searchTerm)) ||
        (typeof item.Observation === 'string' && item.Observation.toLowerCase().includes(searchTerm)) ||
        (typeof item.Type === 'string' && item.Type.toLowerCase().includes(searchTerm))
      );
    });

    displayDataInTable(filteredData);
  } catch (error) {
    console.error('Erro ao filtrar e exibir dados:', error);
  }
}

// Adicione um ouvinte de eventos para o campo de pesquisa
inputSearch.addEventListener("input", function () {
  const searchTerm = inputSearch.value.trim().toLowerCase();
  filterAndDisplayData(searchTerm);
});