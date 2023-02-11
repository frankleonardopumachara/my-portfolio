import {useState} from "react";

export const RecentProjects = () => {

    const [projects, setProjects] = useState(
        [
            {
                title: 'Colombiana de Transplantes APP',
                description: 'Aplicacion de control de signos vitales',
                linkToLive: 'https://colombiana-transplantes-beta.web.app',
                linkToGithub: 'https://github.com',
                imgLink: '/my-portfolio/Colombiana-Trasplantes-APP-1.png',
            },
            {
                title: 'Beland',
                description: 'Aplicacion de criptomonedas',
                linkToLive: 'http://frontend-admin.beland-dev.com',
                linkToGithub: 'https://github.com',
                imgLink: '/my-portfolio/Beland-App-1.png',
            },
            {
                title: 'Tienda Ecommerce',
                description: 'Aplicacion ecommerce de venta de dispositivos',
                linkToLive: 'https://google.com',
                linkToGithub: 'https://github.com',
                imgLink: '/my-portfolio/Sitio-ecommerce.png',
            }
        ]
    )

    return (
        <section id='projects' className='recent-projects light-section'>
            <h2 className='section-title dark-text text-center'>
                Mis proyectos recientes
            </h2>
            <h3 className='section-description text-center'>
                Estos son algunos proyectos que he creado recientemente
            </h3>

            <div className='projects-gallery text-center'>
                <div className='container grid md:grid-cols-3'>
                    {
                        projects.map(project => (
                            <div className='project'
                                 key={project.title}
                            >
                                <img src={project.imgLink}
                                     alt="Proyecto 1"
                                />
                                <div className='overlay'>
                                    <p>{project.title}</p>
                                    <div className='icons-container'>
                                        <a href={project.linkToGithub}
                                           target='_blank'
                                           rel='noopener noreferrer'
                                        >
                                            <svg viewBox="0 0 24 24"
                                                 aria-hidden="true"
                                                 className="h-6 w-6 fill-slate-900">
                                                <path fillRule="evenodd"
                                                      clipRule="evenodd"
                                                      d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z">
                                                </path>
                                            </svg>
                                        </a>

                                        <a href={project.linkToLive}
                                           target='_blank'
                                           rel='noopener noreferrer'
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 fill="none"
                                                 viewBox="0 0 24 24"
                                                 strokeWidth={1.5}
                                                 stroke="currentColor"
                                                 className="w-6 h-6"
                                            >
                                                <path strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
