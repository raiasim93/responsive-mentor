import {FaGithub } from "react-icons/fa6";
const JoinSection = () => {
    return (
        <section className="join-bg-image px-[8vw] 2xl:px-[18vw] py-[8rem] flex flex-col gap-y-12 justify-center 
                            items-center w-screen text-center bg-cover bg-left bg-no-repeat
                        "

        >
            {/* Content stays above the overlay */}
            <div className="w-[60%] text-indigo-700 text-5xl font-medium">
                Join 969,316 people building portfolio-worthy projects
            </div>
            <div className=" w-[60%] text-gray-500 text-lg tracking-wider font-normal">
                Our highly supportive, positive community is here to help you improve
                your skills. We all try to help each other out wherever possible. We’d
                love to welcome you to our community!
            </div>
            <button className=" bg-rose-600 text-white py-4 px-12 rounded-4xl max-w-[320px] italic flex items-center gap-x-6 font-semibold">
                LOG IN WITH GITHUB 
                <FaGithub className="w-6 h-6" />
            </button>
        </section>
    );
};

export default JoinSection;
