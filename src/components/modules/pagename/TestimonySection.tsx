import CardTestimony from "../../common/cards/CardTestimony";
import cardData from "../../common/data/testimonialData"
const TestimonySection = () => {
  return (
   <>
    <section className="flex gap-x-8 px-[8vw] 2xl:px-[18vw] py-[5rem] w-screen" >
    {cardData.map((item) => (
        <CardTestimony key={item.id} comment={item.comment} image={item.image} name={item.name} title={item.title} />
    ))}
      </section>
   </>
  )
}

export default TestimonySection;