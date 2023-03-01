var React = require('react');
//You need this npm package to do createReactClass
var Languages = require('create-react-class');

    module.exports=Languages({
            render:function(){
               return(
<div class="lang-container">
<p class="lang-text">English</p>
<div class="progress">
    
    <div class="progress-bar" id="eng"></div>
  </div>

  <p class="lang-text">Georgian</p>
<div class="progress">

<div class="progress-bar" id="geo"></div>
</div></div>
               );
            }
        })
