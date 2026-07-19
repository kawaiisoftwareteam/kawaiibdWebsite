import React from 'react'
import './OurProjectCard.css'

const OurProjectCard = ({ projects }) => {
    return (
        <>
            {projects.map((project, index) => (
                <div className='OurProjectCardBox group' style={{ backgroundImage: `url(${project.image})` }} key={index}>
                    <div className='OurProjectContentBox'>
                        <div className='OurProjectContentTitle'>{project.title}</div>
                        <div className='OurProjectContentSub'>{project.subtitle}</div>
                        <div className='OurProjectContentDes'>{project.description}</div>
                        <div className='OurProjectContentReadmore'>
                            <div className='OurProjectReadMore'>Read More</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8" fill="none">
                                <path d="M0.713693 8L0 7.28631L3.28631 4L0 0.713693L0.713693 0L4.71369 4L0.713693 8Z" fill="#EDC8A3" />
                            </svg>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default OurProjectCard
