import './Game.css';

function Game() {
    var pattern1,pattern2;

    var colors = ["#B8D430", "#3AB745", "#029990", "#3501CB",
                  "#2E2C75", "#673A7E", "#CC0071", "#F80120",
                  "#F35B20", "#FB9A00", "#FFCC00", "#FEF200","#FEF200"];
    var restaraunts = ["$10", "$20", "$30", "$40",
                       "$50", "$60", "$70", "$80",
                       "$90", "$100", "$120", "$150","HELLO"];
    
    var startAngle = 0;
    var arc = Math.PI / 6;
    var spinTimeout = null;
    
    var spinArcStart = 10;
    var spinTime = 0;
    var spinTimeTotal = 0;
    
    if(document.getElementById("wheelcanvas")){
    var canvas = document.getElementById("wheelcanvas");
    var ctx = canvas.getContext("2d");
   
    
    var img1=new Image();
    img1.onload=start;
    img1.src="stave.png";
    var img2=new Image();
    img2.onload=start;
    img2.src="stave.png";
    var imgCount=2;
}

    function start(){
      if(--imgCount>0){return;}
      pattern1=ctx.createPattern(img1,'repeat');
      pattern2=ctx.createPattern(img2,'repeat');
      draw();
    }
    
    
    
    function draw() {
      drawRouletteWheel();
    }
    
    function drawRouletteWheel() {
      var outsideRadius = 200;
      var textRadius = 160;
      var insideRadius = 125;
    
      ctx.clearRect(0,0,600,600);
    
      ctx.strokeStyle = "green";
      ctx.lineWidth = 1;
    
      ctx.font = 'bold 14px sans-serif';
    
      for(var i = 0; i < 14; i++) {
        var angle = startAngle + i * arc;
        ctx.fillStyle = (i/2==parseInt(i/2))?pattern1:pattern2; //colors[i];
    
        ctx.beginPath();
        ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
        ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
        ctx.stroke();
        ctx.fill();
    
        ctx.save();
        ctx.shadowOffsetX = -1;
        ctx.shadowOffsetY = -1;
        ctx.shadowBlur    = 0;
        ctx.shadowColor   = "rgb(220,220,220)";
        ctx.fillStyle = "black";
        ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius, 250 + Math.sin(angle + arc / 2) * textRadius);
        ctx.rotate(angle + arc / 2 + Math.PI / 2);
        var text = restaraunts[i];
        ctx.fillText(text, -ctx.measureText(text).width /2, 2);
        ctx.restore();
      } 
    
      //Arrow
      ctx.fillStyle = "green";
      ctx.beginPath();
      ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
      ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
      ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
      ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
      ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
      ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
      ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
      ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
      ctx.fill();
    }
    let spinAngleStart;
    function spin() {
      spinAngleStart = Math.random() * 10 + 10;
      spinTime = 0;
      spinTimeTotal = Math.random() * 3 + 4 * 1000;
      rotateWheel();
    }
    
    function rotateWheel() {
      spinTime += 30;
      if(spinTime >= spinTimeTotal) {
        stopRotateWheel();
        return;
      }
      var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
      startAngle += (spinAngle * Math.PI / 180);
      drawRouletteWheel();
      spinTimeout = setTimeout('rotateWheel()', 30);
    }
    
    function stopRotateWheel() {
      clearTimeout(spinTimeout);
      var degrees = startAngle * 180 / Math.PI + 90;
      var arcd = arc * 180 / Math.PI;
      var index = Math.floor((360 - degrees % 360) / arcd);
      ctx.save();
      ctx.font = 'bold 30px sans-serif';
      var text = restaraunts[index]
      ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 10);
      ctx.restore();
    }
    
    function easeOut(t, b, c, d) {
      var ts = (t/=d)*t;
      var tc = ts*t;
      return b+c*(tc + -3*ts + 3*t);
    }


    return (
        <canvas id="wheelcanvas" width="600px" height="600px"></canvas>
    );
  }
  
  
  //<div className="web-cam">
  //<video id="video">
  //<source src="stave.mp4" type="video/mp4"/>
  //</video>
  //</div>
  export default Game;
  