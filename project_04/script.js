
// var zoom = 1;
// var zoomStep = 0.2;
// document.getElementById("Out").addEventListener("click",function(){
//     if(zoom > zoomStep){zoom -= zoomStep; document.getElementById("PART2").style.transform = "scale("+zoom+")";}});




    function setZoom(zoom,el) {
      
        transformOrigin = [0,1];
          el = el || instance.getpart2();
          var p = ["webkit", "moz", "ms", "o"],
              s = "scale(" + zoom + ")",
              oString = (transformOrigin[0] * 100) + "% " + (transformOrigin[1] * 100) + "%";
  
          for (var i = 0; i < p.length; i++) {
              el.style[p[i] + "Transform"] = s;
              el.style[p[i] + "TransformOrigin"] = oString;
          }
  
          el.style["transform"] = s;
          el.style["transformOrigin"] = oString;
  }
  
  function showVal(a){
     var zoomScale = Number(a)/10;
     setZoom(zoomScale,document.getElementsByClassName('part2')[0])
  }