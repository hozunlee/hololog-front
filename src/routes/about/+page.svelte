<script>
	import { page } from '$app/stores'

	const BrandStory = `Hololog에서는 개발자가 새로운 기술을 탐색하고 활용하는 방식을 혁신하려는 임무를 시작했습니다. 아직 개발되지 않은 솔루션과 그것을 열망하는 마음 사이의 간극을 메우기 위해, 우리 웹사이트는 개발 지식의 잠재력을 최대한 활용하고자 하는 모든 사람들에게 편안한 피난처가 되어줍니다.

Hololog는 사용자 친화적인 인터페이스와 자연스러운 성장 경험을 약속함으로써, 경계를 없애고 혁신을 받아들이려는 같은 생각의 커뮤니티를 조성합니다. 우리는 필요한 도구와 리소스를 제공하여, 개발자들이 무한한 가능성에 도전할 수 있도록 지원합니다. 이런 식으로 우리는 무한한 가능성이 현실화되는 미래를 만들 수 있다고 확신합니다.

우리와 함께 발견과 변화의 흥미진진한 여정에 참여하세요.`
	const 핵심가치 = [
		{
			가치: '효율성',
			내용: '우리는 기술 및 개발 지식을 효율적이고 탐색하기 쉽게 구성하는 것을 우선시합니다. 개발자가 새로운 아이디어와 솔루션을 찾아내는 데 필요한 정보를 명확하게 제공합니다.',
			icon: 'beach_access'
		},
		{
			가치: '포괄성',
			내용: 'hololog는 모든 배경과 기술 수준의 개발자에게 열려있다는 믿음으로, 모든 사람이 접근할 수 있는 플랫폼을 만들고 있습니다. 경험 수준에 관계없이 모든 사람들을 환영하며, 지속적인 학습과 성장을 지원하는 환경을 제공합니다.',
			icon: 'accessibility_new'
		},
		{
			가치: '혁신',
			내용: '개발자가 고정된 생각에서 벗어나 창의적으로 생각할 수 있도록 지지합니다. 쓸모있는 기술을 바탕으로, 새로운 아이디어에 대한 모험적인 탐구를 함께합니다.',
			icon: 'all_inclusive'
		}
	]
</script>

<!-- meta -->
<svelte:head>
	<title>About - hololog | 비교할 수 없는 tech 기록</title>
	<meta name="title" content="About - hololog | holo <비교할 수 없는 tech 기록> log" />
	<meta
		name="description"
		content="소개페이지 | holo <비교할 수 없는 tech 기록> log | hololog는 개발자에게 필요한 도구와 리소스를 제공함으로써 무한한 가능성이 현실이 되는 미래를 만들 수 있다고 믿습니다."
	/>

	<meta property="og:title" content="About | hololog" />
	<meta property="og:description" content="holo <비교할 수 없는 tech 기록> log" />
	<meta
		property="og:image"
		content="https://mjxiofcpqnyfnskvoxut.supabase.co/storage/v1/object/public/strapi-uploads/ogimg01_1693478745390.jpeg"
	/>
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Hololog | 비교할 수 없는 Tech 기록" />
</svelte:head>

<section>
	<div class="img-box">
		<img
			src="https://mjxiofcpqnyfnskvoxut.supabase.co/storage/v1/object/public/strapi-uploads/ogimg01_1693478745390.jpeg"
			alt=""
		/>
	</div>
	<div class="container">
		<figure>
			<h1>Hojun Lee</h1>
			<div><span class="형광펜"> Role </span> | Software Engineer</div>
			<div><span class="형광펜"> Email </span> | ho2yahh@gmail.com</div>
			<div class="">
				<span class="형광펜"> GitHub </span> |
				<a href="https://github.com/hozunlee">https://github.com/hozunlee</a>
			</div>
			<div class="last-info">
				<span class="형광펜"> Portfolio </span> |
				<a href="https://climbing-scraper-c52.notion.site/b79cb7a85b3040fe96036795ed2e1cec"
					>my tech story by notion</a
				>
			</div>
		</figure>

		<figure>
			<div>
				<h1>holo + log란</h1>
				<p>
					(holo) 비교할 수 없는 기술<br />(log) 읽고 싶은 기록<br /> 그리고 쓸모있는 비즈니스를 만드는
					일에 대한 글을 쓰는 블로그입니다.
				</p>
				<p>영업, 기획자, 콘텐츠 마케터를 거쳐 풀스택 개발자의 길을 걸어가고 있습니다.</p>
			</div>

			<div class="story">
				<h2>Brand Story</h2>
				<div>
					<p>
						hololog에서는 개발자가 새로운 기술을 탐색하고 활용하는 방식을 혁신하려는 임무를
						시작했습니다.
					</p>
					<p>
						아직 개발되지 않은 해결책과 그것을 열망하는 마음 사이의 간극을 메우기 위해, hololog는
						개발 지식의 잠재력을 최대한 활용하고자 하는 모든 사람들에게 도움이 되길 원합니다.
					</p>
				</div>
			</div>
			<div class="핵심가치">
				{#each 핵심가치 as item}
					<!-- content here -->
					<div class="value-box">
						<h3><span class="material-icons info-icon"> {item.icon} </span>{item.가치}</h3>
						<p>{item.내용}</p>
					</div>
				{/each}
			</div>
		</figure>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/* flex: 0.6; */
		margin-top: 4rem;
		/* padding: 10px; */
	}

	section > .container {
		max-width: 900px;
	}

	figure {
		width: 100%;
		padding: 0 1rem;
		margin: 2rem auto 0px;
		margin-bottom: 3rem;
	}

	figure .형광펜 {
		background-color: blue;
		color: white;
		padding: 0 2px;
	}

	figure > .last-info {
		padding-bottom: 2rem;
		border-bottom: solid 1px var(--color-theme-1);
	}

	.img-box {
		max-width: 1400px;
	}
	h1 {
		font-size: 1.9rem;
	}

	h2 {
		font-size: 1.5rem;
		font-weight: 500;
		margin-top: 2.8rem;
	}
	p {
		margin-top: 0.9rem;
		line-height: 1.5em;
		font-size: 1.1rem;
		letter-spacing: 0;
		color: rgb(98, 97, 97);
	}

	.info-icon {
		color: var(--color-theme-1);
		font-size: 1rem;
		cursor: pointer;
	}

	@media (min-width: 56rem) {
		h1 {
			font-size: 3rem;
		}
		h2 {
			font-size: 2.3rem;
			font-weight: 600;
		}
		p {
			font-size: 1.2rem;
		}

		.핵심가치 {
			display: flex;
			column-gap: 3rem;
			justify-content: space-between;
			padding: 4rem 0;
		}

		.핵심가치 > .value-box {
			padding: 10px;
			flex: 1;
		}

		.핵심가치 p {
			font-size: 1rem;
		}
	}
</style>
