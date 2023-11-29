'use client'
import YouTubePlayer from '@/library/youtube-player';
import React, { useState } from 'react';
import Modal from "@/shared/modals/modal";
import { motion } from 'framer-motion';


function YoutubeModal() {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <motion.div

                whileHover={{ scale: 1.2 }}
                onHoverStart={e => { }}
                onHoverEnd={e => { }}

                onClick={handleOpen} className=" flex items-center justify-center w-[100px] h-[100px] rounded-md bg-cover bg-[url('/main/weekend.jpg')]">
                <svg className="ml-1 w-4" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 7.26795C16.3333 8.03775 16.3333 9.96225 15 10.7321L3 17.6603C1.66667 18.4301 1.01267e-06 17.4678 1.07997e-06 15.9282L1.68565e-06 2.0718C1.75295e-06 0.532196 1.66667 -0.430054 3 0.339746L15 7.26795Z" fill="white" />
                </svg>
            </motion.div>

            <Modal isOpen={open} onClose={handleClose}>
                <div className="text-black">
                    <YouTubePlayer videoId='34Na4j8AVgA' />
                </div>
            </Modal>
        </>
    );
}

export default YoutubeModal;