import { Box, Card, Container, Grid, Typography, styled } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const AboutSection: React.FC = () => {
  const StyledCard = styled(Card)(({ theme }) => ({
    padding: "10px 10px",
    textAlign: "center",
    marginBottom: "10px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  }));

  const skillsSet = [
    "Javascript",
    "Typescript",
    "React",
    "NoSQL",
    "Git",
    "HTML",
    "CSS",
    "Redux",
    "AWS",
    "Node.js",
    "Express",
    "Figma",
  ];

  return (
    <>
      <Container maxWidth="lg">
        <Box id="about" pt={5} mb={3}>
          <Typography variant="h2" textAlign="center">
            About me
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
          display="flex"
          justifyContent="center"
          pb={3}
        >
          <Grid item xs={9} md={2.5}>
            <AnimationComponent moveDirection="right">
              <StyledCard variant="outlined">
                <WorkspacePremiumIcon />
                <Typography textAlign="center" fontWeight={600}>
                  Experience
                </Typography>
                <Typography textAlign="center">1+ years</Typography>
                <Typography textAlign="center">Full Stack Developer</Typography>
              </StyledCard>
            </AnimationComponent>
          </Grid>
          <Grid item xs={9} md={2.5}>
            <AnimationComponent moveDirection="left">
              <StyledCard variant="outlined">
                <SchoolIcon />
                <Typography textAlign="center" fontWeight={600}>
                  Education
                </Typography>
                <Typography textAlign="center">Bachelors Degree</Typography>
                <Typography textAlign="center">Information Systems</Typography>
              </StyledCard>
            </AnimationComponent>
          </Grid>
        </Grid>
        <Box pb={1}>
          <Typography>
            I am an Information Systems undergraduate with a strong background
            in technology and innovative solution development. Throughout my
            career, I have worked as a programming and robotics instructor,
            empowering young students to create games, applications, websites,
            and robots, fostering hands-on learning and project development.
            Additionally, I have gained experience as a support analyst,
            enhancing my technical skills and ability to collaborate within
            multidisciplinary teams.
          </Typography>
        </Box>
        <hr />
        <Box id="skills" pt={1} mb={3}>
          <Typography variant="h3" textAlign="center" fontWeight={300}>
            Skills
          </Typography>
        </Box>
        <Box mb={5}>
          <Grid container spacing={3} justifyContent="center">
            {skillsSet.map((skill, index) => (
              <Grid item key={index} xs={5} sm={4} md={2} lg={2}>
                <StyledCard variant="outlined">{skill}</StyledCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default AboutSection;
