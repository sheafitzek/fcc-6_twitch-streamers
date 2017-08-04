// ###

// GET https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=cb

// ###

const app = {
	data: [],

	getChannels() {
		const cacheBusterNum = 999999;
		const head = document.querySelector(`head`);

		const requestBase = `https://wind-bow.gomix.me/twitch-api`;
		const requestType = `/streams`;
		const requestStreams = [
			`/cretetion`,
			`/ESL_SC2`,
			`/freecodecamp`,
			`/habathcx`,
			`/noobs2ninjas`,
			`/OgamingSC2`,
			`/RobotCaleb`,
			`/storbeck`,
		];
		const requestId = `requestId=${Math.floor(Math.random() * cacheBusterNum).toString()}`; // 'cache-buster'
		const requestCallback = `&callback=app.setChannels`;

		requestStreams.forEach((item)=> {
			const apiScript = document.createElement(`script`);

			apiScript.src = `${requestBase}${requestType}${item}?${requestId}${requestCallback}`;

			head.appendChild(apiScript);
		});
	},

	onloadFunction() {
		app.getChannels();
	},

	refresh() {
		
	},

	showAll() {
		
	},

	showOffline() {
		
	},

	showOnline() {
		
	},

	setChannels(payload) {
		app.data.push(payload);

		const currentData = app.data[app.data.length - 1];
		const streams = document.querySelector(`.streams`);
		const streamItem = document.createElement(`div`);
		const streamer = `${currentData._links.self
			.split(`/`).pop()}`;

		streamItem.className = `streamItem`;

		if (payload.stream === null) {
			streamItem.innerHTML = `
				<div class="subStream">
					<img src="../media/images/${streamer}.jpeg"/>
					<h1>${streamer}</h1>
					<h3>inactive</h3>
				</div>
			`;
		} else {
			const game = currentData.stream.game;
			const content = currentData.stream.channel.status;

			streamItem.innerHTML = `
				<div class="subStream">
					<h1>${streamer}</h1>
					<h3>${game}</h3>
					<h4>${content}</h4>
				</div>
			`;
		}

		streams.appendChild(streamItem);

		app.data = [];
	},
};

window.onload = app.onloadFunction;
