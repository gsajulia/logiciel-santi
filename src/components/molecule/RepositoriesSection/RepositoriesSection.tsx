import { getAllGithubRepos } from "../../../services/github";
import { useEffect, useState } from "react";

type TRepo = { id: number; homepage: string; description: string };

const RepositoriesSection = () => {
  const [repos, setRepos] = useState<TRepo[]>([]);

  const getBoracodarRepos = async () => {
    const response = await getAllGithubRepos();
    const repos = response.data.filter(
      (repo: TRepo) =>
        repo.description && repo.description.toLowerCase().includes("boracodar")
    );
    console.log(repos);

    setRepos(repos);
  };

  useEffect(() => {
    getBoracodarRepos();
  }, []);
  
  return (
    <div>
      {repos.map((repo) => (
        <iframe key={repo.id} src={repo.homepage} allowFullScreen={true} />
      ))}
    </div>
  );
};

export default RepositoriesSection;
