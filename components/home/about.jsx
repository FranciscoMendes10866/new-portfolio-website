const About = () => {
    return (
        <div className="container mx-auto px-10 md:px-14 lg:px-28 py-28" id="aboutme">
            <h1 className="bold text-4xl">About me.</h1>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mt-12">
                <div className="col-span-6">
                    <p className="text-xl text-gray-500 light leading-loose">
                        My name is <span className="medium">Francisco Morais Mendes</span>,
                        I'm 23 years old and I'm from Portugal.
                    </p>
                </div>
                <div className="col-span-6">
                    <p className="text-xl text-gray-500 light leading-loose">
                        Fueled by high energy levels and boundless
                        enthusiasm, I’m easily inspired and more
                        then willing to follow my fascinations wherever
                        they take me.
                    </p>
                </div>
                <div className="col-span-6">
                    <p className="text-xl text-gray-500 light leading-loose">
                        I don't like to define myself by the projects
                        I did. I define myself by the projects I want
                        to do. Skills can be taught, personality
                        is inherent. I prefer to keep learning,
                        challenging myself and doing interesting
                        things that matter.
                    </p>
                </div>
                <div className="col-span-6">
                    <p className="text-xl text-gray-500 light leading-loose">
                        I’m a fast learner, able to pick up new skills
                        and juggle different projects and roles with
                        relative ease.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
