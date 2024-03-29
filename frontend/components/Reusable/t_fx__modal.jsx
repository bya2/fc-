import ReactDOM from "react-dom";
import styles from "../../styles/t_fx_comp.module.scss";
import Container from "./t_fx__container";

const T_fx__modal = ({ children, is_show__modal, fn_on_close }) => {
  return (
    is_show__modal &&
    ReactDOM.createPortal(
      <div
        className={styles.comp_modal_wrapper}
        onMouseDown={(e) => {
          e.target.addEventListener("mouseup", () => {
            fn_on_close();
          });
        }}
      >
        <div
          className={styles.comp_modal_content}
          onMouseDown={(e) => {
            e.stopPropagation();
          }}
        >
          <div
            className={styles.comp_modal_btn_close}
            onClick={() => fn_on_close()}
          >
            X
          </div>
          {children}
        </div>
      </div>,
      document.getElementById("modal")
    )
  );
};

export default T_fx__modal;
