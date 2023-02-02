import css from "../assets/styles/Footer.module.css";
import github from "../assets/images/github-mark.svg";
import linkedin from "../assets/images/linkedin.svg";

const Footer = () => {
  return (
    <div className={css.footer}>
      <p>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 8L19.25 5.25L22 4L19.25 2.75L18 0L16.75 2.75L14 4L16.75 5.25L18 8Z"
            fill="#551A8B"
          />
          <path
            d="M18 14L16.75 16.75L14 18L16.75 19.25L18 22L19.25 19.25L22 18L19.25 16.75L18 14Z"
            fill="#551A8B"
          />
          <path
            d="M10.5 8.5L8 3L5.5 8.5L0 11L5.5 13.5L8 19L10.5 13.5L16 11L10.5 8.5ZM8.99 11.99L8 14.17L7.01 11.99L4.83 11L7.01 10.01L8 7.83L8.99 10.01L11.17 11L8.99 11.99Z"
            fill="#551A8B"
          />
        </svg>
        Developed by Guillermo Galarza.
      </p>
      <div className={css.contact}>
        <a href="https://github.com/Madahva" target="_blank" rel="noreferrer">
          <img src={github} alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/guillermo-galarza-8a478220a/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
