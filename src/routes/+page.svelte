<script>
	import { page } from '$app/stores'
	import Cake from '$lib/components/Cake.svelte'
	import CardList from '$lib/components/CardList.svelte'
	import { onMount } from 'svelte'

	export let data
	$: ({ cakes, postInfo } = data.props)
	$: arrayLength = cakes.length

	/**
	 *
	 * @param arrayLength {number}
	 */
	const 랜덤숫자 = (arrayLength) => {
		return Math.floor(Math.random() * arrayLength)
	}

	const 메인문장만들기 = () => {
		메인문장 = cakes[랜덤숫자(arrayLength)]
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
		메인문장 = cakes[랜덤숫자(cakes.length)]
	})

	//
</script>

<svelte:head>
	<title>hololog | 비교 할 수 없는 Tech 기록</title>
	<meta name="title" content="hololog | 비교 할 수 없는 Tech 기록" />
	<meta
		name="description"
		content="holo <비교할 수 없는 tech 기록> log | Hololog는 아직 개발되지 않은 솔루션과 열망하는 마음 사이의 격차를 자극합니다. 흥미진진한 발견과 변화의 여정에 함께하세요."
	/>

	<meta property="og:title" content="Hololog" />
	<meta property="og:description" content="holo <비교할 수 없는 tech 기록> log" />
	<meta
		property="og:image"
		content="https://mjxiofcpqnyfnskvoxut.supabase.co/storage/v1/object/public/strapi-uploads/ogimg01_1693478745390.jpeg"
	/>
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Hololog : 비교할 수 없는 Tech 기록" />
	<meta name="naver-site-verification" content="ab0c76700bc2d1b64f9fc8d624acc59336e69ec1" />
</svelte:head>

{#if 메인문장}
	<div class="메인문장박스">
		<button on:click={메인문장만들기}>🧀 new 🧀</button>

		<Cake item={메인문장} />
		<!-- <div class="button">
				<Button>new</Button>
			</div> -->
	</div>
{/if}

<div class="구분선 div-transparent" />

<section>
	<!-- <span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span> -->
	<CardList {postInfo} />
</section>

<div class="mx-auto my-0 text-yellow-400">
	<h1>hololog : 비교할 수 없는 Tech 기록</h1>
</div>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		margin-bottom: 5rem;
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
