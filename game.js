<!--http://jeromeetienne.github.io/threex/src/threex.minecraft/examples/animation.html-->

<script src='http://jeromeetienne.github.io/threex/vendor/three.js/build/three.min.js'></script>
<script src='http://jeromeetienne.github.io/threex/src/threex.minecraft/threex.minecraft.js'></script>
<!-- include animation -->
<script src='http://jeromeetienne.github.io/threex/src/threex.minecraft/threex.animation.js'></script>
<script src='http://jeromeetienne.github.io/threex/src/threex.minecraft/threex.animations.js'></script>
<!--

Pasted the code from these 2 sources straight into the JS part of this pen
-->
<script src='http://jeromeetienne.github.io/threex/src/threex.minecraft/threex.minecraftcharheadanim.js'></script>

<script src='http://jeromeetienne.github.io/threex/src/threex.minecraft/threex.minecraftcharbodyanim.js'></script>


<!-- ================= -->

<body style='margin: 0px; background-color: #bbbbbb; overflow: hidden;' onkeydown="keyEvent(event)">
  <div>
    <strong>Body Animations</strong>
    <button onclick='switchBodyValue(this.innerText);'>stand</button>
    <button onclick='switchBodyValue(this.innerText);'>fall</button>
    <button onclick='switchBodyValue(this.innerText);'>strafe</button>
    <button onclick='switchBodyValue(this.innerText);'>jump</button>
    <button onclick='switchBodyValue(this.innerText);'>walk</button>
    <button onclick='switchBodyValue(this.innerText);'>run</button>
    <button onclick='switchBodyValue(this.innerText);'>wave</button>
    <button onclick='switchBodyValue(this.innerText);'>hiwave</button>
    <button onclick='switchBodyValue(this.innerText);'>circularPunch</button>
    <button onclick='switchBodyValue(this.innerText);'>rightPunch</button>
  </div>
  <div>
    <strong>Head Animations</strong>
    <button onclick='switchHeadValue(this.innerText);'>still</button>
    <button onclick='switchHeadValue(this.innerText);'>yes</button>
    <button onclick='switchHeadValue(this.innerText);'>no</button>
  </div>

  <script>
    // Added onmousedown and onmouseup and can now walk when and only when mouse is being pressed down. Try and get same effect when a key is being held down
  
  var cheese = 0.02;
  
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  
  var updateFcts = [];
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 100);
  camera.position.y = 0.3;
  camera.position.z = 5;
  
  //////////////////////////////////////////////////////////////////////////////////
  //		load Character							//
  //////////////////////////////////////////////////////////////////////////////////
  
  var character = new THREEx.MinecraftChar()
  scene.add(character.root)
  
  var headAnims = new THREEx.MinecraftCharHeadAnimations(character);
  updateFcts.push(function(delta, now) {
    headAnims.update(delta, now)
  })
  headAnims.start('yes');
  var switchHeadValue = function(value) {
    headAnims.start(value)
  }
  
  // init bodyAnims
  var bodyAnims = new THREEx.MinecraftCharBodyAnimations(character);
  updateFcts.push(function(delta, now) {
    bodyAnims.update(delta, now)
  })
  
  function abcmoves(e) {
    var evtobj = window.event ? event : e //distinguish between IE's explicit event object (window.event) and Firefox's implicit.
    var unicode = evtobj.charCode ? evtobj.charCode : evtobj.keyCode
  
    /* Use to make it based on alphabet characters
    
    var actualkey = String.fromCharCode(unicode)
  
    a = unicode 97
    z = unicode 122
    
    0 = unicdoe 48
    9 = unicode 57
    
    */
  
    alert(unicode);
  }
  document.onkeypress = abcmoves
  
  function keyEvent(event) {
  
    var leftarrow = 37;
    var uparrow = 38;
    var rightarrow = 39;
    var downarrow = 40;
  
    var key = event.keyCode || event.which;
    var keychar = String.fromCharCode(key);
    if (key == uparrow) {
      bodyAnims.start('walk');
      // move character forwards
    }
    if (key == downarrow) {
      bodyAnims.start('walk');
      // move character backwards
    }
    if (key >= leftarrow && key <= downarrow)
      onkeyup = function() {
        bodyAnims.start('stand');
      }
  
  }
  
  var switchBodyValue = function(value) {
    bodyAnims.start(value)
  }
  
  //////////////////////////////////////////////////////////////////////////////////
  //		Camera Controls							//
  //////////////////////////////////////////////////////////////////////////////////
  var mouse = {
    x: 0,
    y: 0
  }
  document.addEventListener('mousemove', function(event) {
    mouse.x = (event.clientX / window.innerWidth) - 0.5
    mouse.y = (event.clientY / window.innerHeight) - 0.5
  }, false)
  updateFcts.push(function(delta, now) {
    //		 camera.position.x += (mouse.x*5 - camera.position.x) * (delta*3)
    // camera.position.y += (mouse.y*5 - camera.position.y) * (delta*3)
    // camera.lookAt makes camera focus move along with character 
    //	 camera.lookAt( scene.position )
  })
  
  //////////////////////////////////////////////////////////////////////////////////
  //		render the scene						//
  //////////////////////////////////////////////////////////////////////////////////
  updateFcts.push(function() {
    renderer.render(scene, camera);
  
    /* 
     
     
    code I added to test flexibilty of program (IT WORKS!)
     
    camera.position.y += cheese; 
     
    */
  })
  
  //////////////////////////////////////////////////////////////////////////////////
  //		loop runner							//
  //////////////////////////////////////////////////////////////////////////////////
  var lastTimeMsec = null
  requestAnimationFrame(function animate(nowMsec) {
    // keep looping
    requestAnimationFrame(animate);
    // measure time
    lastTimeMsec = lastTimeMsec || nowMsec - 1000 / 60
    var deltaMsec = Math.min(200, nowMsec - lastTimeMsec)
    lastTimeMsec = nowMsec
      // call each update function
    updateFcts.forEach(function(updateFn) {
      updateFn(deltaMsec / 1000, nowMsec / 1000)
    })
  })
  </script>


</body>
