export const getUser = async (user) => {
  const response = await fetch(`https://api.github.com/users/${user}`);
  return await response.json();
};

export const getRepositories = async (user) => {
  const response = await fetch(`https://api.github.com/users/${user}/repos`);
  return await response.json();
};

export const getFollowers = async (user) => {
  const response = await fetch(
    `https://api.github.com/users/${user}/followers`
  );
  return await response.json();
};

export const getActivity = async (user) => {
  const response = await fetch(
    `https://api.github.com/users/${user}/received_events`
  );
  return await response.json();
};
