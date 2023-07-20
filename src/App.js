import { Container } from "./components/Container";
import { Section } from "./components/Section";
import { Image } from "./components/Image";
import pic from "./picture.png";
import { Sections } from "./styled";
import { List } from "./components/List";
import { Toggle } from "./components/Toggle";
import { useEffect, useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";

export const App = () => {
  const [theme, setTheme] = useState("light");
  const [skills, setSkills] = useState([]);

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
  });

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
            <>
              <Image src={pic} alt="Dominika" />
              <Section
                text="THIS IS"
                title="Dominika Buczek-Szkowron"
                content="I’m a passionate Frontend Developer in love with React,currently looking for new job opportunities."
              ></Section>
            </>
          </Sections>
          <List title="My skill includes" data={skills}></List>
        </Container>
      </>
    </ThemeProvider>
  );
};

export default App;
