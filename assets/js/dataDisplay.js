// Funções para mostrar na tabela informações conforme o filtro
function displayDataInTable(dataList) {
    dataList.forEach(item => {
        const row = createTableRow(item);
        tableBody.appendChild(row);
    });
}
function displayAvailableDataInTable(dataList) {
    const availableData = dataList.filter(item => item.State.toLowerCase() === 'disponivel');
    if (availableData.length === 0) {
        console.log('Não há licença disponível');
    } else {
        availableData.forEach(item => {
            const row = createTableRow(item);
            tableBody.appendChild(row);
        });
    }
}
function displayUsedDataInTable(dataList) {
    const usedData = dataList.filter(item => item.State.toLowerCase() === 'em uso');
    if (usedData.length === 0) {
        console.log('Não há licença disponível');
    } else {
        usedData.forEach(item => {
            const row = createTableRow(item);
            tableBody.appendChild(row);
        });
    }
}
function displayTempDataInTable(dataList) {
    const usedData = dataList.filter(item => item.State.toLowerCase() === 'temporario' || item.State === 'Temporário');
    if (usedData.length === 0) {
        console.log('Não há licença disponível');
    } else {
        usedData.forEach(item => {
            const row = createTableRow(item);
            tableBody.appendChild(row);
        });
    }
}
function displayExpiredDataInTable(dataList) {
    const usedData = dataList.filter(item => item.State.toLowerCase() === 'expirado');
    if (usedData.length === 0) {
        console.log('Não há licença disponível');
    } else {
        usedData.forEach(item => {
            const row = createTableRow(item);
            tableBody.appendChild(row);
        });
    }
}


// Funções para listar conforme o filtro
async function handleListAll() {
    try {
        const dataList = await loadAndProcessXLSXData();
        clearTable();
        displayDataInTable(dataList);
    } catch (error) {
        console.error('Error:', error);
    }
}
async function handleListUsed() {
    try {
        const dataList = await loadAndProcessXLSXData();
        clearTable();
        displayUsedDataInTable(dataList);
    } catch (error) {
        console.error('Error:', error);
    }
}
async function handleListTemp() {
    try {
        const dataList = await loadAndProcessXLSXData();
        clearTable();
        displayTempDataInTable(dataList);
    } catch (error) {
        console.error('Error:', error);
    }
}
async function handleListAvailable() {
    try {
        const dataList = await loadAndProcessXLSXData();
        clearTable();
        displayAvailableDataInTable(dataList);
    } catch (error) {
        console.error('Error:', error);
    }
}
async function handleListExpired() {
    try {
        const dataList = await loadAndProcessXLSXData();
        clearTable();
        displayExpiredDataInTable(dataList);
    } catch (error) {
        console.error('Error:', error);
    }
}
