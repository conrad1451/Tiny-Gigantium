    var globalVarToShow = 0;
    
  var skinSite = 'http://i1205.photobucket.com/albums/bb424/cman_was_here/';
  var choices = ['character_zps6kfdlafp.png', 'character2_zps5jd07vwe.png'];
  
        
        /*
        function sq (aNumber) {
          aNumber * aNumber;
        }	
        */
 
  	var degrees = Math.PI/180;
        var cheese = 0.00;
        var xMove = 0;
        var yMove = 0;
        var zMove = 0;
        var xRoll = 0;
        var yRoll = 0;
        var zRoll = 0;
  
        var xBlockRoll = 0;
        var yBlockRoll = 0;
        var zBlockRoll = 0;
  
	var xPosi = 0;
	var yPosi = 0;
	var zPosi = 0;
	
	var xMoverz = 0;
        var aGraphP = 16;
        var aGraphSqrt = 0.01;
        var bGraphSqrt = 0.6;
        var xGraphSqrt = 0;
        
        var speedUp = 0;
	  
		var speed = 1;
        
        var seconds = 60;
        
        var characterHeight = 33 * (1/32);
     	
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  
  var updateFcts = [];
  var scene = new THREE.Scene();
  
  /*
  //controls fog
  scene.fog = new THREE.FogExp2(0xcccccc, 0.002);
  */
  
  var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 100);
  camera.position.y = 0.5;
  camera.position.z = 5;



  var skinner = [skinSite + choices[0], skinSite + choices[1]];
  
  /*
  choice 0 - conrad w/ purple shirt, jeans 
  choice 1 - conrad w/ green shirt, jeans
  */
	  
	  
  //////////////////////////////////////////////////////////////////////////////////
  //		load Character							//
  //////////////////////////////////////////////////////////////////////////////////

  
  
  //////////////////////
  //	LOAD BLOCK    //
  //                  //
  //////////////////////
  	
  var blockSkin1 = 'http://i1205.photobucket.com/albums/bb424/cman_was_here/blockblue_zpsjrj2oqg6.png';
  var blockSkin2 = 'http://i1205.photobucket.com/albums/bb424/cman_was_here/big-block_zps9lpan5st.png';
  var dirtBlock1 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock2 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock3 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock4 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock5 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock6 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock7 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock8 =  new THREEx.TinygigantiumBlock(blockSkin2);  
  var dirtBlock9 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock10 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock11 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock12 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock13 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock14 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock15 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock16 =  new THREEx.TinygigantiumBlock(blockSkin2); 	  
  var dirtBlock17 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock18 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock19 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock20 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock21 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock22 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock23 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock24 =  new THREEx.TinygigantiumBlock(blockSkin2); 
  var dirtBlock25 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock26 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock27 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock28 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock29 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock30 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock31 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock32 =  new THREEx.TinygigantiumBlock(blockSkin2); 
  var dirtBlock33 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock34 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock35 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock36 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock37 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock38 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock39 =  new THREEx.TinygigantiumBlock(blockSkin2);
  var dirtBlock40 =  new THREEx.TinygigantiumBlock(blockSkin2); 	  
	  
	  
  var landscape = [
  dirtBlock1, dirtBlock2, dirtBlock3, dirtBlock4, dirtBlock5, dirtBlock6, dirtBlock7, dirtBlock8
  ];
	  
