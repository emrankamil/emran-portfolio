const Heading = ()=>{
    return(
        <section id="heading">
            <div className="flex flex-col h-screen mb-[-30px]">
                <div className="flex-grow flex flex-col flex-grow justify-center items-center bg-[url('../public/img/headingImage2.png')] w-screen bg-cover bg-left">
                    <div className="text-center">
                        <div className="p-2.5">         
                            <h1 className="text-4xl font-bold text-white">EMRAN KAMIL</h1>
                        </div>  
                        <div className="w-64 bg-sky-200 h-1 ml-16"></div>
                        <div className="p-2.5">
                            <h1 className="text-3xl text-white">Full Stack Developer</h1>
                        </div>
                        <div className="max-w-2xl p-6">
                            <p className="text-lg text-gray-600 text-left">
                                Passionate Full Stack web developer and computer engineer with expertise in building
                                web applications using Python, Django, JavaScript, React.js, Next.js, and Cloud Technologies.
                                Eager to learn and implement new technologies. Self-motivated, hardworking, and dedicated
                                to continuous learning. Enthusiastic team player.
                            </p>
                        </div>
                    </div>         
                </div>         
            </div>
        </section>

    )    
}

export default Heading;
