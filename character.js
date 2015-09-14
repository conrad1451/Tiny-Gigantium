/* 

Would only need to do mesh.position.x and model.helmet.position.x if you wanted the helmet 
to come off the head for some reason, you would set them at different y and x values

checked accuracy of skins https://github.com/jeromeetienne/threex/blob/master/src/threex.minecraft/threex.minecraft.js

*/

var THREEx	= THREEx || {};

/**
 * [ description]
 * @param  {[type]} skinUrl [description]
 * @return {[type]}         [description]
 */
THREEx.TinygigantiumChar	= function(skinUrl){
	// set default arguments values
	// link works ! -->  http://i1205.photobucket.com/albums/bb424/cman_was_here/theflash_zpsbohbmk1n.png
	
	skinUrl	= skinUrl || ('http://i1205.photobucket.com/albums/bb424/cman_was_here/character2_zps5jd07vwe.png')

	//////////////////////////////////////////////////////////////////////////////////
	//		comment								//
	//////////////////////////////////////////////////////////////////////////////////	
	var texture	= THREE.ImageUtils.loadTexture( skinUrl );
	texture.magFilter	= THREE.NearestFilter;
	texture.minFilter	= THREE.NearestFilter;
	this.texture	= texture

	var material	= new THREEx.TinygigantiumChar.defaultMaterial({
		map	: texture
	});
	var materialTran= new THREEx.TinygigantiumChar.defaultMaterial({
		map		: texture,
		transparent	: true,
		depthWrite	: false,
		side		: THREE.DoubleSide
	})


	//////////////////////////////////////////////////////////////////////////////////
	//		define size constant						//
	//////////////////////////////////////////////////////////////////////////////////
	var sizes	= {};
	sizes.charH	= 1;
	sizes.pixRatio	= 1/32;




	sizes.headH	=  8 * sizes.pixRatio;
	sizes.headW	=  8 * sizes.pixRatio;
	sizes.headD	=  8 * sizes.pixRatio;

	sizes.helmetH	=  9 * sizes.pixRatio;
	sizes.helmetW	=  9 * sizes.pixRatio;
	sizes.helmetD	=  9 * sizes.pixRatio;

	sizes.bodyH	= 12 * sizes.pixRatio;
	sizes.bodyW	=  8 * sizes.pixRatio;
	sizes.bodyD	=  4 * sizes.pixRatio;

	sizes.legH	= 12 * sizes.pixRatio;
	sizes.legW	=  4 * sizes.pixRatio;
	sizes.legD	=  4 * sizes.pixRatio;

	sizes.armH	= 12 * sizes.pixRatio;
	sizes.armW	=  4 * sizes.pixRatio;
	sizes.armD	=  4 * sizes.pixRatio;
	


	// build model core hierachy
	// - origin between 2 feet
	// - height of full character is 1
	var model	= this;
	model.root	= new THREE.Object3D;

	var group	= new THREE.Object3D()
	group.position.x = xPosi
	group.position.y = sizes.legH + sizes.bodyH  // 12/32 + 12/32 + (8/32)/2 ---> 3/8 + 3/8 --> 3/4
	group.position.z = zPosi
	model.headGroup	= group
	model.root.add(model.headGroup)




	// build model.head
	var geometry	= new THREE.CubeGeometry(sizes.headW, sizes.headH, sizes.headD)
	mapUv(geometry, 0, 16, 24, 24, 16)	// left
	mapUv(geometry, 1,  0, 24,  8, 16)	// right
	mapUv(geometry, 2,  8, 32, 16, 24)	// top
	mapUv(geometry, 3, 16, 32, 24, 24)	// bottom
	mapUv(geometry, 4,  8, 24, 16, 16)	// front
	mapUv(geometry, 5, 24, 24, 32, 16)	// back
	var mesh	= new THREE.Mesh(geometry, material)
	mesh.position.y	= sizes.headH/2 + yPosi
	model.head	= mesh
	model.headGroup.add(model.head)


	// build model.helmet
	var geometry	= new THREE.CubeGeometry(sizes.helmetH, sizes.helmetH, sizes.helmetH)
	model.helmet	= new THREE.Mesh(geometry, materialTran)
	model.headGroup.add(model.helmet)
	model.helmet.position.y	= sizes.headH/2 + yPosi 
	mapUv(geometry, 0, 48, 24, 56, 16)	// left
	mapUv(geometry, 1, 32, 24, 40, 16)	// right
	mapUv(geometry, 2, 40, 32, 48, 24)	// top
	mapUv(geometry, 3, 48, 32, 56, 24)	// bottom
	mapUv(geometry, 4, 40, 24, 48, 16)	// front
	mapUv(geometry, 5, 56, 24, 64, 16)	// back
	
	
	// build model.body
	var geometry	= new THREE.CubeGeometry(sizes.bodyW, sizes.bodyH, sizes.bodyD)
	model.body	= new THREE.Mesh(geometry, material)
	model.root.add(model.body)
	model.body.position.x = xPosi
	model.body.position.y = sizes.legH + sizes.bodyH/2 + yPosi
	model.body.position.z = zPosi
	mapUv(geometry, 0, 28, 12, 32,  0)	// left   (slope 3 (12/4))
	mapUv(geometry, 1, 16, 12, 20,  0)	// right  (slope 3 (12/4))
	mapUv(geometry, 2, 20, 16, 28, 12)	// top    (slope 1/2 (4/8))
	mapUv(geometry, 3, 28, 16, 32, 12)	// bottom (slope 3 (4/4))
	mapUv(geometry, 4, 20, 12, 28,  0)	// front  (slope 3 (12/4))
	mapUv(geometry, 5, 32, 12, 40,  0)	// back   (slope 3 (12/4))

	// build model.armR
	var geometry	= new THREE.CubeGeometry(sizes.armW, sizes.armH, sizes.armD)
	model.armR	= new THREE.Mesh(geometry, material)
	model.root.add(model.armR)
	geometry.applyMatrix( new THREE.Matrix4().makeTranslation(0, -sizes.armH/2 + sizes.armW/2, 0) );
	model.armR.position.x	= -sizes.bodyW/2 - sizes.armW/2 + xPosi
	model.armR.position.y	=  sizes.legH + sizes.bodyH - sizes.armW/2 + yPosi
	model.armR.position.z   = zPosi 
	mapUv(geometry, 0, 48, 12, 52,  0)	// right
	mapUv(geometry, 1, 40, 12, 44,  0)	// left
	mapUv(geometry, 2, 44, 16, 48, 12)	// top
	mapUv(geometry, 3, 48, 16, 52, 12)	// bottom
	mapUv(geometry, 4, 44, 12, 48,  0)	// front
	mapUv(geometry, 5, 52, 12, 56,  0)	// back

	// build model.armL
	var geometry	= new THREE.CubeGeometry(sizes.armW, sizes.armH, sizes.armD)
	model.armL	= new THREE.Mesh(geometry, material)
	model.root.add(model.armL)
	geometry.applyMatrix( new THREE.Matrix4().makeTranslation(0, -sizes.armH/2 + sizes.armW/2, 0) );
	model.armL.position.x	= sizes.bodyW/2 + sizes.armW/2 + xPosi
	model.armL.position.y	= sizes.legH + sizes.bodyH - sizes.armW/2 + yPosi
        model.armL.position.z   = zPosi
	mapUv(geometry, 0, 44, 12, 40,  0)	// right  (slope 3 (12/4))
	mapUv(geometry, 1, 52, 12, 48,  0)	// left   (slope 3 (12/4))
	mapUv(geometry, 2, 44, 16, 48, 12)	// top    (slope 1 (4/4))
	mapUv(geometry, 3, 48, 16, 52, 12)	// bottom (slope 1 (4/4))
	mapUv(geometry, 4, 48, 12, 44,  0)	// front  (slope 3 (12/4))
	mapUv(geometry, 5, 56, 12, 52,  0)	// back   (slope 3 (12/4))

	// build model.legR
	var geometry	= new THREE.CubeGeometry(sizes.legW, sizes.legH, sizes.legD)
	model.legR	= new THREE.Mesh(geometry, material)
	model.root.add(model.legR)
	geometry.applyMatrix( new THREE.Matrix4().makeTranslation(0, -sizes.legH/2, 0) );
	model.legR.position.x	= -sizes.legW/2 + xPosi
	model.legR.position.y	=  sizes.legH + yPosi
	model.legR.position.z     = zPosi
	mapUv(geometry, 0,  8, 12, 12,  0)	// right
	mapUv(geometry, 1,  0, 12,  4,  0)	// left
	mapUv(geometry, 2,  4, 16,  8, 12)	// top
	mapUv(geometry, 3,  8, 16, 12, 12)	// bottom
	mapUv(geometry, 4,  4, 12,  8,  0)	// front
	mapUv(geometry, 5, 12, 12, 16,  0)	// back

	// build model.legL
	var geometry	= new THREE.CubeGeometry(sizes.legW, sizes.legH, sizes.legD)
	model.legL	= new THREE.Mesh(geometry, material)
	model.root.add(model.legL)
	geometry.applyMatrix( new THREE.Matrix4().makeTranslation(0, -sizes.legH/2, 0) );
	model.legL.position.x	= sizes.legW/2 + xPosi
	model.legL.position.y	= sizes.legH + yPosi
	model.legL.position.z   = zPosi
	
	var xCoordl = 4;
	var xCoord2 = xCoordl-xCoordl;
	var yCoordl = 12;
	var yCoord2 = yCoordl-yCoordl;
	
	// [legs,] 

/*	
	var slope = {
	   arm: 3
	   leg: 3
	   body:
	   head:	
	}


	var dist = {
	   arm: 
	   leg: 4
	   body:
	   head:
	};
	

var armL = {
	
	
	
}
*/	
	
/*	
	uvPosi = {
		
	}
*/	
/*
	3 * 4
	-----
	1 * 4
	
	armL.left.x1
	
*/	
	
	
	mapUv(geometry, 0,  xCoordl, yCoordl, xCoord2, yCoord2)	// left   (slope 3 (12/4))
	mapUv(geometry, 1, 12, 12,  8,  0)	// right  (slope 3 (12/4))
	mapUv(geometry, 2,  8, 16,  4, 12)	// top    (slope 1 (4/4))
	mapUv(geometry, 3, 12, 16,  8, 12)	// bottom (slope 1 (4/4))
	mapUv(geometry, 4,  8, 12,  4,  0)	// front  (slope 3 (12/4))
	mapUv(geometry, 5, 16, 12, 12,  0)	// back   (slope 3 (12/4))

return
	
	function mapUv(geometry, faceIdx, x1, y1, x2, y2){
		var tileUvW	= 1/64;
		var tileUvH	= 1/32;
		if( geometry.faces[faceIdx] instanceof THREE.Face3 ){
			var UVs		= geometry.faceVertexUvs[0][faceIdx * 2];
			UVs[0].x = x1 * tileUvW;	UVs[0].y = y1 * tileUvH;
			UVs[1].x = x1 * tileUvW;	UVs[1].y = y2 * tileUvH;
			UVs[2].x = x2 * tileUvW;	UVs[2].y = y1 * tileUvH;
			 
			var UVs		= geometry.faceVertexUvs[0][faceIdx * 2 + 1];
			UVs[0].x = x1 * tileUvW;	UVs[0].y = y2 * tileUvH;
			UVs[1].x = x2 * tileUvW;	UVs[1].y = y2 * tileUvH;
			UVs[2].x = x2 * tileUvW;	UVs[2].y = y1 * tileUvH;			
		}else if( geometry.faces[faceIdx] instanceof THREE.Face4 ){
			var UVs                = geometry.faceVertexUvs[0][faceIdx];
			UVs[0].x = x1 * tileUvW;        UVs[0].y = y1 * tileUvH;
			UVs[1].x = x1 * tileUvW;        UVs[1].y = y2 * tileUvH;
			UVs[2].x = x2 * tileUvW;        UVs[2].y = y2 * tileUvH;
			UVs[3].x = x2 * tileUvW;        UVs[3].y = y1 * tileUvH;   			
		}else	console.assert(false)
	}
}



