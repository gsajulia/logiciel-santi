import { getAllGithubRepos } from "@/app/services/github";
import { useEffect, useState } from "react";

const RepositoriesSection = () => {
  const [repos, setRepos] = useState([]);

  const getBoracodarRepos = async () => {
    const response = await getAllGithubRepos();
    const repos = response.data.filter(
      (repo) =>
        repo.description && repo.description.toLowerCase().includes("boracodar")
    );
    console.log(repos);

    setRepos(repos);
  };

  useEffect(() => {
    getBoracodarRepos();
  });
  return (
    <div>
      {repos.map((repo) => (
        <iframe key={repo.id} src={repo.homepage} allowFullScreen={true} />
      ))}
    </div>
  );
};

export default RepositoriesSection;
