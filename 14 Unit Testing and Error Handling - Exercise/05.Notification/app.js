function notify(message) {
  let placeN = document.getElementById('notification');

  placeN.textContent = message;

  placeN.style.display = 'block'
  //placeN.style.display = 'none';
}