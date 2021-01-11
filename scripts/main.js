let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/imagen2.jpg') {
      miImage.setAttribute('src','images/imagen2.jpg');
    } else {
      miImage.setAttribute('src', 'images/imagen2.jpg');
    }
}