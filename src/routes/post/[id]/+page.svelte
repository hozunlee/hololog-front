<script>
	import SvelteMarkdown from 'svelte-markdown'
	export let data
	console.log('data :>> ', data)

	console.log('data.post.attribute.content :>> ')
	const source = data.post.attributes.content
</script>

<section>
	<h1>detail</h1>
	<div class="container">
		<SvelteMarkdown {source} />
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		margin-top: 3rem;
	}

	section > .container {
		max-width: 700px;
	}
</style>
