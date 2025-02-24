import { FaQuoteLeft } from "react-icons/fa6";
const CardTestimony = ({comment, image, name, title }) => {
  return (
   <>
   <div className="bg-white p-10 w-1/2 flex flex-col gap-y-8 items-center">
         
         <FaQuoteLeft className="text-gray-300 text-7xl" />
       
       <div className="text-[1.2rem] tracking-wider">
        {comment}
       </div>
       
         <img className="rounded-full" src={image} alt="" />

         <div className="flex flex-col items-center gap-y-2">
           <div className="text-blue-900 font-bold text-xl">{name}</div>
           <div className="text-gray font-light">{title}</div>
         </div>
      
     </div>
   </>
  )
}

export default CardTestimony