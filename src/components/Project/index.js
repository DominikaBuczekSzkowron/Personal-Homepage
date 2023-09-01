import { usePortfolio } from "./usePortfolio";
import { Wrapper, Header, Content, Links, Container } from "./styled";
import { ErrorSection } from "../Error/index";
import { LoadingView } from "../Loading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchProject,
  selectProjectList,
  selectProjectStatus,
} from "./projectSlice";

export const Projects = ({ index }) => {
  const dispatch = useDispatch;
  const projectData = useSelector(selectProjectList);
  const projectDataFetchState = useSelector(selectProjectStatus);

  const [fetchName, fetchDescription, fetchLInk, fetchDemo] =
    usePortfolio(index);

  useEffect(() => {
    dispatch(fetchProject());
  }, [dispatch]);

  const renderProjectsList = () => (
    <>
      <Header>{fetchName}</Header>
      <Content>{fetchDescription}</Content>
      <Container>
        <Content>Demo: </Content>
        <Links>{<a href={`${fetchDemo}`}>{fetchDemo}</a>}</Links>
      </Container>
      <Container>
        <Content>Code: </Content>
        <Links>{<a href={`${fetchLInk}`}>{fetchLInk}</a>}</Links>
      </Container>
    </>
  );
  return (
    <>
      <Wrapper>
        {projectDataFetchState === "loading" && <LoadingView />}
        {projectDataFetchState === "error" && <ErrorSection />}
        {projectDataFetchState === "success" && renderProjectsList(projectData)}
      </Wrapper>
    </>
  );
};

// const data = await response.json();
//         setTimeout(() => {
//           setFetchState({
//             state: "success",
//           });
//           setFetchName(data[index].name);
//           setFetchDescription(data[index].description);
//           setFetchLink(data[index].html_url);
//           setFetchDemo(data[index].homepage);
//         }, 1000);
//       } catch (error) {
//         setFetchState({
//           state: "error",
//         });
//         console.error(error);
//       }
//     })();
//   }, [index]);

//   return [fetchstate, fetchName, fetchDescription, fetchLInk, fetchDemo];
// };
