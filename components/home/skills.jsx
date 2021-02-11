const Skills = () => {
    return (
        <div className="container mx-auto px-10 md:px-14 lg:px-28 py-20" id="myskills">
            <h1 className="bold text-4xl">My skills.</h1>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mt-12">
                <div className="col-span-6">
                    <p className="text-xl text-gray-500 light leading-loose">
                        Through my studies, I've gained a solid understanding
                        of web development concepts, and have dedicated
                        a lot of time to apply these concepts to applications.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Skills
