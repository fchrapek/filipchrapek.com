import styles from './project.module.scss'

function Project({projects}) {
  return (
    <>
      {projects.map((project, index) => (
        <article className={styles['project']} key={index}>
          <figure>
            <p>{project.name}</p>

            <figcaption>{project.description}</figcaption>
          </figure>
        </article>
      ))}
    </>
  );
}

export default Project