// want to able to automatically append the .root.position for x, y, and z for each new block that is added
  var positioning = [
  	[dirtBlock1.root.position.x, dirtBlock2.root.position.x, dirtBlock3.root.position.x, dirtBlock4.root.position.x,
	dirtBlock5.root.position.x, dirtBlock6.root.position.x, dirtBlock7.root.position.x, dirtBlock8.root.position.x],
	  
  	[dirtBlock1.root.position.y, dirtBlock2.root.position.y, dirtBlock3.root.position.y, dirtBlock4.root.position.y,
	dirtBlock5.root.position.y, dirtBlock6.root.position.y, dirtBlock7.root.position.y, dirtBlock8.root.position.y],
  	
	[dirtBlock1.root.position.z, dirtBlock2.root.position.z, dirtBlock3.root.position.z, dirtBlock4.root.position.z,
	dirtBlock5.root.position.z, dirtBlock6.root.position.z, dirtBlock7.root.position.z, dirtBlock8.root.position.z],
  ];	  
	  
  scene.add(dirtBlock1.root); scene.add(dirtBlock2.root); scene.add(dirtBlock3.root); scene.add(dirtBlock4.root);	  
  scene.add(dirtBlock5.root); scene.add(dirtBlock6.root); scene.add(dirtBlock7.root); scene.add(dirtBlock8.root);
  scene.add(dirtBlock9.root); scene.add(dirtBlock10.root); scene.add(dirtBlock11.root); scene.add(dirtBlock12.root);	  
  scene.add(dirtBlock13.root); scene.add(dirtBlock14.root); scene.add(dirtBlock15.root); scene.add(dirtBlock16.root);	  
  scene.add(dirtBlock17.root); scene.add(dirtBlock18.root); scene.add(dirtBlock19.root); scene.add(dirtBlock20.root);
  scene.add(dirtBlock21.root); scene.add(dirtBlock22.root); scene.add(dirtBlock23.root); scene.add(dirtBlock24.root);	  
  scene.add(dirtBlock25.root); scene.add(dirtBlock26.root); scene.add(dirtBlock27.root); scene.add(dirtBlock28.root);	  
  scene.add(dirtBlock29.root); scene.add(dirtBlock30.root); scene.add(dirtBlock31.root); scene.add(dirtBlock32.root);
  scene.add(dirtBlock33.root); scene.add(dirtBlock34.root); scene.add(dirtBlock35.root); scene.add(dirtBlock36.root);	
  scene.add(dirtBlock37.root); scene.add(dirtBlock38.root); scene.add(dirtBlock39.root); scene.add(dirtBlock40.root);
	  
	  /**/  
	  /*
  for(p = 0, p < landscape.length, p++) {
  	scene.add(landscape[p].root);
  };
	  
	j = 0;
	  
  for(r = 0, r < positioning[1].length, r++) {
  	positioning[0][r] = j;
	positioning[1][r] = j;
	positioning[2][r] = 0;
	j += 10
  };
  */
