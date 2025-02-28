
const CardCommunity = ({ comment, image, userName, userHandle }) => {
    return (
        <div className="flex flex-col bg-white px-6 py-10 rounded-2xl gap-y-20 h-full">
            <div className="text-gray-500 tracking-wider text-lg flex-grow">
                {comment}
            </div>
            <div className="flex gap-x-6 items-end">

                <img className="rounded-full" src={image} alt="" />

                <div className="flex flex-col gap-y-1">
                    <div className="text-indigo-700 font-bold text-lg">{userName}</div>
                    <div className="text-gray-500 font-light">{userHandle}</div>
                </div>
            </div>
        </div>
    )
}

export default CardCommunity;