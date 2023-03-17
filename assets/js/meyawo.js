/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll

$(document).ready(function(){

    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

emailjs.init("user_zDwr9wlrxHhUuUmH3Hfa6");


const myBlogCard = (imgSource, title, authorLink, author, datePosted, paragraph, readMoreLink) => `
<div class='blog-card'>
<div class='blog-card-header'>
<img src='${imgSource}' class='blog-card-img' alt='No Image To Show'></div>
                <div class='blog-card-body'>
                    <h5 class='blog-card-title'>${title}</h6>
                    <p class='blog-card-caption'>
                        <a href='${authorLink}' target="_blank">By: ${author}</a>Date: ${datePosted}
                    </p>
                    <p>${paragraph}</p>
                    <a href='${readMoreLink}' class='blog-card-link' target="_blank">Read more <i class='ti-angle-double-right'></i></a>
                </div>
            </div>`;


$.getJSON('https://www.googleapis.com/blogger/v3/blogs/199044637366665784/posts?key=AIzaSyCj3R0Naj5OTnogetCIHGTLxsYVQyj2ZI8', function(data) {
    
    const myBlogListContainer = document.getElementById("blogsListContainer");

    items = data["items"]

    const postsNum = items.length;

    if(postsNum > 5) postsNum = 5;

    for(i=0; i < postsNum; i++)
    {
        const authorName = items[i]["author"]["displayName"];
        const authorLink = items[i]["author"]["url"];
         const title = items[i]["title"];
         const paragraph = items[i]["content"];
         const postLink = items[i]["url"];

        const date = items[i]["published"].substring(0, 10);
         var m,
        urls = [], 
        str = paragraph,
        rex = /<img[^>]+src="?([^"\s]+)"?\s*\/>/g;

        while ( m = rex.exec( str ) ) {
            urls.push( m[1] );
        }


        const image = urls[0];


        let doc = new DOMParser().parseFromString(paragraph, 'text/html')
        var par = doc.querySelector('p').textContent

        myBlogListContainer.innerHTML += myBlogCard(image, title, authorLink, authorName, date, par, postLink);
     }

});

window.onload = function() {
    document.getElementById('application-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_portfolio', 'my_template', this)
            .then(function() {
                alert("Messege sent successfully! A copy will be sent to you as well!");
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}