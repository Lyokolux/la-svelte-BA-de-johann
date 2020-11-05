<script>
	import { EMOJIS } from "./emoji";
	export let startBADateInMs;
	export let endBADate;

	const getRandomEmoji = () =>
		EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
	let randomEmoji = getRandomEmoji();

	let startBaDate = new Date(startBADateInMs);
	let now = Date.now();
	$: elapsedSeconds = ((now - startBADateInMs) / 1000).toFixed(0);
	$: elapsedDays = (elapsedSeconds / 86400).toFixed(0);

	setInterval(() => {
		now = Date.now();

		// Pcik a different emoji
		let auxEmoji = getRandomEmoji();
		while (auxEmoji === randomEmoji) {
			auxEmoji = getRandomEmoji();
		}
		randomEmoji = auxEmoji;
	}, 1000);
</script>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		width: 90%;
		font-family: Luciole;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 1.5em;
		font-weight: 100;
	}

	.big {
		font-size: 2.5em;
	}

	.date {
		font-size: 1.5em;
		font-weight: 500;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}

		h1 {
			font-size: 3em;
			margin-bottom: 0.5em;
		}

		.big {
			font-size: 3em;
		}

		.date {
			font-size: 1.8em;
		}
	}
</style>

<main>
	<h1>
		📝 Johann started his thesis the<br />
		<span
			class="date">{startBaDate.toLocaleDateString(window.navigator.languages[0])}</span>
		!
	</h1>
	<p>
		<span class="date">{elapsedSeconds}</span>
		seconds have elapsed since the start !
	</p>
	<p>
		So he is toiling at it since
		<span class="date">{elapsedDays}</span>
		days.
		<br />
		So he has gotten an extra bonus time of
		<span class="date">{elapsedDays - 90}</span>
		days.
	</p>
	<p>As far as we know, he is still working on it 😱</p>
	<p class="big">{randomEmoji} Johann, you will make it ! {randomEmoji}</p>
</main>
