var THREEx	= THREEx || {};

THREEx.createTinygigantiumCharHeadAnimations	= function(character){
	return new THREEx.TinygigantiumCharHeadAnimations(character);
}

THREEx.TinygigantiumCharHeadAnimations	= function(character){
	var animations	= this;
	// call parent ctor
	THREEx.Animations.call(this)
	
	var tweenAngle	= function(baseValue, nextValue, timePercent){
		if( nextValue - baseValue >  Math.PI )	nextValue	-= Math.PI*2;
		if( nextValue - baseValue < -Math.PI )	nextValue	+= Math.PI*2;
		return (1-timePercent) * baseValue + timePercent * nextValue;
	}

	
	var onUpdate	= function(position){
		character.headGroup.rotation.x	= position.headRotationX;
		character.headGroup.rotation.y	= position.headRotationY
		
		character.headGroup.position.x = position.headPositionX;
		character.headGroup.position.y = position.headPositionY;
	//	character.headGroup.position.z = 0;
		
	};
	var onCapture	= function(position){
		position.headRotationX	= character.headGroup.rotation.x;
		position.headRotationY	= character.headGroup.rotation.y;
	
		position.headPositionX  = character.headGroup.position.x;
		position.headPositionY  = character.headGroup.position.y;
		
	};
	var propTweens	= {
		headRotationX	: tweenAngle,
		headRotationY	: tweenAngle
	};
	
	headPositionX = 0.00;
	headPositionY = 0.00;
	
	
	// Setup 'still' animation
	animations.add('still'	, THREEx.createAnimation().pushKeyframe(0.5, {
		headRotationX	: 0,
		headRotationY	: 0
	}).propertyTweens(propTweens).onCapture(onCapture).onUpdate(onUpdate));

	// Setup 'no' animation
	animations.add('no'	, THREEx.createAnimation().pushKeyframe(0.5, {
		headRotationX	: 0,
		headRotationY	: +Math.PI/6
	}).pushKeyframe(0.5, {
		headRotationX	: 0,
		headRotationY	: -Math.PI/6
	}).propertyTweens(propTweens).onCapture(onCapture).onUpdate(onUpdate));

	// Setup 'yes' animation
	animations.add('yes'	, THREEx.createAnimation().pushKeyframe(0.4, {
		headRotationY	: 0,
		headRotationX	: +Math.PI/8
	}).pushKeyframe(0.4, {
		headRotationX	: -Math.PI/8,
		headRotationY	: 0
	}).propertyTweens(propTweens).onCapture(onCapture).onUpdate(onUpdate));
	
	
}

THREEx.TinygigantiumCharHeadAnimations.prototype	= Object.create(THREEx.Animations.prototype);
