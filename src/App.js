import { Container } from "./components/Container";
import { Section } from "./components/Section";
import { MainButton } from "./components/MainButton";
import { Image } from "./components/Image";
import { PortfolioHeader } from "./components/PortfolioHeader";
import { Projects } from "./components/Project";
import { Icon } from "./components/Icons";
import pic from "./picture.png";
import { Sections, Wrapper, CardContainer, Box } from "./styled";
import { List } from "./components/List";
import { Toggle } from "./components/Toggle";
import { useEffect, useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { ReactComponent as GitIcon } from "./github.svg";
export const App = () => {
  const [theme, setTheme] = useState("light");
  const [skills, setSkills] = useState([]);
  const [wantedSkills, setWantedSkills] = useState([]);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    fetch("skills.json")
      .then((response) => response.json())
      .then((skills) => setSkills(skills));
  }, []);

  useEffect(() => {
    fetch("wantedSkills.json")
      .then((response) => response.json())
      .then((wantedSkills) => setWantedSkills(wantedSkills));
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyle />
        <Container>
          <Toggle
            label={"DARK MODE " + (theme === "light" ? "OFF" : "ON")}
            toggled={true}
            onClick={toggleTheme}
          />
          <Sections>
            <Image src={pic} alt="Dominika" />
            <Wrapper>
              <Section
                text="THIS IS"
                title="Dominika Buczek-Szkowron"
                content="I’m a passionate Frontend Developer in love with React,currently looking for new job opportunities."
              ></Section>
              <MainButton
                email="dominikabuczek@gmail.com"
                subject="JOB"
                body="You are great! We want you on board!"
              />
            </Wrapper>
          </Sections>
          <List title="My skill includes" data={skills}></List>
          <List title="What I want to learn next" data={wantedSkills}></List>

          <Sections>
            <Wrapper>
              <PortfolioHeader
                title="Portfolio"
                subtitle="My resent projects"
              />
              <CardContainer>
                {[...Array(5)].map((index, i) => (
                  <Projects index={i}></Projects>
                ))}
              </CardContainer>
            </Wrapper>
          </Sections>
          <Section
            text="LET'S TALK!"
            title="dominikabuczekszkowron@gmail.com"
            content="I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me"
          ></Section>
          <Box>
            <Icon
              link="https://github.com/DominikaBuczekSzkowron"
              icon={<GitIcon />}
            ></Icon>
            <Icon
              link="https://github.com/DominikaBuczekSzkowron"
              icon={<GitIcon />}
            ></Icon>
            <Icon
              link="https://github.com/DominikaBuczekSzkowron"
              icon={<GitIcon />}
            ></Icon>
          </Box>
        </Container>
      </>
    </ThemeProvider>
  );
};

export default App;
