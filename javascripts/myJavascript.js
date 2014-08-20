var scrollTime = 800;
function goToAbout()
{
	$('html, body').animate({
        scrollTop: $("#about").offset().top
    }, scrollTime);
	
}
function goToEngineeringExperience()
{
	$('html, body').animate({
        scrollTop: $("#engineering-experience").offset().top
    }, scrollTime);

}
function goToMusic()
{
	$('html, body').animate({
        scrollTop: $("#music").offset().top
    }, scrollTime);
   
}

function goToProjects()
{
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, scrollTime);
   
}

/*
window.addEventListener("onload", animation);
var animation = function onloadAnimation()
{
    $("#title").fadeIn(5400, function() {
        // Animation complete.
        $("#title").animate({'marginTop' : "-=20px"});    
    });    
}
*/
window.onload = function() {    
    //$("#title-and-contents").animate({'marginTop' : "-=10px"}).show("fade", {},  {duration:1200}).dequeue();
    $("#title").animate({'marginTop' : "-=20px"}); 
};

function highlightDiv(div){
    $("div").hover(function(){
        $(this).css("background": "blue");
    });
}