THREEx.TinygigantiumChar.defaultMaterial	= THREE.MeshBasicMaterial
/**
 * Load a skin
 *
 * @param {string} url the url of the skin image
*/
THREEx.TinygigantiumChar.prototype.loadSkin	= function(url, onLoad){
	var image	= new Image();
	image.onload	= function () {
		this.texture.image		= image;
		this.texture.needsUpdate	= true;
		onLoad	&& onLoad(this)
	}.bind(this);
	image.src = url;
	return this;	// for chained API
}


//////////////////////////////////////////////////////////////////////////////////
//		support for skin Well Known Url					//
//////////////////////////////////////////////////////////////////////////////////

THREEx.TinygigantiumChar.prototype.loadWellKnownSkin	= function(name, onLoad){
	console.assert(THREEx.TinygigantiumChar.skinWellKnownUrls[name])
	var url	= THREEx.TinygigantiumChar.skinWellKnownUrls[name];
	return this.loadSkin(url, onLoad)
}

THREEx.TinygigantiumChar.skinWellKnownUrls	= {
	'character'			: 'http://i1205.photobucket.com/albums/bb424/cman_was_here/character_zps6kfdlafp.png',
	'character2'			: 'http://i1205.photobucket.com/albums/bb424/cman_was_here/character2_zps5jd07vwe.png',
}
