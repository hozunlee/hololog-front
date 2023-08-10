<script>
	import Button from '$lib/components/Button/Button.svelte'
	let text = ''
	let count = 0
</script>

<Button onclick={() => (text = 'hello')}>글자테스트</Button>

<div data-testid="text-test">{text}</div>

<Button onclick={() => (count += 1)}>카운트테스트</Button>

<div data-testid="text-test2">{count}</div>
