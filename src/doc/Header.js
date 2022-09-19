const Header = () => {
    return (
        <header className="Header">
            <div className="container">
                <h1>
                    <img src="/images/top_logo.jpg"></img>
                </h1>
                <ul className="main_menu">
                    <li><a href="/">MEN</a></li>
                    <li><a href="/">WOMEN</a></li>
                    <li><a href="/">KIDS</a></li>
                    <li><a href="/">GOLF</a></li>
                    <li><a href="/">BLACK LABEL</a></li>
                </ul>
                <div className="login_menu">
                    <ul>
                        <li><a href="">로그인</a></li>
                        <li><a href="">회원가입</a></li>
                        <li><a href="">장바구니</a></li>
                        <li><a href="">마이페이지</a></li>
                        <li><a href="">매장안내</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Header;