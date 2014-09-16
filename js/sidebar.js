var element = document.getElementById('side');
var midPanel = document.getElementById('center');
var nodeList = document.getElementsByClassName('sideNav');
var sideLinkList = document.getElementsByClassName('sideLink');


var out = false;

var height = window.innerHeight;
var width = window.innerWidth;
var hFourth = height/4;
var wFourth = width/4;

midPanel.style.height = hFourth*2;
midPanel.style.width = wFourth*2;

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
    	element.style.width = 0;
    	element.style.height= height;

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
    	element.style.height= height;

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
