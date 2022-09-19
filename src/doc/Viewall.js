const VEIWMENU = [
    { id: 1, title: "모자", content: "HEADWEAR" },
    { id: 1, title: "의류", content: "APPAREL" },
    { id: 1, title: "액세서리", content: "ACCESSORIES" },
    { id: 1, title: "키즈", content: "KIDS" },
    { id: 1, title: "골프", content: "GOLF" }
]

const Viewall = () => {
    return (
        <section className="Viewall">
            <div className="container">
                <figure>
                    <img src="/images/Viewall_Headwear.jpg"></img>
                </figure>
                <figure>
                    <img src="/images/Viewall_Apparel.jpg"></img>
                </figure>
                <figure>
                    <img src="/images/Viewall_Accessories.jpg"></img>
                </figure>
                <figure>
                    <img src="/images/Viewall_Kids.jpg"></img>
                </figure>
                <figure>
                    <img src="/images/Viewall_Golf.jpg"></img>
                </figure>
            </div>
        </section>
    )
}
export default Viewall;