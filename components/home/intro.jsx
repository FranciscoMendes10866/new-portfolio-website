import { AiOutlineArrowDown } from 'react-icons/ai'

const Intro = () => {
    return (
        <div className="container mx-auto px-10">
            <div className="flex justify-center items-center h-screen">
                <div className="max-w-5xl lg:max-w-4xl tracking-wider">
                    <h1 className="text-5xl lg:text-7xl leading-tight md:leading-none">Hello there! I’m <span className="bold">Francisco</span>-</h1>
                    <h1 className="text-5xl lg:text-7xl medium mt-2 md:mt-4 leading-tight md:leading-none">Full Stack Web Developer.</h1>
                    <p className="text-xl lg:text-3xl text-gray-500 light leading-loose mt-6 md:mt-8 lg:mt-10">
                        Born and raised in the beautiful Portuguese coast.
                    </p>
                    <p className="text-xl lg:text-3xl text-gray-500 light leading-loose lg:leading-10 mt-0 md:mt-1 lg:mt-2">
                        My core value is to embrace my limitations and always
                        stay hungry for new challenges.
                    </p>
                    <AiOutlineArrowDown className="mt-10 text-gray-300 text-2xl ml-32" />
                </div>
            </div>
        </div>
    )
}

export default Intro
