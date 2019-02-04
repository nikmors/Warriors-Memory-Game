public var card_6: GameObject;
card_6 = GameObject.Find("card_6");

public var flipSound : AudioClip;
public static var points: int; 

public static var flag:boolean=false;
public var hasPlayed:boolean=false;
public static var flipedCard:boolean=false;

public var sparks : ParticleEmitter;

function Start(){ 
    flag = false;
    flipedCard = false;
}

function OnMouseDown () {
	Rotation(transform, Vector3.forward * 180.0, 0.5);
	flipedCard = true;
	Invoke("CheckCards",1);
	if(hasPlayed == false){
		audio.PlayOneShot(flipSound);
		hasPlayed = true;
	}
	hasPlayed = false;
}


function CheckCards(){
	if((flipedCard == true) && (Flip_card_3.flipedCard == true)){
		Instantiate(sparks, transform.position, transform.rotation);
		flag=true;
		Destroy(card_6);
	}
	else if(flipedCard == true){
		Rotation(transform, Vector3.back * 180.0, 0.5);
		flipedCard=false;
	}
}

function Rotation (thisTransform : Transform, degrees : Vector3, time : float) {
	var startRotation = thisTransform.rotation;
	var endRotation = thisTransform.rotation * Quaternion.Euler(degrees);
	var rate = 1.0/time;
	var t = 0.0;
	while (t < 1.0) {
		t += Time.deltaTime * rate;
		thisTransform.rotation = Quaternion.Slerp(startRotation, endRotation, t);
		yield;
	}
}