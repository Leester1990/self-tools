// H5 plus事件处理
function plusReady(){
  // 设置系统状态栏背景为红色
  plus.navigator.setStatusBarBackground('#0081ff');
}
if(window.plus){
  plusReady();
}else{
  document.addEventListener('plusready', plusReady, false);
}
