'use client'
import React from 'react'
import { YoutubeModal } from '@/shared/modals'
import { motion } from "framer-motion"





function Upper() {


    const line1 = "Music with a"
    const line2 = "new Scale."


    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.01,
            },
        },
    }

    const letter = {
        hidden: {
            opacity: 0, y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    }

    return (
        <main className='selection:bg-fuchsia-300 selection:text-fuchsia-900'>
            <div className='flex justify-between w-full items-end px-10 absolute left-0 -translate-y-1/2 top-1/2'>
                <motion.div
                    drag="x"
                    dragConstraints={{ left: 2, right: 5, bottom: 5, top: 5 }}
                    variants={sentence}
                    initial="hidden"
                    animate="visible"
                    className='text-[90px] ml-7 selection:bg-fuchsia-300 selection:text-fuchsia-900 '>
                    {line1.split("").map((char, index) => {
                        return (
                            <motion.span key={char + "-" + index} variants={letter}>
                                {char}
                            </motion.span>
                        )
                    })}
                    <br />
                    {line2.split("").map((char, index) => {
                        return (
                            <motion.span key={char + "-" + index} variants={letter}>
                                {char}
                            </motion.span>
                        )
                    })}
                </motion.div>
                <div>
                    {/* empty */}
                </div>
                <div className='flex flex-col gap-y-[60px] mr-7'>
                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="
                          hover:bg-gray-700 active:bg-gra-700 focus:outline-none focus:ring focus:ring-violet-300
                          bg-black font-semibold py-2 px-4 border text-white rounded shadow
                  ">
                        PARTY SONG
                    </motion.button>
                    <YoutubeModal />
                </div>
            </div>
        </main>
    )
}

export default Upper;