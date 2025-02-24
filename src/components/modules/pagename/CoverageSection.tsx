import coverageData from "../../common/data/coverageData";
import CardCoverage from "../../common/cards/CardCoverage";
export const CoverageSection = () => {
  return (
   <>
    <section className="px-[8vw] 2xl:px-[18vw] py-[12vh] flex flex-col gap-y-[4rem] ">
          <div className="flex justify-center text-xl font-black">
            AS FEATURED ON ..
            </div>
          <div className="flex gap-x-8 justify-between items-center">
            { coverageData.map((item)=> (
                <CardCoverage image={item.image} />
            )) }    
          </div>
      
      </section>
   </>
  )
}
