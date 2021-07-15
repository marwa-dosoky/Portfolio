//// Build the navbar
var navbar_items = [ [ 'bio_link', 'bio' ],
		[ 'techSkills_link', 'techSkills' ], [ 'education_link', 'education' ],
		[ 'activities_link', 'activities' ] ];

// check if the section is in the viewport
// https://www.javascripttutorial.net/
function isInViewport(el) {
	const rect = el.getBoundingClientRect();
	return (rect.top >= 0
			&& rect.left >= 0
			&& rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)

	);
}

const bio = document.getElementById('bio');
const techSkills = document.getElementById('techSkills');
const education = document.getElementById('education');
const activities = document.getElementById('activities');
const bio_link = document.getElementById('bio_link');
const techSkills_link = document.getElementById('techSkills_link');
const education_link = document.getElementById('education_link');
const activities_link = document.getElementById('activities_link');

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