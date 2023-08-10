<script>
	import Cake from '$lib/components/Cake.svelte'


	export let data
	let arrayLength = data.cakes.length


	/**
	 * 
	 * @param arrayLength {number}
	 */
	const 랜덤숫자 = (arrayLength) => {
		return Math.floor(Math.random() * arrayLength);
	}

	const 메인문장만들기 = () => {
		메인문장 = data.cakes[랜덤숫자(arrayLength)]
	}

	let 메인문장 = data.cakes[랜덤숫자(arrayLength)]
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="메인문장박스">
	<button on:click={메인문장만들기} >new 🧀</button>
	<Cake item={메인문장} />
	<!-- <div class="button">
		<Button>new</Button>
	</div> -->
</div>
<section>
	<h1>
		<!-- <span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span> -->

		Dev Hololog
	</h1>



	<div>프리텐다드</div>
	적용된삘?
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.메인문장박스 {
		margin-top: 5rem;
		text-align: center;
	line-height: 1.3;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	}

	.메인문장박스 > button {
		border: none;
color: gray;
font-size: small;
cursor: pointer;
	}

/* .button {
		display: inline-block;
		width: 300px;
		margin: 40px 0 50px 0;
	} */
</style>
