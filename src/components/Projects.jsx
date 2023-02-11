// Data Imports
import projects from "../data/projects";

export function ProjectCard(props) {
  return (
    <div className="container">
      <h1>{props.name}</h1>
      <h2>{props.desc}</h2>
      {props.langs.map((lang) => (
        <p>{lang}</p>
      ))}
      <p>{props.database}</p>
    </div>
  );
}

function Projects({ t }) {
  return (
    <section>
      <h1>{t("projects")}</h1>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          name={t(project.name)}
          desc={t(project.description)}
          langs={project.languages}
          database={project.database}
        />
      ))}
    </section>
  );
}

export { Projects };
