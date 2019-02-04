
public var oDLight: GameObject;

function Awake () { //initialize the variables back again
Score_Manager_1.flag_=false; //initialize points soundclip for card_1 & card_2 pair
Score_Manager_1.flag_2=false;
Score_Manager_1.flag_3=false;
Score_Manager_1.p = 0; //initialize main points to 0
Score_Manager_1.p1=0; //initialize points taken from card_1 & card_2 pair to 0
Score_Manager_1.p2=0;
Score_Manager_1.p3=0;
}

function Start () {

var texturesCollection: Object[] = Resources.LoadAll("Front_Face_cards");
var length_ = texturesCollection.length -2;
var range_1 = Random.Range(0,length_);

var bckgndTxtr_Collection: Object[] = Resources.LoadAll("Back_Face_cards");
var bckgndTxtr_length_ = bckgndTxtr_Collection.length;
var bckgndTxtr_range_ = Random.Range(0,bckgndTxtr_length_);

	GameObject.Find("card_1").renderer.material.mainTexture = bckgndTxtr_Collection[bckgndTxtr_range_] as Texture2D; //casting: from Object[] to Texture2D
	GameObject.Find("card_2").renderer.material.mainTexture = bckgndTxtr_Collection[bckgndTxtr_range_] as Texture2D;
	GameObject.Find("card_3").renderer.material.mainTexture = bckgndTxtr_Collection[bckgndTxtr_range_] as Texture2D;
	GameObject.Find("card_4").renderer.material.mainTexture = bckgndTxtr_Collection[bckgndTxtr_range_] as Texture2D;
	GameObject.Find("card_5").renderer.material.mainTexture = bckgndTxtr_Collection[bckgndTxtr_range_] as Texture2D;
	GameObject.Find("card_6").renderer.material.mainTexture = bckgndTxtr_Collection[bckgndTxtr_range_] as Texture2D;


if(GameObject.Find("front_card_1") && GameObject.Find("front_card_2")){
	GameObject.Find("front_card_1").renderer.material.mainTexture = texturesCollection[range_1] as Texture2D; //casting: from Object[] to Texture2D
	GameObject.Find("front_card_2").renderer.material.mainTexture = texturesCollection[range_1] as Texture2D;
}

if(GameObject.Find("front_card_3") && GameObject.Find("front_card_6") ){
	GameObject.Find("front_card_3").renderer.material.mainTexture = texturesCollection[range_1+1] as Texture2D;
	GameObject.Find("front_card_6").renderer.material.mainTexture = texturesCollection[range_1+1] as Texture2D;
}

if(GameObject.Find("front_card_4") && GameObject.Find("front_card_5") ){
	GameObject.Find("front_card_4").renderer.material.mainTexture = texturesCollection[range_1+2] as Texture2D;
	GameObject.Find("front_card_5").renderer.material.mainTexture = texturesCollection[range_1+2] as Texture2D;
}
}


public var capsuleTimer: GameObject;
public static var flagTxtr:boolean = false;
public static var flagTxtr_v:boolean = false;
public static var endTimer:int =0;
public var gameOverClip: AudioClip;
public var victoryClip: AudioClip;
public var hasPlayed:boolean=false;
public var disable_cTmr:boolean=false;

function Update(){

if(disable_cTmr == false){
	var cTmr= capsuleTimer.Find("capsuleTimer");
	cTmr.renderer.material.color = Color( 0/255.0, 205/255.0, 102/255.0, 0);
	var timer:int = 200;
	var timer_:int;
	var TimeSpeed = 14; 

	timer_ = timer - (Time.timeSinceLevelLoad * TimeSpeed); //count time from the start again whenever u change level
	cTmr.transform.localScale.y = Mathf.Clamp(timer_, 0, 200);
	endTimer = timer_;
	var light_ = oDLight.Find("Directional light_1");

	if(timer_ <= 100)
		cTmr.renderer.material.color = Color( 255/255.0, 165/255.0, 0/255.0, 0);
	if(timer_ <= 50)
		cTmr.renderer.material.color = Color( 238/255.0, 0/255.0, 0/255.0, 0);
	if(timer_ == 0){
		flagTxtr=true;
		if(hasPlayed == false){
			//Debug.Log("Game Over!");
			audio.PlayOneShot(gameOverClip); 
			hasPlayed = true;
		}	
		light_.light.enabled = false;
		Invoke("LoadGameOver",5);
	}
		
	if((!GameObject.Find("front_card_1") ) && (!GameObject.Find("front_card_2")) && (!GameObject.Find("front_card_3")) && (!GameObject.Find("front_card_6")) && (!GameObject.Find("front_card_4")) && (!GameObject.Find("front_card_5"))){
		timer_ = 1;
		cTmr.active = false;
		disable_cTmr = true;
		Invoke("LoadNextLvl",2);
		}
	}
	
}

function LoadNextLvl(){
	flagTxtr_v=false;
	Application.LoadLevel ("Level2_sample"); 
}

function LoadGameOver(){
		Application.LoadLevel ("High_Score_sample");  
}