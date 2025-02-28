import CardProSection from "../../common/cards/CardProSection";
import data from "../../common/data/prosectionData"
const ProSection = () => {
  return (
   <>
   <section className="px-[8vw] 2xl:px-[18vw] py-12 flex gap-x-6">
    {data.map((item)=> (
        <CardProSection
            key={item.id}
            heading={item.heading}
            description={item.description}
            icon={item.icon}
              />
    ))}
      </section>
   </>
  )
}

export default ProSection;