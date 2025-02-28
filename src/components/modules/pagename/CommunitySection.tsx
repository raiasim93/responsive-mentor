import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import image1 from "../../common/images/pagename/community/home-avatar-alfie.webp";
import data from "../../common/data/communitySectionData";
import CardCommunity from "../../common/cards/CardCommunity";

const CommunitySection = () => {
    return (
        <section className="px-[8vw] 2xl:px-[18vw] py-20 bg-gray-100 flex flex-col gap-y-20 w-screen">
            <div className="flex justify-between  items-center w-full">
                <div className="text-[2.8rem]">A little ♥️ from our community</div>
                <div className="flex items-center gap-x-6">
                    <div className=" h-16 w-16 bg-gray-500  flex justify-center items-center rounded-full text-white">
                        <FaArrowLeft className=" text-2xl" />
                    </div>
                    <div className=" h-16 w-16 bg-indigo-700 flex justify-center items-center rounded-full text-white">
                        <FaArrowRight className="bg-indigo-700 text-2xl" />
                    </div>


                </div>
            </div>
            <div className="grid grid-cols-3 gap-x-6">
                {data.map((item, index)=> (
                    <CardCommunity 
                        key={index} 
                        comment={item.comment} 
                        image={item.image} 
                        userName={item.name}
                        userHandle={item.handle}/>
                ))}
              
            </div>
        </section>
    )
}

export default CommunitySection