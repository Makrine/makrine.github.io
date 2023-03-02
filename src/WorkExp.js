var React = require('react');
//You need this npm package to do createReactClass
var WorkExperience = require('create-react-class');

    module.exports=WorkExperience({
            render:function(){
               return(

                 <div class="container">

                   <div class="rb-container">
                     <ul class="rb">
                       <li class="rb-item" ng-repeat="itembx">
                         <div class="timestamp">
                          February, 2022 - January, 2023<br/> 
                         </div>
                         <div class="item-title">Unity Game Developer at TenseGames</div>

                         <div class="work-desc">
                          <t>Developed and implemented gameplay mechanics, UI systems, and other features using C#. 
                            I was a main programmer for <a target="_blank" href="https://store.steampowered.com/app/2011960/Sunny_Grove/">Sunny Grove</a>. 
                          </t>
                          </div>
               
                       </li>
                       <li class="rb-item" ng-repeat="itembx">
                         <div class="timestamp">
                          October, 2021 - February, 2022<br/> 
                         </div>
                         <div class="item-title">Private Math teacher</div>
                         <div class="work-desc">
                          <t>I was teaching Math to a schoolchild</t>
                          </div>
               
                       </li>
                       <li class="rb-item" ng-repeat="itembx">
                         <div class="timestamp">
                          December, 2021<br/> 
                         </div>
                         <div class="item-title">Volunteer at Tbilisi Zoo</div>
                         <div class="work-desc">
                          <t>I was a voluntary assitant zookeeper</t>
                          </div>
               
                       </li>
               
                     </ul>
               
                   </div>
                 </div>
               );
            }
        })
