/*
    original code by http://stackoverflow.com/users/305530/russelluresti
    modified by twitter.com/drdikeman
*/


// search the CSSOM for a specific -webkit-keyframe rule
function findKeyframesRule(rule)
    {
        // gather all stylesheets into an array
        var ss = document.styleSheets;
        
        // loop through the stylesheets
        for (var i = 0; i < ss.length; ++i) {
            
            // loop through all the rules
            for (var j = 0; j < ss[i].cssRules.length; ++j) {
                
                // find the -webkit-keyframe rule whose name matches our passed over parameter and return that rule
                if (ss[i].cssRules[j].type == window.CSSRule.WEBKIT_KEYFRAMES_RULE && ss[i].cssRules[j].name == rule)
                    return ss[i].cssRules[j];
            }
        }
        
        // rule not found
        return null;
    }

// remove old keyframes and add new ones
function changeAnimation(anim,rules)
{
    // find our -webkit-keyframe rule
    var keyframes = findKeyframesRule(anim);
    console.log(rules);
    
    for(var a=0;a<rules.length;a++)
    {
        keyframes.insertRule(rules[a]);
        console.log(a);
    }
    console.log(keyframes)
}