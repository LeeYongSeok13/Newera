import { useEffect } from "react"

function BottomBanner() {

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 500) {
            document.querySelector('.Bottombanner').classList.add('on');
        } else {
            document.querySelector('.Bottombanner').classList.remove('on');
        }
    };

    const scrollTop = () => {
        function location() {
            document.querySelector('.MainVisual');
        }
        window.scrollTo({ top: location, behavior: 'smooth' });
    }
    return (
        <section className="Bottombanner" onClick={scrollTop}>
            <i className="xi-angle-up">Back To Top</i>
        </section >
    )
}
export default BottomBanner