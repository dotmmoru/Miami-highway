// -----JS CODE-----
//@input SceneObject[] landscapes
//@input SceneObject[] landscapesTween


function Start() 
{
	var _i = global.getRandomInt(script.landscapes.length);

	for (var i = script.landscapes.length - 1; i >= 0; i--) {
		script.landscapes[i].enabled = false;
		script.landscapesTween[i].enabled = false;
	}

	script.landscapes[_i].enabled = true;
	script.landscapesTween[_i].enabled = true;
}

Start();