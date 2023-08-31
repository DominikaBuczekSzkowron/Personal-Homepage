export const getProject = async (index) => {
  const response = await fetch(
    "https://api.github.com/users/DominikaBuczekSzkowron/repos"
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};
