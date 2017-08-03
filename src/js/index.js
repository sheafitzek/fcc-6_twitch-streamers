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
		const requestId = `requestId=${Math.floor(Math.random() * cacheBusterNum).toString()}`; // 'cache-buster'
		const requestCallback = `&callback=app.setChannels`;

		app.streamers.forEach((item, index)=> {
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

		const streams = document.querySelector(`.streams`);
		const streamItem = document.createElement(`div`);
		const streamer = `${app.streamers[app.data.length - 1].slice(1)}`;

		streamItem.className = `streamItem`;
		streamItem.innerHTML = `
			<div class="subStream">
				<h1>${streamer}</h1>
			</div>
		`;

		streams.appendChild(streamItem);
	},

	streamers: [
		`/cretetion`,
		`/ESL_SC2`,
		`/freecodecamp`,
		`/habathcx`,
		`/noobs2ninjas`,
		`/OgamingSC2`,
		`/RobotCaleb`,
		`/storbeck`,
	],
};

window.onload = app.onloadFunction;
