import {useEffect, useRef} from "react";

function Hero() {
    const videoRef = useRef();

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 2;
    }, []);

    return (
        <section id="hero">
            <div>
                <h1>MackBook Pro</h1>
                <img src="/title.png" alt="MacBook title"/>

                <video src="/videos/hero.mp4" autoPlay muted playsInline/>

                <button>Buy</button>

                <p>From MK 2,769,295 or MK230,341/mo for 12 months</p>
            </div>
        </section>
    )
}

export default Hero
