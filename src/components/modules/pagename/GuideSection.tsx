import React from 'react';
import image from "../../common/images/pagename/guide/home-how-it-works-1.webp"

const GuideSection = () => {
  return (
  <>
  <section className="flex px-[8vw] 2xl:px-[18vw] py-[12vh]">
        <div className="w-1/2 flex flex-col justify-center gap-y-8">
          <div className="text-5xl ">How it works</div>

          <div className="text-items">
       
            <div className="flex flex-col">
              <div className="first-row bg-indigo-600 p-y-8vh rounded-b-4xl">
                <div className="item-number  bg-white w-12 h-12 rounded-full flex justify-center items-center text-indigo-600">1</div>
                <div className="item-subtitle">Choose your challenge</div>
              </div>
              <div className="second-row">
                <div className="item-description">
                  Browse our collection of professionally designed projects.
                  Pick one that suits the level you’re currently at.
                </div>
              </div>
            </div>
            {/* <div className="text-item">
              <div className="item-number">2</div>
              <div className="item-subtitle">Code the design</div>
            </div>
            <div className="text-item">
              <div className="item-number">3</div>
              <div className="item-subtitle">Submit your solution</div>
            </div>
            <div className="text-item">
              <div className="item-number">4</div>
              <div className="item-subtitle">Give others feedback</div>
            </div> */}
          </div>
        </div>
        <div className="w-1/2">
          <img src={image} alt="" />
        </div>
      </section>
  </>
  )
}

export default GuideSection