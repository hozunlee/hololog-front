<script>
	/** @type {'button' | 'submit' | 'reset'} */
	export let type = 'button'

	// button의 비활성여부, default false
	export let disabled = false

	// button의 style (invert color) 다양하게 필요 시 리팩토링
	// export let variant: 'text' | 'contained' | 'outlined' = 'contained'
	export let outlined = false

	// on:Click 함수
	/** @type {((event: MouseEvent) => void) | undefined} */
	export let onclick = undefined

	/** @param {MouseEvent} event Ripple animation을 위한 함수 */
	const createRipple = (event) => {
		// 이벤트 버튼에 접근
		const button = /** @type {HTMLButtonElement} */ (event.currentTarget)

		// 클릭 시 작동할 원형 span 생성
		const circle = document.createElement('span')
		const diameter = Math.max(button.clientWidth, button.clientHeight)
		const radius = diameter / 2

		// define the remaining properties we need for ripple

		circle.style.width = circle.style.height = `${diameter}px`

		// 기존 offset은 부모요소가 relative position이면 그 엘리먼트에 좌표가 국한 됨.
		// circle.style.left = `${event.pageX - (button.offsetLeft + radius)}px`
		// circle.style.top = `${event.pageY - (button.offsetTop + radius)}px`

		//뷰포트 기준으로 button 좌표 계산
		//https://velog.io/@ssket/coordinate좌표-구하기
		circle.style.left = `${event.clientX - (button.getBoundingClientRect().left + radius)}px`
		circle.style.top = `${event.clientY - (button.getBoundingClientRect().top + radius)}px`
		circle.classList.add('ripple')

		// clean-up, 다음 ripple이 작동하기 전에 실행
		const ripple = button.getElementsByClassName('ripple')[0]
		if (ripple) ripple.remove()

		// 버튼에 ripple span 추가
		button.appendChild(circle)
	}
</script>

<button {type} {disabled} on:click={onclick} on:click={createRipple} class:outlined><slot /></button
>

<style>
	button {
		background-color: var(--color-theme-1);
		color: var(--bg-color);
		border: var(--primary-color) solid 0.5px;
		border-radius: 6px;
		cursor: pointer;
		line-height: 30px;
		overflow: hidden;
		position: relative;
		width: 100%;
	}

	button.outlined {
		background-color: var(--bg-color);
		color: var(--primary-color);
	}

	/* :global()로 선언해주어야 작동한다 */
	/* Scoped global CSS */
	button > :global(.ripple) {
		position: absolute;
		border-radius: 50%;
		transform: scale(0);
		animation: ripple 0.75s linear;
		background-color: var(--bg-color);
		/* filter: blur(2px); */
		opacity: 50%;
	}

	button.outlined > :global(.ripple) {
		background-color: var(--primary-color);
	}

	@keyframes ripple {
		to {
			transform: scale(4);
			opacity: 0;
		}
	}

	button:disabled {
		background-color: gray;
		border: gray solid 0.5px;
		cursor: default;
	}
</style>
