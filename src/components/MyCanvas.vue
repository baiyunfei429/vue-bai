<template>
  <div class="mycanvas">
    <input type="date" name="bday">
    <!-- <canvas id="myCanvas" width='500' height="500" style="border:1px solid #000000;">
       <P>you browser not support canvas!</P>
   </canvas> -->
    <div>
      <h1>Canvas Loading</h1>
    </div>
    <canvas id="canvas" width="500" height="400" style="background:#F7F7F7;"></canvas>
  </div>
</template>

<script>
  export default {
    name: 'MyCanvas',
    props: {},
    methods: {

    },
    mounted() {
      /**
       * 基础练习
       * */
      //     var c=document.getElementById("myCanvas");
      //     var ctx=c.getContext("2d");
      //     ctx.fillStyle="#fff";
      //     ctx.fillRect(0,0,150,75);

      //     ctx.moveTo(0,0);
      // ctx.lineTo(200,100);
      // ctx.stroke();

      // ctx.beginPath();
      // ctx.arc(95,50,40,0,2*Math.PI);
      // ctx.stroke();

      // ctx.font="30px Arial";
      // ctx.strokeText("Hello World",10,50);

      // // 创建渐变
      // var grd=ctx.createLinearGradient(0,0,200,0);
      // grd.addColorStop(0,"red");
      // grd.addColorStop(1,"white");

      // // 填充渐变
      // ctx.fillStyle=grd;
      // ctx.fillRect(10,10,150,150);

      /**
       * 动态绘制circle圆环
       * */
      // var canvas = document.getElementById('canvas'),
      //   context = canvas.getContext('2d'),
      //   centerX = canvas.width / 2,
      //   centerY = canvas.height / 2,
      //   rad = Math.PI * 2 / 100,
      //   speed = 0.1;

      // function text(n) {
      //   context.save();
      //   context.fillStyle = "#F47C7C";
      //   context.font = "40px Arial";
      //   context.textAlign = "center";
      //   context.textBaseline = "middle";
      //   context.fillText(n.toFixed(0) + "%", centerX, centerY);
      //   context.restore();
      // }

      // function blueCircle(n) {
      //   context.save();
      //   context.beginPath();
      //   context.strokeStyle = "#49f";
      //   context.lineWidth = 12;
      //   context.arc(centerX, centerY, 100, -Math.PI / 2, -Math.PI / 2 + n * rad, false);
      //   context.stroke();
      //   context.restore();
      // }

      // function whiteCircle() {
      //   context.save();
      //   context.beginPath();
      //   context.strokeStyle = "#A5DEF1";
      //   context.lineWidth = 12;
      //   context.arc(centerX, centerY, 100, 0, Math.PI * 2, false);
      //   context.stroke();
      //   context.closePath();
      //   context.restore();
      // }

      // (function drawFrame() {
      //   window.requestAnimationFrame(drawFrame, canvas);
      //   context.clearRect(0, 0, canvas.width, canvas.height);

      //   whiteCircle();
      //   text(speed);
      //   blueCircle(speed);

      //   if (speed > 100) speed = 0;
      //   speed += 0.1;
      // }());

      /**
       * 黑客帝国(Matrix.js)效果
       * */
      var canvas = document.querySelector('canvas'),
        context = canvas.getContext('2d'),
        w = canvas.width = window.innerWidth,
        h = canvas.height = window.innerHeight;

      //初始化
      var clearColor = 'rgba(0, 0, 0, .1)', //用于绘制渐变阴影
        wordColor = "#33ff33", //文字颜色
        words = "0123456789qwertyuiopasdfghjklzxcvbnm,./;'\[]QWERTYUIOP{}ASDFGHJHJKL:ZXCVBBNM<>?",
        wordsArr = words.split(''), //将文字拆分进一个数组
        font_size = 16, //字体大小
        clumns = w / font_size, //文字降落的列数
        drops = [];

      for (var i = 0; i < clumns; i++) {
        drops[i] = 1;
      }

      function draw() {
        context.save();
        context.fillStyle = wordColor;
        context.font = font_size + "px arial";
        //核心
        for (var i = 0; i < drops.length; i++) {
          var text = wordsArr[Math.floor(Math.random() * wordsArr.length)];
          context.fillText(text, i * font_size, drops[i] * font_size);
          if (drops[i] * font_size > h && Math.random() > 0.98) {
            drops[i] = 0;
          }
          drops[i]++;
        }
        context.restore();
      }

      //动画循环
      (function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas);
        context.fillStyle = clearColor;
        context.fillRect(0, 0, w, h); //注意这
        draw();
      }())

    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body {
    background-color: #F7F7F7;
  }

  h1 {
    font-size: 30px;
    font-weight: 800;
    letter-spacing: 2px;
  }

  small {
    font-size: 15px;
    font-weight: 100;
    letter-spacing: 1px;
  }
</style>
