const Viewall = () => {
    return (
        <section className="Viewall">
            <div className="container">
                <figure>
                    <a href="/">
                        <img src={process.env.PUBLIC_URL + "/images/Viewall_headwear.jpg"} alt="/"></img>
                        <div className="figure_inner">
                            <strong>모자
                                <br />HEADWEAR
                            </strong>
                        </div>
                    </a>
                </figure>
                <figure>
                    <a href="/">
                        <img src={process.env.PUBLIC_URL + "/images/Viewall_Apparel.jpg"} alt="/"></img>
                        <div className="figure_inner">
                            <strong>의류
                                <br />APPAREL
                            </strong>
                        </div>
                    </a>
                </figure>
                <figure>
                    <a href="/">
                        <img src={process.env.PUBLIC_URL + "/images/Viewall_Accessories.jpg"} alt="/"></img>
                        <div className="figure_inner">
                            <strong>액세서리
                                <br />ACCESSORIES
                            </strong>
                        </div>
                    </a>
                </figure>
                <figure>
                    <a href="/">
                        <img src={process.env.PUBLIC_URL + "/images/Viewall_Kids.jpg"} alt="/"></img>
                        <div className="figure_inner">
                            <strong>키즈
                                <br />KIDS
                            </strong>
                        </div>
                    </a>
                </figure>
                <figure>
                    <a href="/">
                        <img src={process.env.PUBLIC_URL + "/images/Viewall_headwear.jpg"} alt="/"></img>
                        <div className="figure_inner">
                            <strong>골프
                                <br />GOLF
                            </strong>
                        </div>
                    </a>
                </figure>
            </div>
        </section>
    )
}
export default Viewall