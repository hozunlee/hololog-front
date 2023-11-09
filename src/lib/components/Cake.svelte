<script>
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
	export let item
</script>

<section>
	<div class="문장-박스">
		<p class="문장">{item.item}</p>

		<div class="출처-박스">
			<p>{item.speaker ?? item.author}</p>
			<p>from</p>
			<p>{item.from}</p>
		</div>
	</div>
</section>

<style>
	section {
		text-align: center;
		line-height: 1.3;
		max-width: 54rem;
	}

	.문장-박스 {
		padding: 0.5rem;
	}

	.문장 {
		padding-bottom: 1em;
		font-size: 0.95rem;
		letter-spacing: -0.3px;
	}

	.출처-박스 {
		font-size: 0.7rem;
		color: #7b7b7b;
	}

	.출처-박스 > p {
		padding: 0;
	}
</style>
