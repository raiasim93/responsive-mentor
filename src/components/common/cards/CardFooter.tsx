const CardFooter = ({title, list}) => {
  return (
    <>
      <div className=" py-4 flex flex-col gap-y-4">
        <div className="uppercase text-lg font-semibold"> {title} </div>
        <div className="flex flex-col gap-y-2 text-gray-500">
          {list.map((item,index)=>(
            <div key={index}> {item} </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default CardFooter