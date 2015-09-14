var THREEx	= THREEx || {};

/**
 * [ description]
 * @param  {[type]} skinUrl [description]
 * @return {[type]}         [description]
 */
THREEx.TinygigantiumBlock	= function(skinUrl){
	
	
//	document.getElementById("xMoverz").innerHTML = character.root.rotation.y;
	// set default arguments values
	
	var cheesey = 'http://i1205.photobucket.com/albums/bb424/cman_was_here/blockblue_zpsjrj2oqg6.png';
	var cheeseyz = 'http://i1205.photobucket.com/albums/bb424/cman_was_here/big-block_zps9lpan5st.png';
	
	skinUrl	= skinUrl || (cheesey)

	//////////////////////////////////////////////////////////////////////////////////
	//		comment								//
	//////////////////////////////////////////////////////////////////////////////////	
	var texture	= THREE.ImageUtils.loadTexture( skinUrl );
	texture.magFilter	= THREE.NearestFilter;
	texture.minFilter	= THREE.NearestFilter;
	this.texture	= texture

	var material	= new THREEx.TinygigantiumBlock.defaultMaterial({
		map	: texture
	});
	var materialTran= new THREEx.TinygigantiumBlock.defaultMaterial({
		map		: texture,
		transparent	: true,
		depthWrite	: false,
		side		: THREE.DoubleSide
	})


	//////////////////////////////////////////////////////////////////////////////////
	//		define size constant						//
	//////////////////////////////////////////////////////////////////////////////////
	var sizes	= {};
	sizes.pixRatio	= 1/16;


	sizes.blockH	=  8 * sizes.pixRatio;
	sizes.blockW	=  8 * sizes.pixRatio;
	sizes.blockD	=  8 * sizes.pixRatio;


	// build model core hierachy
	// - origin between 2 feet
	// - height of full character is 1
	var model	= this;
	model.root	= new THREE.Object3D;

	// build model.block
	var geometry	= new THREE.CubeGeometry(sizes.blockW, sizes.blockH, sizes.blockD)
	model.block	= new THREE.Mesh(geometry, material)
	model.root.add(model.block)
	model.block.position.x = xPosi
	model.block.position.y = yPosi
	model.block.position.z = zPosi

/*
	// for head
	mapUvz(geometry, 0, 16, 24, 24, 16)	// left
	mapUvz(geometry, 1,  0, 24,  8, 16)	// right
	mapUvz(geometry, 2,  8, 32, 16, 24)	// top
	mapUvz(geometry, 3, 16, 32, 24, 24)	// bottom
	mapUvz(geometry, 4,  8, 24, 16, 16)	// front
	mapUvz(geometry, 5, 24, 24, 32, 16)	// back	
*/
// for body

	mapUvz(geometry, 0, 28, 12, 32,  0)	// left
	mapUvz(geometry, 1, 16, 12, 20,  0)	// right
	mapUvz(geometry, 2, 20, 16, 28, 12)	// top
	mapUvz(geometry, 3, 28, 16, 32, 12)	// bottom
	mapUvz(geometry, 4, 20, 12, 28,  0)	// front
	mapUvz(geometry, 5, 32, 12, 40,  0)	// back

return
	
	function mapUvz(geometry, faceIdx, x1, y1, x2, y2){
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



THREEx.TinygigantiumBlock.defaultMaterial	= THREE.MeshBasicMaterial
/**
 * Load a skin
 *
 * @param {string} url the url of the skin image
*/
THREEx.TinygigantiumBlock.prototype.loadSkin	= function(url, onLoad){
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

THREEx.TinygigantiumBlock.prototype.loadWellKnownSkin	= function(name, onLoad){
	console.assert(THREEx.TinygigantiumBlock.skinWellKnownUrls[name])
	var url	= THREEx.TinygigantiumBlock.skinWellKnownUrls[name];
	return this.loadSkin(url, onLoad)
}

THREEx.TinygigantiumBlock.skinWellKnownUrls	= {
	'character'			: 'http://i1205.photobucket.com/albums/bb424/cman_was_here/character_zps6kfdlafp.png',
	'character2'			: 'http://i1205.photobucket.com/albums/bb424/cman_was_here/character2_zps5jd07vwe.png',
}
