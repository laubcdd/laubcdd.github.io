function randombg(){
    var random= Math.floor(Math.random() * 6) + 0;
    var bigSize = ["url('/bg/bg1.png')",
                   "url('/bg/bg2.png')",
                   "url('/bg/bg3.png')",
                   "url('/bg/bg4.png')",
                   "url('/bg/bg5.png')",
                   "url('/bg/bg6.png')"];
    document.getElementById("random").style.backgroundImage=bigSize[random];
  }