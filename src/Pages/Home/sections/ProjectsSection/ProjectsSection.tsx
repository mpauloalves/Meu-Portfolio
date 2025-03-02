import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "Project Exemple",
            subtitle: "jan 2025",
            srcImg: "/src/assets/images/devStage.png",
            description: "Online event recommendation software using the most popular framework in the React ecosystem, Next.js.",
            technologies: "Technologies: React, Next.js, Vite + TypeScript, Tailwind, Zod",
            websiteURL: "/",
            codeURL: "https://github.com/mpauloalves/DevStageweb",
        },
        {
            title: "Project Exemple",
            subtitle: "fev 2025",
            srcImg: "/src/assets/images/crud.png",
            description: "This is a FullStack CRUD project developed using Node.js, React.js, and MySQL. The application allows for the creation, reading, updating, and deleting of users, integrating the frontend with the backend and the database.",
            technologies: "Technologies: React, Node.js, Express, MySQL",
            websiteURL: "/",
            codeURL: "https://github.com/mpauloalves/CRUD",
        },
       
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item md={6} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection
