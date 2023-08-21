<script>
	import Cake from '$lib/components/Cake.svelte'
	import Card from '$lib/components/Card.svelte'
	import { onMount } from 'svelte'

	export let data
	let arrayLength = data.cakes.length

	$: console.log('data.posts :>> ', data.posts)

	/**
	 *
	 * @param arrayLength {number}
	 */
	const 랜덤숫자 = (arrayLength) => {
		return Math.floor(Math.random() * arrayLength)
	}

	const 메인문장만들기 = () => {
		메인문장 = data.cakes[랜덤숫자(arrayLength)]
	}
	/**
	 *
	 * @typedef {Object} cakeItem
	 * @property {number} id
	 * @property {string} item 문장 컨텐츠
	 * @property {string} author 작가
	 * @property {string} from 책이름
	 * @property {string} [speaker] 책 안에서 말한 사람이 다를 경우
	 */

	/** @type {cakeItem} */
	let 메인문장

	onMount(() => {
		// content here
		메인문장 = data.cakes[랜덤숫자(data.cakes.length)]
	})

	//
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

{#if 메인문장}
	<div class="메인문장박스">
		<button on:click={메인문장만들기}>new 🧀</button>
		<Cake item={메인문장} />
		<!-- <div class="button">
				<Button>new</Button>
			</div> -->
	</div>
{/if}
<div class="구분선 div-transparent" />
<section>
	<h1>
		<!-- <span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span> -->

		{#each data.posts as post}
			<!-- content here -->
			<Card card={post} />
		{/each}
	</h1>
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

	.구분선 {
		position: relative;
		margin-top: 10px;
		height: 1px;
	}

	.div-transparent:before {
		content: '';
		position: absolute;
		top: 0;
		left: 5%;
		right: 5%;
		width: 90%;
		height: 1px;
		background-image: linear-gradient(to right, transparent, rgb(48, 49, 51), transparent);
	}
</style>
