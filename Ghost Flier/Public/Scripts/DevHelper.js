// -----JS CODE-----


global.sayHello = function(message)
{
        print(message);
}


global.UpdateSelectedIndexInList = function(index, listCount,isNext)
{
    if (isNext===true)
        index = index + 1 < listCount ? index + 1 : 0;
    else
        index = index - 1 >= 0 ? index - 1 : listCount - 1;

    return index;
}


global.Shuffle = function(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}


global.UpdateTweenState = function (enable_obj,enable_name,disable_obj,disable_name)
{
    global.tweenManager.stopTween( disable_obj, disable_name);
    global.tweenManager.startTween( enable_obj, enable_name);
}
global.UpdateTweenStateFunc = function (enable_obj,enable_name,disable_obj,disable_name, func)
{
    global.tweenManager.stopTween( disable_obj, disable_name);
    global.tweenManager.startTween( enable_obj, enable_name, func());
}



global.getRandomInt = function(max) {
  return Math.floor(Math.random() * max);
}

global.NotEqual = function(amount,num)
{
	return global.getRandomInt(amount) != num;
}
global.IsEqual = function(amount,num)
{
	return global.getRandomInt(amount) === num;
}