import image from "../../common/images/pagename/hiring/home-hiring .webp"
const HiringSection = () => {
  return (
    <>
     <section className="px-[8vw] 2xl:px-[18vw] pt-[8rem] bg-indigo-700 opacity-90 flex gap-x-6 text-white ">
        <div className="w-[55%] flex flex-col items-start gap-y-12 ">
            <div className="text-4xl tracking-wider">Are you looking to hire talented, passionate developers?</div>
            <div className="text-lg tracking-wide">Our Hiring Platform helps you connect with our diverse community of talented early-career developers. Stop wading through hundreds of resumes and get chatting to skilled developers in minutes.</div>
            <button className="bg-white text-indigo-700 py-4 px-12 text-lg font-semibold italic rounded-4xl"  > START HIRING DEVELOPERS </button>
        </div>
    
        <div className="w-[45%] ">
            <img className=" object-contain object-center" src={image} alt="" />
        </div>
      </section>
    </>
   
  )
}

export default HiringSection;