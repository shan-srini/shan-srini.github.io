import React from 'react'
import style from './Projects.style.js'
import { Typography } from '@material-ui/core'
import content from './ProjectsCardsContent.js'
import ProjectCard from '../../components/projectCard/Card.js'

const Projects = () => {
    const classes = style();

    return (
        <div className={classes.projectsPageContainer}>
            {/* <Typography variant='overline' color='secondary' style={{ fontSize: '1rem', alignSelf: 'flex-end' }}> (noteworthy)&nbsp;</Typography> */}
            <Typography align='center' variant='h1' color='primary' style={{ fontSize: '3.5rem' }}> Projects </Typography>
            {
                content.map((project, index) =>
                    <ProjectCard
                        key={`'projects-card-${index}`}
                        title={project.title}
                        previewPic={project.previewPic}
                        quickDescription={project.quickDescription}
                        fullDescription={project.fullDescription}
                        gitURLs={project.gitURLs}
                        projectURL={project.projectURL}
                        introDelay={700 * (index + 1)}
                    />
                )
            }
        </div>
    )
}

export default Projects;