import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import heroMainImage from "../../common/images/landing/hero-main-image.webp";
import heroCommunityImage from "../../common/images/landing/hero-community.webp"

const HomeHeroSection = () => {
  return (
    <>
     <section className="ps-[8vw] py-[12vh] 2xl:px-[18vw] flex flex-col md:flex-row gap-x-4 w-screen">
        <div className="flex flex-col pe-4 gap-y-8 w-full md:w-1/2">
          <div className="text-[3.6rem] leading-16 text-blue-900">
            Improve your coding skills by building realistic projects
          </div>
          <div className="text-xl text-gray-500 leading-8 tracking-wide font-normal">
            Our professionally designed challenges help you gain hands-on
            experience writing HTML, CSS, and JavaScript. We create the designs
            so you can focus on the code and see your skills skyrocket!
          </div>
          <div className="px-12 py-4 bg-rose-700 max-w-72 text-white flex items-center gap-x-2 rounded-4xl">
            LOG IN WITH GITHUB
            <FontAwesomeIcon className='text-2xl' icon={faGithub} />
          </div>
          <div className="flex gap-x-8 bg-white p-4 items-center">
            <div>
             <img className='h-auto min-w-48' src={heroCommunityImage} alt="" />
            </div>
            <div className="text-lg">
              Join
              <span className='text-blue-900 font-semibold'> 968,327 </span>
              developers building projects, reviewing code, and helping each
              other improve.
            </div>
          </div>
        </div>
        {/* Image Section: Right column on bigger screens */}
        <div className="w-full md:w-1/2 h-full">
          <img className='w-full h-full object-center object-cover scale-120' src={heroMainImage} alt="" />
        </div>
      </section>
    </>
    
  )
}

export default HomeHeroSection