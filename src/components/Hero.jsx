export const Hero = () => {
    return (
        <section className='hero items-stretch'>

            <div className='main-hero'>

                <img className='hero-image rounded-full inline'
                     src='../../public/my-photo.jpeg'
                     alt="Frank in Bariloche, Argentina"
                />

                <h1>
                    Hola soy Frank
                </h1>

                <h2>
                    Soy desarrollador de software
                </h2>
            </div>

            <div className='bottom-hero'>
                <img className='bottom-hero-image inline'
                     src='../../public/hero-inferior.svg'
                     alt="Mi stack"
                />
            </div>
        </section>
    )
}
