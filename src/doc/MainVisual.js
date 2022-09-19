import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const SLIDE = [
    { id: 1, title: "MEMBERSHIP EVENT", content: "새로운 시즌, 뉴에라 멤버십의 특별 혜택과 함께!", sub: "이벤트 바로가기", link: "/" },
    { id: 2, title: "22FW NEW ARRIVALS", content: "뉴에라 22FW 신제품들을 멤버십 전용 특별 혜택과 만나보세요", sub: "22FW 바로가기", link: "/" },
    { id: 3, title: "COOPERSTOWN COTTON TWILL MTM", content: "팀 로고를 아플리케 기법으로 배치해 빈티지한 멋을 살린 MLB 쿠퍼스타운 코튼 트윌 맨투맨 컬렉션", sub: "컬렉션 바로가기", link: "/" },
    { id: 4, title: "RC 9FIFTY HERITAGE 1934", content: "1934년의 모자 그대로를 재현하여 만든 헤리티지 1934 9FIFTY 레트로 크라운 컬렉션", sub: "컬렉션 바로가기", link: "/" },
    { id: 5, title: "MIXED PATTERN COLLECTION", content: "패치워크 형태의 원단으로 만들어진 믹스트 패턴 언스트럭쳐 볼캡 컬렉션", sub: "컬렉션 바로가기", link: "/" },
]

const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
}
const MainVisual = () => {
    return (
        <section className="MainVisual">
            <Slider {...settings}>
                {
                    SLIDE.map((slide, idx) => {
                        return (
                            <div className="MainSlider">
                                <figure key={slide.id} className={'itm0' + slide.id}></figure>
                                <div className="inner_box">
                                    <h2>{slide.title}</h2>
                                    <p>{slide.content}</p>
                                    <a href="/">{slide.sub}</a>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </section>
    )
}

export default MainVisual;