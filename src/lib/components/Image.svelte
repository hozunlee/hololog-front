<script>
	export let src = ''
</script>

<div class="post-thumbnail">
	<img {src} alt="커버이미지" />
</div>

<style>
	.post-thumbnail {
		width: 100%;
		position: relative;
		overflow: hidden;
		padding-top: 50%; /* 직사각형 비율에 따라 변경하세요 (예: 가로 2: 세로 1 = 50%) */
		padding-left: 2rem;
		padding-right: 2rem;
		/* max-height: 386px;
		width: 100%;
		position: relative;
		box-sizing: border-box;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center; */
	}

	.post-thumbnail > img {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		object-fit: cover;
		/* border: none;
		padding: 1rem;
		object-fit: cover;
		height: 100%;
		inset: 0px; */
	}

	img:hover {
		/* transform: scale(1.05); */
		/* transition: transform 0.2s; */
	}
</style>
