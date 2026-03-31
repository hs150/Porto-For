import {useRef} from 'react'
import {PresentationControls} from "@react-three/drei";
import MacModel16 from "../Macbook-16.jsx";
import MacModel14 from "../Macbook-14.jsx";

const ANIMATION_DURATION =1;
const OFFSET_DISTANCE = 5;
const fadeMeshes =(group, opacity) =>{
    if(!group) return;

    group.traverse((child)=>{
        if(child.isMesh) {
            child.material.transparent = true;
            gsap.to(child.material ,{opacity , duration : ANIMATION_DURATION})
        }
    })
}

export const ModelSwitcher = ({scale ,isMobile }) => {git
    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();


    const controlConfig = {
        snap: true,
        speed:1,
        zoom:1,
        azimuth: [-Infinity, Infinity]
    }
    const showlargeMacbook = scale === 0.08 || scale===0.05;
    return (
        <>
            <PresentationControls{...controlConfig}>
                <group ref={largeMacbookRef}>
                    <MacModel16 scale = { isMobile ? 0.05 : 0.08 }/>
                </group>
            </PresentationControls>
            {/*<PresentationControls>*/}
            {/*     <group ref={smallMacbookRef}>*/}
            {/*         <MacModel14 scale = { isMobile ? 0.03 : 0.06 }/>*/}
            {/*    </group>*/}
            {/*</PresentationControls>*/}
        </>

    )
}
 export default ModelSwitcher;