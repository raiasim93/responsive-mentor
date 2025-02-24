

const CardCoverage = ({image}) => {
  return (
    <>
        <div className="bg-white flex-1 flex justify-center py-8 rounded-2xl border border-gray-400">
              <img className="h-12 object-contain" src={image} alt="" />
            </div>
    </>
  )
}

export default CardCoverage;