import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const GOODS = [
    { id: '1', title: '아웃도어 오리지네이터스 CPO 재킷 블랙', price: '189,000원' },
    { id: '2', title: '아웃도어 오리지네이터스 CPO 재킷 카키', price: '189,000원' },
    { id: '3', title: '아웃도어 오리지네이터스 CPO 재킷 블루', price: '189,000원' },
    { id: '4', title: 'NE-TECH 퍼포먼스 3레이어 재킷 블랙', price: '279,000원' },
    { id: '5', title: 'NE-TECH 퍼포먼스 3레이어 재킷 스톤 화이트', price: '279,000원' },
    { id: '6', title: 'MLB 소프트 보아 뉴욕 양키스 후드 집업 네이비', price: '179,000원' },
    { id: '7', title: 'MLB 소프트 보아 LA 다저스 후드 집업 오프 화이트', price: '179,000원' },
    { id: '8', title: 'MLB 소프트 보아 샌프란시스코 자이언츠 후드 집업 카키', price: '179,000원' },
    { id: '9', title: 'MLB 쿠퍼스타운 스크립트 뉴욕 양키스 후드 집업 네이비', price: '159,000원' },
    { id: '10', title: 'MLB 쿠퍼스타운 스크립트 브루클린 다저스 후드 집업 헤더 그레이', price: '159,000원' },
    { id: '11', title: 'NE 모헤어 스웨터 블랙', price: '129,000원' },
    { id: '12', title: 'NE 모헤어 스웨터 카키', price: '129,000원' }
]

const Goods = () => {
    const [IDX, setIDX] = useState();
    useEffect(() => {
        setIDX(0)
    }, []);
    const goodsSlide = useRef(null);
    const settings = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 7000,
        centerMode: true,
        centerPadding: '450px',
        slidesToShow: 4,
        pauseOnHover: true,
    }

    return (
        <section className='Goods'>
            <h2>NEW ARRIVAL</h2>
            <Slider {...settings} ref={goodsSlide}>
                {
                    GOODS.map((goods, idx) => {
                        return (
                            <div className='GoodsSlider'>
                                <figure key={goods.id} className={'goods0' + goods.id}></figure>
                                <h2>{goods.title}</h2>
                                <p>{goods.price}</p>
                            </div>
                        )
                    })
                }
            </Slider>
            <a href='/'>더보기</a>
        </section>
    )
}
export default Goods