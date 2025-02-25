const CardFeatures = ({id, image, emoji, title, description}) => {
  return (
    <>
        <div className={`flex gap-x-[4rem] ${ parseInt(id) % 2 === 0 ? "flex-row-reverse": ""}`}>
            <img className='w-1/2 h-[640px] object-center object-cover' src= {image} alt="" />
            <div className="w-1/2 flex flex-col justify-center gap-y-12 "> 
                <div className='bg-gray-100 p-8 rounded-full inline-flex items-center justify-center w-fit h-fit text-4xl aspect-square'> {emoji} </div>
                <div className="text-[3rem]">{title}</div>
                <div className="text-xl tracking-wide font-light text-gray-500">
                {description}
                </div>
            </div>
        </div>
    </>
  )
}

export default CardFeatures