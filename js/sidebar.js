var element = document.getElementById('side');

element.addEventListener('webkitAnimationEnd', function()
{
    console.log('first');
    this.style.webkitAnimationName = '';
}, false);

document.getElementById('button').onclick = function()
{
    console.log('clicked');
    element.style.webkitAnimationName = 'comeout';
};

// console.log(document.getElementById('side'));
// console.log(document.getElementById("side"));
