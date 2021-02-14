import { BsArrowRightShort } from 'react-icons/bs'
import { motion } from 'framer-motion'

import { ProjectsData } from './projects.data'

const Projects = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-16 px-0 lg:px-10 xl:px-32">
            {ProjectsData.map((data, index) => {
                return (
                    <motion.div
                        key={index}
                        className="bg-gray-900 p-10"
                        whileHover={{ y: -5 }}
                        transition={{ delay: 0.05 }}
                        >
                        <span className="text-gray-500 text-xl lg:text-lg border-b-2 pb-2 border-gray-500">
                            {data.type}
                        </span>
                        <h1 className="mt-16 text-5xl lg:text-4xl text-gray-100 tracking-wide medium">
                            {data.name}
                        </h1>
                        <p className="mt-10 text-lg lg:text-base text-gray-400 tracking-wider leading-loose light">
                            {data.desc}
                        </p>
                        <button className="flex mt-16 border-2 border-white px-6 py-4 text-gray-100 hover:text-gray-900 bg-transparent hover:bg-white tracking-widest transition duration-150 ease-in-out">
                            View Project <BsArrowRightShort className="text-2xl" />
                        </button>
                    </motion.div>
                )
            })}
        </div>
    )
}

export default Projects
