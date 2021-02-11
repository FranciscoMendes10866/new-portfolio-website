import { DiReact, DiNodejsSmall } from 'react-icons/di'
import { SiTypescript, SiJest, SiDocker, SiPostgresql, SiTailwindcss, SiGit } from 'react-icons/si'

const TechStack = () => {
    return (
        <div className="py-20 px-4 md:px-20 lg:px-40">
            <div className="flex justify-between items-center flex-row flex-wrap">
                <DiReact className="text-6xl md:text-7xl text-gray-700" />
                <SiTypescript className="text-5xl md:text-6xl text-gray-700" />
                <SiTailwindcss className="text-6xl md:text-7xl text-gray-700" />
                <SiJest className="text-5xl md:text-6xl text-gray-700" />
            </div>
            <div className="flex justify-between items-center flex-row flex-wrap mt-10 md:mt-12">
                <SiGit className="text-5xl md:text-6xl text-gray-700" />
                <SiDocker className="text-5xl md:text-6xl text-gray-700" />
                <DiNodejsSmall className="text-6xl md:text-7xl text-gray-700" />
                <SiPostgresql className="text-5xl md:text-6xl text-gray-700" />
            </div>
        </div>
    )
}

export default TechStack
