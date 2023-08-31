import { useEffect, useState } from "react";

export const usePortfolio = (index) => {
  const [fetchstate, setFetchState] = useState({ state: "loading" });
  const [fetchName, setFetchName] = useState();
  const [fetchDescription, setFetchDescription] = useState();
  const [fetchLInk, setFetchLink] = useState();
  const [fetchDemo, setFetchDemo] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/DominikaBuczekSzkowron/repos"
        );

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();
        setTimeout(() => {
          setFetchState({
            state: "success",
          });
          setFetchName(data[index].name);
          setFetchDescription(data[index].description);
          setFetchLink(data[index].html_url);
          setFetchDemo(data[index].homepage);
        }, 1000);
      } catch (error) {
        setFetchState({
          state: "error",
        });
        console.error(error);
      }
    })();
  }, [index]);

  return [fetchstate, fetchName, fetchDescription, fetchLInk, fetchDemo];
};
