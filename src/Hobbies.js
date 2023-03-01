var React = require('react');
//You need this npm package to do createReactClass
var Hobbies = require('create-react-class');

    module.exports=Hobbies({
            render:function(){
               return(
<ul class="tilesWrap">
	<li>
		{/* <h2>Creative Writing</h2> */}
		<h3>Writing</h3>
		<p>
			I enjoy journaling my thoughts and also do creative writing. I have written many short stories and currently am writing a book.
		</p>
		<button onClick={(e) => {
      e.preventDefault();
      window.location.href='https://makrine.github.io/Writing';
      }}>Read more</button>
	</li>
	<li>
		{/* <h2>02</h2> */}
		<h3>Electronics</h3>
		<p>
			I have loved tinkering with electronics ever since I was little. Nowadays I enjoy making different projects with Arduino microcontroller. Hence I combine programming with it. 
		</p>
		<button>Read more</button>
	</li>
	<li>
		{/* <h2>03</h2> */}
		<h3>Cycling</h3>
		<p>
			It's just really good to ride a bike and cycle with no destination.
		</p>
		<button>Read more</button>
	</li>
</ul>
                 
                );
            }
        })
