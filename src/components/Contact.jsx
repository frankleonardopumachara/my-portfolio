export const Contact = () => {
    return (
        <section className='contact dark-section'>
            <div className='contact-container'>
                <div className='grid md:grid-cols-3 rectangle text-center flex justify-evenly align-middle'>
                        <div className='section-title'>
                            Hablemos!
                        </div>
                        <div className='description'>
                            Contactame para iniciar tu proyecto de desarrollo web y hare que tu vision se vuelva
                            realidad.
                        </div>
                        <div>
                            <a href="mailto:leonardo.chara15@gmail.com">
                                <button type='button'
                                        className='button'
                                >
                                    Contacto
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         fill="none"
                                         viewBox="0 0 24 24"
                                         strokeWidth={1.5}
                                         stroke="currentColor"
                                         className="w-6 h-6"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                                    </svg>
                                </button>
                            </a>
                        </div>
                </div>
            </div>
        </section>
    )
}
