import React from 'react';
import image from "../../common/images/pagename/guide/home-how-it-works-1.webp"
import { CardGuide } from '../../common/cards/CardGuide';
import data from "../../common/data/guideData";

const GuideSection = () => {
    return (
        <>
            <section className="flex px-[8vw] 2xl:px-[18vw] py-[8vh] bg-teal-50 mx-6 gap-x-6">
            
                <div className="w-1/2 flex flex-col justify-center gap-y-6">
                    <div className="text-5xl ">How it works</div>
                   {/* Card to be put here */}
                  {data.map((item) =>(
                    <CardGuide key={item.id} number={item.id} title={item.title} description={item.description} active={item.active} />
                  ))}
                    
                </div>
                <div className="w-1/2 flex items-center">
                    <img className='scale-125 overflow-hidden object-fill' src={image} alt="" />
                </div>
            </section>
        </>
    )
}

export default GuideSection