async function loadAndProcessXLSXData() {
    if (typeof XLSX === 'undefined') {
      console.error('XLSX library is not loaded.');
      throw new Error('XLSX library is not loaded.');
    }
    try {
      const response = await fetch('./assets/data/license.xlsx');
      const data = await response.arrayBuffer();
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSpreadsheet = workbook.SheetNames[0];
      const spreadsheet = workbook.Sheets[firstSpreadsheet];
      const dataList = XLSX.utils.sheet_to_json(spreadsheet);
      return dataList;
    } catch (error) {
      console.error('Error loading or processing the file:', error);
      throw error;
    }
  }
