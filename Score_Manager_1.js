public  static var p:int=0;
public  static var p1:int=0;
public  static var p2:int=0;
public  static var p3:int=0;

public var pointsClip: AudioClip;

public static var flag_:boolean=false;
public static var flag_2:boolean=false;
public static var flag_3:boolean=false;

public static var scoreFlag:boolean = false;
public static var points_:int;

function Update () {

	if(Flip_card_1.flag == true || Flip_card_2.flag==true){
		p1 = 10;
		if(flag_ == false){
			audio.PlayOneShot(pointsClip);
			flag_ = true;
		}
	}
	
	if(Flip_card_3.flag == true || Flip_card_6.flag==true){
		p2 = 10;
		if(flag_2 == false){
			audio.PlayOneShot(pointsClip);
			flag_2 = true;
		}
	}
	if(Flip_card_4.flag == true || Flip_card_5.flag==true){
		p3 = 10;
		if(flag_3 == false){
			audio.PlayOneShot(pointsClip);
			flag_3 = true;
		}
	}
	
	p = p1+p2+p3;
	guiText.text = ""+ p;
	scoreFlag = true;
	points_ = p;
	
}