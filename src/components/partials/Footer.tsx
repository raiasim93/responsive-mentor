import logo from "./images/logo-desktop.svg";
import { FaDiscord, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa6";
import footerData from "../common/data/footerData";
import CardFooter from "../common/cards/CardFooter";
const Footer = () => {
    return (
        <>
            <footer className="flex flex-col  px-[4vw] 2xl:px-[18vw] pt-16 w-screen">
                {/* footer title bar */}
                <div className="flex w-full justify-between items-center">
                    <img className="" src={logo} alt="" />
                    <div className="flex gap-x-4 items-center">
                        <FaDiscord className="text-teal-600 text-2xl" />
                        <FaTwitter className="text-teal-600 text-2xl" />
                        <FaLinkedin className="text-teal-600 text-2xl" />
                        <FaFacebook className="text-teal-600 text-2xl" />
                    </div>
                </div>
               {/* footer items/list */}
                <div className="grid grid-cols-6 gap-4 border-b-2 py-8 border-gray-200">
                    <div className="col-span-2 flex flex-col gap-y-4 py-4">
                        <div className="text-3xl text-indigo-700"> Stay up to date </div>
                        <div className="text-lg"> with new challenges, featured solutions, selected articles, and our latest news </div>
                        <div className=" flex w-full gap-x-2">
                            <input className="flex-[2] border-[1px] border-gray-300 p-2 rounded-" type="text" placeholder="email@example.com" />
                            <button className="flex-[1] bg-rose-600 px-4 text-white rounded-4xl italic uppercase font-semibold"> Subscribe </button>
                        </div>
                    </div>

                    {footerData.map((item,index)=> (
                        <CardFooter key={index} title={item.title} list={item.list} />
                    ))}

                </div>
                {/* footer copyright */}
                <div className="flex items-center w-full justify-between py-4  text-gray-500">
                    <div>
                        © Frontend Mentor 2019 - 2025
                    </div>
                    <div className="flex gap-x-4">
                            <div> Terms </div>
                            <div> Cookie Policy </div>
                            <div> Privacy Policy </div>
                            <div> License </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;