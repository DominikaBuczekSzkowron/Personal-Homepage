import { Wrapper } from "./styled";
import { ErrorSection } from "../Error/index";
import { LoadingView } from "../Loading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchProject,
  selectProjectList,
  selectProjectStatus,
} from "./projectSlice";
import { ProjectCard } from "../../Common/ProjectCard/Index";

export const Projects = () => {
  const dispatch = useDispatch();
  const projectsData = useSelector(selectProjectList);
  const projectDataFetchState = useSelector(selectProjectStatus);

  useEffect(() => {
    dispatch(fetchProject());
  }, [dispatch]);

  const renderProjectsList = (projectsData) => (
    <>
      {projectsData
        ? projectsData.map((project) => (
            <Wrapper>
              <ProjectCard
                name={project.name}
                description={project.description}
                homepage={project.homepage}
                html_url={project.html_url}
              />
            </Wrapper>
          ))
        : null}
    </>
  );
  return (
    <>
      {projectDataFetchState === "loading" && <LoadingView />}
      {projectDataFetchState === "error" && <ErrorSection />}
      {projectDataFetchState === "success" && renderProjectsList(projectsData)}
    </>
  );
};
