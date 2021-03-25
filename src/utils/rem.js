 function FontChart (res) {
  //获取到屏幕的宽度
  var clientWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth; 
  if (!clientWidth) return; //报错拦截：
  let fontSize = 100 * (clientWidth / 1920);
  // console.log(clientWidth,res,fontSize)
  return res * fontSize;
}

export default FontChart