/*
  for(s = 0, s < positioning[1].length, s++) {
  	positioning[1][r] = j;
	j += 10;
  };	  
	 */ 
	  // the a = b = c = value strategy works!
	  
	var cubeSpace = 0.5;
	  
    dirtBlock1.root.position.x = dirtBlock9.root.position.x = dirtBlock17.root.position.x = dirtBlock25.root.position.x = dirtBlock33.root.position.x = (-cubeSpace*3)-0.25; 
    dirtBlock2.root.position.x = dirtBlock10.root.position.x = dirtBlock18.root.position.x = dirtBlock26.root.position.x = dirtBlock34.root.position.x = (-cubeSpace*2)-0.25; 
    dirtBlock3.root.position.x = dirtBlock11.root.position.x = dirtBlock19.root.position.x = dirtBlock27.root.position.x = dirtBlock35.root.position.x = (-cubeSpace*1)-0.25; 	  
    dirtBlock4.root.position.x = dirtBlock12.root.position.x = dirtBlock20.root.position.x = dirtBlock28.root.position.x = dirtBlock36.root.position.x = (-cubeSpace*0)-0.25; 	  
	dirtBlock5.root.position.x = dirtBlock13.root.position.x = dirtBlock21.root.position.x = dirtBlock29.root.position.x = dirtBlock37.root.position.x = (cubeSpace*0)+0.25; 
    dirtBlock6.root.position.x = dirtBlock14.root.position.x = dirtBlock22.root.position.x = dirtBlock30.root.position.x = dirtBlock38.root.position.x = (cubeSpace*1)+0.25; 
    dirtBlock7.root.position.x = dirtBlock15.root.position.x = dirtBlock23.root.position.x = dirtBlock31.root.position.x = dirtBlock39.root.position.x = (cubeSpace*2)+0.25; 	  
    dirtBlock8.root.position.x = dirtBlock16.root.position.x = dirtBlock24.root.position.x = dirtBlock32.root.position.x = dirtBlock40.root.position.x = (cubeSpace*3)+0.25; 	  
		
    dirtBlock1.root.position.z = dirtBlock2.root.position.z = dirtBlock3.root.position.z = dirtBlock4.root.position.z = 
    dirtBlock5.root.position.z = dirtBlock6.root.position.z = dirtBlock7.root.position.z = dirtBlock8.root.position.z = 0;		
    dirtBlock9.root.position.z = dirtBlock10.root.position.z = dirtBlock11.root.position.z = dirtBlock12.root.position.z = 
    dirtBlock13.root.position.z = dirtBlock14.root.position.z = dirtBlock15.root.position.z = dirtBlock16.root.position.z = cubeSpace;
    dirtBlock17.root.position.z = dirtBlock18.root.position.z = dirtBlock19.root.position.z = dirtBlock20.root.position.z = 
    dirtBlock21.root.position.z = dirtBlock22.root.position.z = dirtBlock23.root.position.z = dirtBlock24.root.position.z = cubeSpace*2;	  
    dirtBlock25.root.position.z = dirtBlock26.root.position.z = dirtBlock27.root.position.z = dirtBlock28.root.position.z = 
    dirtBlock29.root.position.z = dirtBlock30.root.position.z = dirtBlock31.root.position.z = dirtBlock32.root.position.z = cubeSpace*3;	  
    dirtBlock33.root.position.z = dirtBlock34.root.position.z = dirtBlock35.root.position.z = dirtBlock36.root.position.z = 
    dirtBlock37.root.position.z = dirtBlock38.root.position.z = dirtBlock39.root.position.z = dirtBlock40.root.position.z = cubeSpace*4;
	   
	dirtBlock1.root.position.y = dirtBlock9.root.position.y = dirtBlock17.root.position.y = dirtBlock25.root.position.y = dirtBlock33.root.position.y =
	dirtBlock2.root.position.y = dirtBlock10.root.position.y = dirtBlock18.root.position.y = dirtBlock26.root.position.y = dirtBlock34.root.position.y =
	dirtBlock3.root.position.y = dirtBlock11.root.position.y = dirtBlock19.root.position.y = dirtBlock27.root.position.y = dirtBlock35.root.position.y =
	dirtBlock4.root.position.y = dirtBlock12.root.position.y = dirtBlock20.root.position.y = dirtBlock28.root.position.y = dirtBlock36.root.position.y =
	dirtBlock5.root.position.y = dirtBlock13.root.position.y = dirtBlock21.root.position.y = dirtBlock29.root.position.y = dirtBlock37.root.position.y =
	dirtBlock6.root.position.y = dirtBlock14.root.position.y = dirtBlock22.root.position.y = dirtBlock30.root.position.y = dirtBlock38.root.position.y =
	dirtBlock7.root.position.y = dirtBlock15.root.position.y = dirtBlock23.root.position.y = dirtBlock31.root.position.y = dirtBlock39.root.position.y =
	dirtBlock8.root.position.y = dirtBlock16.root.position.y = dirtBlock24.root.position.y = dirtBlock32.root.position.y = dirtBlock40.root.position.y = (-0*cubeSpace)-0.25;
	  
	  
	  /*
     dirtBlock1.root.rotation.x = 90 * degrees;
    dirtBlock1.root.rotation.y = 0 * degrees;
    dirtBlock1.root.rotation.z = 0 * degrees;	  
     dirtBlock2.root.rotation.x = 90 * degrees;
    dirtBlock2.root.rotation.y = 0 * degrees;
    dirtBlock2.root.rotation.z = 0 * degrees;	
	 
     dirtBlock3.root.rotation.x = 90 * degrees;
    dirtBlock3.root.rotation.y = 0 * degrees;
    dirtBlock3.root.rotation.z = 0 * degrees;	
	  
     dirtBlock4.root.rotation.x = 90 * degrees;
    dirtBlock4.root.rotation.y = 0 * degrees;
    dirtBlock4.root.rotation.z = 0 * degrees;	
	  
     dirtBlock5.root.rotation.x = 90 * degrees;
    dirtBlock5.root.rotation.y = 0 * degrees;
    dirtBlock5.root.rotation.z = 0 * degrees;
	  
    dirtBlock6.root.rotation.x = 90 * degrees;
    dirtBlock6.root.rotation.y = 0 * degrees;
    dirtBlock6.root.rotation.z = 0 * degrees;
	  
    dirtBlock7.root.rotation.x = 90 * degrees;
    dirtBlock7.root.rotation.y = 0 * degrees;
    dirtBlock7.root.rotation.z = 0 * degrees;
	  
    dirtBlock8.root.rotation.x = 90 * degrees;
    dirtBlock8.root.rotation.y = 0 * degrees;
    dirtBlock8.root.rotation.z = 0 * degrees;	  
	  */
  /*
    // for FPS indicatorz
  stats = new Stats();
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.top = '0px';
  stats.domElement.style.zIndex = 100;
  container.appendChild(stats.domElement);
// End of fps indicator
  */
  
  /*
  function abcmoves(e) {
    var evtobj = window.event ? event : e //distinguish between IE's explicit event object (window.event) and Firefox's implicit.
    var unicode = evtobj.charCode ? evtobj.charCode : evtobj.keyCode
  
    // Use to make it based on alphabet characters 
    
    var actualkey = String.fromCharCode(unicode)
  
  //  alert(actualkey);
  }
  document.onkeypress = abcmoves
  */
  
  ////////////////////////////
  //	  	      	    //
  //  CODE FOR CHARACTER    //
  //                 	    //
  ////////////////////////////
	  
	  
    var metaChar = false;
    var exampleKey = 16;
	  
    var leftarrow = 37;
    var uparrow = 38;
    var rightarrow = 39;
    var downarrow = 40;
    var shift = 16;
    var spacebar = 32;
	  
    var a = 65;
    var d = 68;
    var s = 83;
    var f = 70;
    var l = 76;
   
    //A = 65, a = 97, Z = 90, 0 = 48, 9 = 57
    

    
    
