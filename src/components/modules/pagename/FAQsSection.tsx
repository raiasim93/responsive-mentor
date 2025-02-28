import CardFAQs from "../../common/cards/CardFAQs";
import data from "../../common/data/cardsFAQSdata";
const FAQsSection = () => {
  return (
    <>
    <section className="px-[8vw] 2xl:px-[18vw] py-20 flex flex-col gap-y-16 items-center w-screen">
        <div className="text-5xl"> FAQs </div>
        <div className="flex flex-col gap-y-4 w-[60%] ">
           {data.map((item, index)=>(
            <CardFAQs key={item.id} title={item.title}  />
           ))}
         
        </div>
    </section>
    </>
  )
}

export default FAQsSection