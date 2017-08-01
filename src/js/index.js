// ###

// GET https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=cb

// ###

let data = null;

function getChannels() {
	const cacheBusterNum = 999999;
	const head = document.querySelector(`head`);

	const requestBase = `https://wind-bow.gomix.me/twitch-api`;
	const requestType = `/streams`;
	const requestUser = [`/freecodecamp`, `/ESL_SC2`, `/OgamingSC2`, `/cretetion`, `/storbeck`, `/habathcx`, `/RobotCaleb`, `/noobs2ninjas`];
	const requestId = `requestId=${Math.floor(Math.random() * cacheBusterNum).toString()}`; // 'cache-buster'
	const requestCallback = `&callback=setChannels`;

	requestUser.forEach((item, index)=> {
		const apiScript = document.createElement(`script-${index}`);

		apiScript.source = `${requestBase}${requestType}${requestUser}?${requestId}${requestCallback}`;

		head.appendChild(apiScript);
	});
}

function setChannels(payload) {
	data = payload;
}
