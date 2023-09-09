import axios from "axios";

export const getAllGithubRepos = async () => {
  return await axios.get("https://api.github.com/users/gsajulia/repos");
};
