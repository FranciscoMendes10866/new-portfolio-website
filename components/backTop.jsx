import { AiOutlineArrowUp } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

const BackToTop = () => {
    useEffect(() => {
        window.onscroll = () => { anchorFunction() }
        const anchorFunction = () => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.querySelector('.back-top').style.display = 'block'
            } else {
                document.querySelector('.back-top').style.display = 'none'
            }
        }
    }, [])
    return (
        <>
            <span id="top"></span>
            <motion.div
                class="back-top transform -translate-y-0 hover:-translate-y-3 transition duration-300 ease-in-out right-0 bottom-0 fixed mr-4 md:mr-12 mb-4 md:mb-12 bg-gray-900 text-white p-2"
                whileHover={{ originX: 0, y: '-20px' }}
                transition={{ delay: 0.05 }}
            >
                <a href="#top">
                    <AiOutlineArrowUp class="text-2xl" />
                </a>
            </motion.div>
        </>
    )
}

export default BackToTop
