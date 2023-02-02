import css from "../assets/styles/Loading.module.css";

const Loading = () => {
  return (
    <div className={css.loading}>
      <div className={css["three-body"]}>
        <div className={css["three-body__dot"]}></div>
        <div className={css["three-body__dot"]}></div>
        <div className={css["three-body__dot"]}></div>
      </div>
    </div>
  );
};

export default Loading;
