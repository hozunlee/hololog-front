import { describe, it, expect } from 'vitest'
import { fireEvent, render } from '@testing-library/svelte'
import BtnTest from './Button.test.svelte'

describe('Button component test', () => {
	const { getByRole, getByTestId } = render(BtnTest)

	it('button text change onclick event test', async () => {
		const button = getByRole('button', { name: '글자테스트' })
		const innerText = getByTestId('text-test')

		expect(button).toBeTruthy()
		await fireEvent.click(button)
		expect(innerText.innerHTML).toBe('hello')
	})

	it('button count+1 event test', async () => {
		const button = getByRole('button', { name: '카운트테스트' })
		const innerText = getByTestId('text-test2')

		// onClick 2회 진행
		await fireEvent.click(button)
		await fireEvent.click(button)

		expect(button).toBeTruthy()

		//2번 클릭된 이벤트가 2 올라갔는지 확인
		expect(innerText.innerHTML).toBe('2')
	})
})
