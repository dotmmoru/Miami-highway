// -----JS CODE-----
//@input string[] evasionTween
//@input SceneObject jetEvasionTween
//@input SceneObject rocketTween

//@input int delayAlert
//@input int delayReplay

//@input SceneObject openMouthHint
//@input SceneObject gameOverHint

script.openMouthHint.enabled = false;
script.gameOverHint.enabled = false;

var isAlert = false;

function Start()
{
	script.openMouthHint.enabled = true;
	isAlert = true;
	delay_Alert.reset(script.delayAlert);
}

var delay_Alert = script.createEvent("DelayedCallbackEvent");
delay_Alert.bind(function(eventData)
{	
	if(isAlert === true)
	{
		global.tweenManager.startTween(script.rocketTween,"fire", function(){GameOver();});
	}
	else 
	{
		ReplayLoop();
	}
});

var delay_Replay = script.createEvent("DelayedCallbackEvent");
delay_Replay.bind(function(eventData)
{	
	Start();
});

function  ReplayLoop() {
	var _rnd = global.getRandomInt(script.delayReplay);
	_rnd += 3;
	delay_Replay.reset(_rnd);
}

function GameOver()
{

	script.openMouthHint.enabled = false;
	script.gameOverHint.enabled = true;
}

var event = script.createEvent("MouthOpenedEvent");
event.faceIndex = 0;
event.bind(function (eventData)
{
	if(isAlert === true)
	{
		var _i = global.getRandomInt(script.evasionTween.length);
		global.tweenManager.startTween(script.jetEvasionTween, script.evasionTween[_i]);
		global.tweenManager.startTween(script.rocketTween,"run");
		isAlert = false;
		script.openMouthHint.enabled = false;
		ReplayLoop();
	}
});


ReplayLoop();