const Header = () => {
    return (
        <header className="Header">
            <div className="container">
                <h1>
                    <img src={process.env.PUBLIC_URL + "/images/top_logo.jpg"} alt="/"></img>
                </h1>
                <ul className="main_menu">
                    <li>
                        <a href="/">MEN</a>
                        <div className="sub_menu">
                            <ul className="sub_main">
                                <li><a href="/">MEMBERSHOP</a></li>
                                <li><a href="/">한화 이글스</a></li>
                                <li><a href="/">신상품</a></li>
                                <li><a href="/">인기상품</a></li>
                                <li><a href="/">2022 컬렉션</a></li>
                                <li><a href="/">콜라보레이션</a></li>
                            </ul>
                            <ul className="sub_content">
                                <li>
                                    <a href="/">모자</a>
                                    <ul>
                                        <li><a href="/">모자 전체</a></li>
                                        <li><a href="/">볼캡</a></li>
                                        <li><a href="/">K프레임 볼캡</a></li>
                                        <li><a href="/">일자챙</a></li>
                                        <li><a href="/">버킷 햇</a></li>
                                        <li><a href="/">제트 캡 (캠퍼)</a></li>
                                        <li><a href="/">시즈널 캡</a></li>
                                        <li><a href="/">비니</a></li>
                                        <li><a href="/">기타</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/">의류</a>
                                    <ul>
                                        <li><a href="/">의류 전체</a></li>
                                        <li><a href="/">티셔츠</a></li>
                                        <li><a href="/">팬츠</a></li>
                                        <li><a href="/">후드 / 맨투맨</a></li>
                                        <li><a href="/">아우터</a></li>
                                        <li><a href="/">기타</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/">액세서리</a>
                                    <ul>
                                        <li><a href="/">액세서리 전체</a></li>
                                        <li><a href="/">백팩</a></li>
                                        <li><a href="/">기타 가방</a></li>
                                        <li><a href="/">캡 관련 용품</a></li>
                                        <li><a href="/">양말</a></li>
                                        <li><a href="/">기타</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/">스포츠</a>
                                    <ul>
                                        <li><a href="/">스포츠 전체</a></li>
                                        <li><a href="/">MLB 공식</a></li>
                                        <li><a href="/">MLB LIFE STYLE</a></li>
                                        <li><a href="/">NBA</a></li>
                                        <li><a href="/">NFL</a></li>
                                        <li><a href="/">FOOTBALL</a></li>
                                        <li><a href="/">기타</a></li>
                                    </ul>
                                </li>
                                <li><a href="/">온라인 온리</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="/">WOMEN</a></li>
                    <li><a href="/">KIDS</a></li>
                    <li><a href="/">GOLF</a></li>
                    <li><a href="/">BLACK LABEL</a></li>
                </ul>
                <div className="login_menu">
                    <ul>
                        <li><a href="/">로그인</a></li>
                        <li><a href="/">회원가입</a></li>
                        <li><a href="/">장바구니</a></li>
                        <li><a href="/">마이페이지</a></li>
                        <li><a href="/">매장안내</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Header;