//// Build the navbar
var navbar_items = [ [ 'bio_link', 'bio', 'Bio' ],
		[ 'techSkills_link', 'techSkills', 'Technical Skills' ],
		[ 'education_link', 'education', 'Education' ],
		[ 'activities_link', 'activities', 'Activities' ] ];

function builtNavBar() {
	var navBarHtml = "";
	navbar_items.forEach(function(item, index, array) {
		navBarHtml += "<li><a id=\"" + item[0] + "\" href=\"#" + item[1]
				+ "\" class=\"menu__link\">" + item[2] + "</a></li>";
	});
	document.getElementById('navbar__list').innerHTML = navBarHtml;
	
//lazy initialization for the page elements
	 bio = document.getElementById('bio');
	 techSkills = document.getElementById('techSkills');
	 education = document.getElementById('education');
	 activities = document.getElementById('activities');
	 bio_link = document.getElementById('bio_link');
	 techSkills_link = document.getElementById('techSkills_link');
	 education_link = document.getElementById('education_link');
	 activities_link = document.getElementById('activities_link');
}

// check if the section is in the viewport
// https://www.javascripttutorial.net/
function isInViewport(el) {
	const rect = el.getBoundingClientRect();
	return (rect.top >= 0
			&& rect.left >= 0
			&& rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)

	);
}
//

function reset_highlight_class() {
	// clear the active state class fot the navbar to only highlight the viewed
	bio_link.classList.remove("link_active");
	techSkills_link.classList.remove("link_active");
	education_link.classList.remove("link_active");
	activities_link.classList.remove("link_active");
	// clear the active state for the viewed section to only highlight the
	// viewed
	// your-active-class
	bio.classList.remove("your-active-class");
	techSkills.classList.remove("your-active-class");
	education.classList.remove("your-active-class");
	activities.classList.remove("your-active-class");

}
// add listener to highlight the active section and the navigation link
document.addEventListener('scroll', function() {

	if (isInViewport(bio)) {
		reset_highlight_class();
		bio_link.classList.add("link_active");
		bio.classList.add("your-active-class");
	}
	if (isInViewport(techSkills)) {
		reset_highlight_class();
		techSkills_link.classList.add("link_active");
		techSkills.classList.add("your-active-class");
	}
	if (isInViewport(education)) {
		reset_highlight_class();
		education_link.classList.add("link_active");
		education.classList.add("your-active-class");
	}
	if (isInViewport(activities)) {
		reset_highlight_class();
		activities_link.classList.add("link_active");
		activities.classList.add("your-active-class");
	}

}, {
	passive : true
});