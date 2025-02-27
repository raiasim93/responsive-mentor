import React from 'react'

export const CardGuide = ({title, description, active, number}) => {
  return (
    <>
        <div className={`flex flex-col  p-6 rounded-2xl
                            ${active ? "bg-indigo-700 opacity-85 text-white gap-y-4 ": "bg-white dark"}
                        `}>
                            <div className="flex  gap-x-8 items-center">
                                <div className= {` w-10 h-10 rounded-full flex justify-center items-center text-md
                                ${active? "bg-white text-indigo-700"  : "bg-cyan-600 text-white"}
                                `} >
                                    {number}
                                    </div>
                                <div className="self-center text-2xl"> {title} </div>
                            </div>
                            <div className="second-row">
                                <div className="text-lg font-light tracking-wider">
                                  {description}
                                </div>
                            </div>
                        </div>
    </>
  )
}
