function checkFileExtension() {
    fileName = document.querySelector('#chooseFile').value;
    extension = fileName.substring(fileName.lastIndexOf('.') + 1);
    document.querySelector('.output').textContent = extension;
  };