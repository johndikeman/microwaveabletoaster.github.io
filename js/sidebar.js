var element = document.getElementById('side');
var nodeList = document.getElementsByClassName('sideNav');
var out = false;


document.getElementById('button').onclick = function()
{
    if(out)
    {
    	element.style.webkitAnimationName = 'comein';
    	element.style.width = 0;
    	for (var i = 0, length = nodeList.length; i < length; i++) 
    	{
     		nodeList[i].style.width = 0;
     		nodeList[i].style.fontSize = 0;
     		nodeList[i].style.webkitAnimationName = 'comein';
     	}
        out = false;
    }

    else
    {
    	element.style.webkitAnimationName = 'comeout';
    	element.style.width = 300;
    	for (var i = 0, length = nodeList.length; i < length; i++) 
    	{
     		nodeList[i].style.width = 300;
     		nodeList[i].style.fontSize = 30;
     		nodeList[i].style.webkitAnimationName = 'comeout';
     	}
    	out = true;
    }
};

// console.log(document.getElementById('side'));
// console.log(document.getElementById("side"));