function metaKeyUp (event) {
  var key = event.keyCode || event.which;
  if (key == exampleKey) {
    metaChar = false;
  }
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
     camera.position.x += (mouse.x*5 - camera.position.x) * (delta*3) * (4 / 100)
    // camera.position.y += (mouse.y*5 - camera.position.y) * (delta*3)
    // camera.lookAt makes camera focus move along with character 
    //	 camera.lookAt( scene.position )
  })
  
	  
	  /////////////////////
	  //  Display Values //
	  /////////////////////
	  
    function valuedisplayer () 
    {
      //var testingz = ["speed: " + speed + " "]; //, "keychar: " + keychar + " ", "zMovers: " + "filler" + " "];
      var sss = speed;
      var hh = 0; // i replacedd this val with 0 for filler character.root.position.y;
      
      var cSpeed = sss.toString();
      var cVertPos = hh.toString();
      
      var holderThis1 = 0; // i replacedd this val with 0 for filler globalVarToShow.toString();
      
	    
	    
	//var mm = testingz[0];
	var speedLabel = "Speed: " + cSpeed.substring(0, 4);
	var mainPlayerVerticalPos = "Main player vertical position: " + cVertPos.substring(0, 4);  /**/  
      var myShowVal = "value to show: " + holderThis1;
      
      
	    
  document.getElementById("display1").innerHTML =  speedLabel;  
	document.getElementById("display2").innerHTML =  mainPlayerVerticalPos; 
	document.getElementById("display3").innerHTML = myShowVal;
  }
  
    setInterval(valuedisplayer, 1);
 
	  
	  
  //////////////////////////////////////////////////////////////////////////////////
  //		render the scene						//
  //////////////////////////////////////////////////////////////////////////////////
  updateFcts.push(function() {
    renderer.render(scene, camera);
  
	  
      dirtBlock1.root.rotation.x += xBlockRoll;
      dirtBlock1.root.rotation.y += yBlockRoll;
      dirtBlock1.root.rotation.z += zBlockRoll;
      
    
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
