import {useEffect, useRef} from "react";

const Hero = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if(video) {
            video.onloadmetadata =() =>{
                video.playbackRate = 2;
            };
        }
    }, []);

    return (
        <section id="hero">
            <div>
                <h1>Independent Variables</h1>
                <img src="/title.png" alt="Macabaook"/>
            </div>

            <video
                ref={videoRef}
                src="/videos/hero.mp4"
                autoPlay
                muted
                playsInline
                loop
            />

            <button>Just don't click</button>
            <p>Don't look at it this is just for show</p>
        </section>
    )
}
export default Hero
