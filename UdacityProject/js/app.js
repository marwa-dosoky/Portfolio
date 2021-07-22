//// Build the navbar
// list of sections
let sections;
// list of navigation links
let navbarLinks;

// build the navigation menu
function builtNavBar() {

	sections = document.querySelectorAll('section');
	let navBarHtml = "";
	sections.forEach(function(item, index, array) {
		navBarHtml += "<li><a id=\"" + item.dataset.nav.replace(/\s+/g, '')
				+ "Link" + "\"  onclick=\"gototSection("
				+ item.getAttribute('id') + ")\" " + " class=\"menu__link\">"
				+ item.dataset.nav + "</a></li>";
	});

	document.getElementById('navbar__list').innerHTML = navBarHtml;

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

// clear the active state for the viewed section to only highlight the
// viewed
function reset_highlight_class() {

	// clear the active state class fot the navbar to only highlight the viewed
	sections.forEach(function(item, index, array) {
		// clear the active state from the section
		item.classList.remove("your-active-class");
		// clear the active state from the navigation link

		let navbarLink = document.getElementById(item.dataset.nav.replace(
				/\s+/g, '')
				+ "Link");
		console.log(navbarLink);
		navbarLink.classList.remove("link_active");

	});

}
// add listener to highlight the active section and the navigation link
document.addEventListener('scroll', function() {

	sections.forEach(function(item, index, array) {

		if (isInViewport(item)) {
			reset_highlight_class();

			item.classList.add("your-active-class");

			let navbarLink = document.getElementById(item.dataset.nav.replace(
					/\s+/g, '')
					+ "Link");
			navbarLink.classList.add("link_active");
		}
	});

}, {
	passive : true
});

// go to section given the section ID
// NEED HELP :I am sending the sectionID, i don't know why all the section DOM
// element is sent
function gototSection(sectionID) {

	// let element = document.getElementById(sectionID);
	// element.scrollIntoView({behavior: "smooth", block: "end", inline:
	// "nearest"});

	sectionID.scrollIntoView({
		behavior : "smooth"
	});

}