import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/ProfilePicture.png";
import themeIcon from "../../assets/icons8-sun-filled-static.svg";
import linkedinIcon from "../../assets/icons8-linkedin-filled.svg";
import githubIcon from "../../assets/icons8-github-filled.svg";
import twitterxIcon from "../../assets/icons8-twitterx-filled.svg";
import resume from "../../assets/oldishResume.pdf";

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile Picture of Jack Vacek"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Icon"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Jack
          <br />
          Vacek
        </h1>
        <h2>Honor's Computer Science Major</h2>
        <h3>Texas A&M University</h3>
        <br />
        <span>
          <a href="https://x.com/" target="_blank">
            <img src={twitterxIcon} alt="X Icon" />
          </a>
          <a href="https://www.linkedin.com/in/jackvacek/" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a>
          <a href="https://github.com/JackVacek" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
        </span>
        <p>
          With a passion for problem solving, algorithmic design, and machine
          learning.
        </p>
        <a href={resume} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
