function plusReady() {
  plus.navigator.setStatusBarBackground('#0081ff');
}

if(window.plus) {
  plusReady()
}else{
  document.addEventListener('plusReady', plusReady, false);
}
