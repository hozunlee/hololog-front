<script>
	import { Input } from '$lib/components/ui/input/index.js'
	import { Label } from '$lib/components/ui/label/index.js'
	import { Textarea } from '$lib/components/ui/textarea/index.js'
	import { Button } from '$lib/components/ui/button/index.js'
	export let data

	console.log('data :>> ', data)
</script>

<section class="container my-10 mx-5">
	<h1>케이크 추가</h1>
	<h2>새 문장 추가</h2>
	<form action="?/addCake" method="post" class="p-1 gap-3">
		<div class="grid w-full gap-1.5">
			<Label for="item">문장</Label>
			<Textarea name="item" placeholder="나를 생각하게 했던 문장을 적어라" id="item" />
		</div>
		<div>
			<Label for="from">출처</Label>
			<Input name="from" id="from" />
		</div>
		<div>
			<Label for="author">저자</Label>
			<Input name="author" id="author" />
		</div>
		<div>
			<Label for="speaker">화자</Label>
			<Input name="speaker" id="speaker" />
		</div>
		<Button type="submit" class="my-5">보내기</Button>
	</form>

	<h2>문장 목록</h2>
</section>
