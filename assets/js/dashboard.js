const dashUsedLengthElement = document.querySelector('.dash-used-count');
const dashAvaibleLengthElement = document.querySelector('.dash-available-count');
const dashTempLengthElement = document.querySelector('.dash-temp-count');
const dashExpiredLengthElement = document.querySelector('.dash-expired-count');

async function countLicensesAvailable(dataList) {
    const availableCount = dataList.filter(item => item.State === "Disponivel").length;
    dashAvaibleLengthElement.textContent = availableCount.toString();
}

async function countLicensesInUse(dataList) {
    const inUseCount = dataList.filter(item => item.State === "Em Uso").length;
    dashUsedLengthElement.textContent = inUseCount.toString();
}

async function handleCountLicensesInUse() {
    try {
        await loadXLSXLibrary();
        const dataList = await loadAndProcessXLSXData();
        await countLicensesInUse(dataList);
    } catch (error) {
        console.error("Error:", error);
    }
}

async function handleCountLicensesAvailable() {
    try {
        await loadXLSXLibrary();
        const dataList = await loadAndProcessXLSXData();
        await countLicensesAvailable(dataList);
    } catch (error) {
        console.error("Error:", error);
    }
}

async function loadXLSXLibrary() {
    if (typeof XLSX === 'undefined') {
        const script = document.createElement('script');
        script.src = '../data/license.xlsx';
        script.async = true;

        const libraryLoaded = new Promise((resolve, reject) => {
            script.onload = resolve;
            script.onerror = reject;
        });

        document.head.appendChild(script);

        await libraryLoaded;
    }
}


async function countLicensesTemp(dataList) {
    const tempCount = dataList.filter(item => item.State === "Temporario").length;
    dashTempLengthElement.textContent = tempCount.toString();
}

async function handleCountLicensesTemp() {
    try {
        await loadXLSXLibrary();
        const dataList = await loadAndProcessXLSXData();
        await countLicensesTemp(dataList);
    } catch (error) {
        console.error("Error:", error);
    }
}


async function countLicensesExpired(dataList) {
    const tempCount = dataList.filter(item => item.State === "Expirado").length;
    dashExpiredLengthElement.textContent = tempCount.toString();
}

async function handleCountLicensesExpired() {
    try {
        await loadXLSXLibrary();
        const dataList = await loadAndProcessXLSXData();
        await countLicensesExpired(dataList);
    } catch (error) {
        console.error("Error:", error);
    }
}






handleCountLicensesExpired();
handleCountLicensesAvailable();
handleCountLicensesInUse();
handleCountLicensesTemp()
