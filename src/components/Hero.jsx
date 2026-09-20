import {useEffect} from "react";

function Hero() {
    useEffect(() => {
        const video = document.querySelector('#hero-video video');
        if (video) video.playbackRate = 2;
    }, []);

    return (
        <section id="hero-video">
            <div>
                <h1>MacBook Pro</h1>
                <img src="/title.png" alt="MacBook title"/>

                <video src="/videos/hero.mp4" autoPlay muted playsInline/>

                <button>Buy</button>

                <p>From MK 2,769,295 or MK230,341/mo for 12 months</p>
            </div>
        </section>
    )
}

export default Hero
