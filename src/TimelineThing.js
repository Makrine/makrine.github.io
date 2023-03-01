var React = require('react');
//You need this npm package to do createReactClass
var Timeline = require('create-react-class');

    module.exports=Timeline({
            render:function(){
               return(

                 <div class="container">
                 <div class="rightbox">
                   <div class="rb-container">
                     <ul class="rb">
                       <li class="rb-item" ng-repeat="itembx">
                         <div class="timestamp">
                          2019 - 2023<br/> 
                         </div>
                         <div class="item-title">Bachelor of Computer Science at International Black Sea University</div>
               
                       </li>
                       <li class="rb-item" ng-repeat="itembx">
                         <div class="timestamp">
                          2018 - 2019<br/> 
                         </div>
                         <div class="item-title">Studied Business Administration for one year at Ivane Javakhishvili Tbilisi State University</div>
               
                       </li>
               
                       <li class="rb-item" ng-repeat="itembx">
                         <div class="timestamp">
                          2016 - 2018<br/>
                         </div>
                         <div class="item-title">Went to #12 Tbilisi Public School</div>
               
                       </li>

                       <li class="rb-item" ng-repeat="itembx">
                         <div class="timestamp">
                          2006 - 2016<br/>
                         </div>
                         <div class="item-title">Went to #2 Terjola Public School</div>
               
                       </li>
               
                     </ul>
               
                   </div>
                 </div>
               </div>);
            }
        })
