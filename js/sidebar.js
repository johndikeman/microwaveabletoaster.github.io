var element = document.getElementById('side');
var nodeList = document.getElementsByClassName('sideNav');
var sideLinkList = document.getElementsByClassName('sideLink');


var out = false;

var height = window.innerHeight;
var width = window.innerWidth;


for (var i = 1, length = nodeList.length; i < length; i+=2)
{
	nodeList[i].style.backgroundColor = '#33CCCC';
	sideLinkList[i-1].style.color = '#75FFFF';
} 

document.getElementById('button').onclick = function()
{
    if(out)
    {
    	element.style.webkitAnimationName = 'comein';
    	element.style.animationName = 'comein';
    	element.style.width = 0;
    	element.style.height= height;

    	for (var i = 0, length = nodeList.length; i < length; i++) 
    	{
     		nodeList[i].style.width = 0;
     		nodeList[i].style.fontSize = 0;
     		nodeList[i].style.webkitAnimationName = 'comein';
    		nodeList[i].style.animationName = 'comein';

     	}
        out = false;
    }

    else
    {
    	element.style.webkitAnimationName = 'comeout';
       	element.style.animationName = 'comeout';

    	element.style.width = 300;
    	element.style.height= height;

    	for (var i = 0, length = nodeList.length; i < length; i++) 
    	{
     		nodeList[i].style.width = 300;
     		nodeList[i].style.fontSize = 30;
     		nodeList[i].style.webkitAnimationName = 'comeout';
            nodeList[i].style.animationName = 'comeout';

     	}
    	out = true;
    }
};
