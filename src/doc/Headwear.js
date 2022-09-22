const Headwear = () => {
    return (
        <section className="Headwear">
            <figure>
                <img src={process.env.PUBLIC_URL + '/images/MLB_authentic.jpg'}></img>
            </figure>
            <h2>MLB AUTHENTIC</h2>
            <p>MLB 공식 선수용 모자 어센틱 컬렉션
                <br />오리지널 핏과 로우 프로파일 두가지 실루엣으로 만나보세요
            </p>
            <a href="/">오리지널 핏</a><a href="/">로우 프로파일</a>
        </section>
    )
}
export default Headwear