import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
const VideoImplementer = () => {
    const isTab = useMediaQuery({query:'(max-width: 1024px)'});

    useGSAP(() =>{
        if(!isTab){
            const timeline = gsap.timeline({
                scrollTrigger:{
                    trigger: '#showcase',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                }
            });

            timeline.to('mask img',{
                transform:'scale(1.1)'
            }).to('content', {opacity: 1,y:0,ease:'power1.in'});
        }
    },[isTab])
    return (
        <section id="showcase">
            <div className="media">
                <video src="/videos/game.mp4" loop muted  playsInline/>
                <div className="mask">
                    <img src="/mask-logo.svg" alt="Logo of chip"/>
                </div>
            </div>
            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">
                        <h2> OH yeah it's a chip</h2>
                        <div className="space-y-5 mt-7 pe-10">
                            <p>
                                Introducing {" "}
                                <span className="text-white">
                                    The new chips Uncle chips
                                </span>
                                .M4 powering
                            </p>
                            <p>
                                A brand new display engine
                            </p>
                            <p className="text-primary"> wanna learn more</p>
                        </div>
                    </div>
                </div>

               <div className="max-w-3xs space-y-14">
                   <div className="space-y-2">
                       <p>Up to</p>
                       <h3>Fast toh h</h3>
                       <p>Kuch render hoga CPU</p>
                   </div>
                   <div className="space-y-2">
                       <p>Up to</p>
                       <h3>Jyada hi fast h</h3>
                       <p>Ab bas nhi hoga laptop se</p>
                   </div>
               </div>
            </div>
        </section>
    )
}
export default VideoImplementer
