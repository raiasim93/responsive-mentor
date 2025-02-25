import React from 'react'
import featuresData from '../../common/data/featuresData'
import CardFeatures from '../../common/cards/CardFeatures'
const FeaturesSection = () => {
  return (
    <>
       <section className="px-[8vw] 2xl:px-[18vw] py-[12vh] flex flex-col gap-y-[8rem]">
        {
            featuresData.map((item)=> (
                <CardFeatures key={item.id} id={item.id} emoji={item.emoji} title={item.title} description={item.description} image={item.image} />
            ))
        }
      </section>
    </>
  )
}

export default FeaturesSection