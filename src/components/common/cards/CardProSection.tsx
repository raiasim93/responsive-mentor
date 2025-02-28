const CardProSection = ({heading, description, icon}) => {
  return (
    <div className=" w-1/2 flex flex-col gap-y-8 items-center text-center bg-white px-6 py-16 rounded-2xl">
        {icon}
    <div className="text-3xl"> {heading} </div>
    <div className="text-gray-500 text-xl tracking-wider font-normal">
     {description}
    </div>
  </div>
  )
}

export default CardProSection;