function generateLicense() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let license = '';
  
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 4; j++) {
        license += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      if (i < 5) {
        license += '-';
      }
    }
  
    return license;
  }
  
  for (let i = 0; i < 48; i++) {
    const generatedLicense = generateLicense();
    console.log(generatedLicense);
  }