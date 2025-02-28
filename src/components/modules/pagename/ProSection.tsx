import CardProSection from "../../common/cards/CardProSection";
import data from "../../common/data/prosectionData"
const ProSection = () => {
  return (
   <>
   <section className="px-[8vw] 2xl:px-[18vw] py-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
    {data.map((item)=> (
        <CardProSection
            key={item.id}
            heading={item.heading}
            description={item.description}
            icon={item.icon}
              />
    ))}
    <div className="col-span-2 flex justify-center p-16">
        <button className="bg-rose-600 font-semibold backdrop-opacity-90 italic text-white rounded-4xl py-4 px-12 uppercase tracking-wider "> Learn About Pro</button>
    </div>
      </section>
   </>
  )
}

export default ProSection;