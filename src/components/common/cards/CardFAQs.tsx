import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {FaPlus } from "react-icons/fa6";
const CardFAQs = ({title}) => {
  return (
    <div className="p-6 w-full flex justify-between items-center bg-white border-1 border-gray-200 rounded-2xl">
    <div className="text-xl font-medium"> {title}  </div>
    <FaPlus className="text-2xl" />
</div>
  )
}

export default CardFAQs