import { fetchAPI } from '$lib/components/utills/api'

const WITTY_DESCRIPTIONS = {
	'server-side': '클라이언트가 모르는 서버 뒷방의 은밀한 이야기',
	'스벨트 꼭 붙들어매': '리액트 말고 스벨트, 한 번 맛보면 못 헤어 나옵니다',
	'socket.IO를 통한 채팅 기능 구현기': '새로고침 없이 말싸움하는 법을 가르쳐 드립니다',
	'back-end': '프론트가 던진 똥을 묵묵히 치우는 백엔드 도 닦기',
	개발일상: '월화수목금금금, 커피를 코드로 바꾸는 연금술사의 일기',
	'front-end': '1픽셀의 오차도 용납 못 하는 피곤한 완벽주의자들의 놀이터',
	'수익화 블로그 개발자시점': '클릭 한 번에 10원, 개발로 부자 되기는 포기했습니다',
	'SEO : Bot에게 싸바싸바하기': '구글신님, 제 글 좀 앞 페이지에 띄워주세요 (제발)',
	'CSS를 잘해야 천재 개발자': '센터 정렬 하나에 3시간, CSS는 예술입니다',
	'장기렌트 견적 비교 서비스': '차 살 돈 없어서 만들었습니다, 장기렌트 꿀팁 대방출',
	'디그다 프로젝틉니다.': '두더지처럼 파고들다 보면 언젠가 빛이 보이겠죠?',
	'AWS EC2': '잠깐 켰는데 청구서가 왜 이래? AWS 생존 전략',
	'역대카 풀스택 서비스 개발기': '기획부터 배포까지, 1인 개발자의 영혼 가출기',
	'폐쇄망 개발자로 살아남기': '구글 없는 코딩, 그것은 마치 눈 감고 걷는 것'
}

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const res = await fetchAPI(`/books`, {
		fields: ['title', 'desc', 'updatedAt'],
		sort: ['updatedAt:desc']
	})

	// API에서 가져온 데이터에 위트 있는 한줄평 결합
	const seriesWithWittyDesc = res.posts.map((item) => {
		const title = item.attributes.title.trim()
		return {
			...item,
			attributes: {
				...item.attributes,
				// 기존 설명이 없거나 '준비 중'일 경우 위트 있는 설명으로 대체
				desc: WITTY_DESCRIPTIONS[title] || item.attributes.desc
			}
		}
	})

	return {
		series: seriesWithWittyDesc
	}
}
