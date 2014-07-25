function goToAbout()
{
	$('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
	return false;
}
function goToEngineeringExperience()
{
	$('html, body').animate({
        scrollTop: $("#engineering-experience").offset().top
    }, 1000);
    return false;

}
function goToMusic()
{
	$('html, body').animate({
        scrollTop: $("#music").offset().top
    }, 1000);
    return false;
}