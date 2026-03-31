import React from 'react'
import useYourStore from "../store";
import clsx from "clsx";

const Product = () => {
    const { color, scale, setColor, setScale } = useYourStore();
    return (
        <section id="product-viewer">
            <h2>Right now i don't even know </h2>
            <div className="controls">
                <p className="info">Name likhna h 3d model ka{color}</p>

                <div className="flex-center gap-5 mt-5">
                    <div className="color-control">
                        <div onClick={()=> setColor('#adb5bd')}
                             className={clsx('bg-neutral-300', color==='#adb5bd' && 'active')}
                        />

                        <div onClick={()=> setColor('#2e2c2e')}
                             className={clsx('bg-neutral-900', color==='#adb5bd' && 'active')}
                        />
                    </div>

                    <div className="size-control" >
                        <div><p>Smaller</p></div>
                        <div><p>Bigger</p></div>
                    </div>
                </div>
            </div>

            <p className="text-white text-4xl">Render Canvas</p>
        </section>
    )
}
export default Product
