import styles from "../../styles/t_fx_comp.module.scss";
import Link from "next/link";

const TEXT_MORE = "More";

const t_fx__container = ({ children, _str_title }) => {
  return (
    <div className={styles.comp_container}>
      <div className={styles.comp_container_header}>
        <div>{_str_title}</div>
        <Link href="#">
          <a>{TEXT_MORE}</a>
        </Link>
      </div>
      <div className={styles.comp_container_content}>{children}</div>
    </div>
  );
};

export default t_fx__container;
