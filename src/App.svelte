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
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		width: 80%;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	.big {
		font-size: 2.9em;
	}

	.date {
		font-size: 1.1em;
		font-weight: 500;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main>
	<h1>
		📝 Johann started his thesis (BA) the<br />
		<span class="date">{startBaDate.toLocaleDateString()}</span>!
	</h1>
	<p>
		<span class="date">{elapsedSeconds}</span>
		seconds have elapsed since the start of his BA
	</p>
	<p>
		So he is toiling at it since
		<span class="date">{elapsedDays}</span>
		days
	</p>
	<p>
		So he has gotten an extra bonus time of
		<span class="date">{elapsedDays - 90}</span>
		days
	</p>
	<p>As far as we know, he is still working on it 😱</p>
	<p class="big">{randomEmoji} Joahnn, you will make it ! {randomEmoji}</p>
</main>
