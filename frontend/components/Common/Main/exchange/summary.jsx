import styles from "../../../../styles/main/exchange/_summary.module.scss";

const summary = ({ _obj_summary }) => {
  const { coin_name_kr, coin_name_en, price, fluctuation_rate, volume } =
    _obj_summary;

  const pri_fluc =
    parseInt(price.replaceAll(",", "")) *
    (parseFloat(fluctuation_rate.substring(1, fluctuation_rate.length - 1)) /
      100);

  return (
    <div className={styles.summary_wrapper}>
      <div className={styles.coin_name_wrapper}>
        <span>{coin_name_kr}</span>
        <span>{coin_name_en}</span>
      </div>
      <div className={styles.price_fluc_wrapper}>
        <span className={styles.price}>{price}</span>
        <span className={styles.fluctuation_rate}>
          {fluctuation_rate}({pri_fluc})
        </span>
      </div>
      <div>
        <span>{volume}</span>
        <span>고가</span>
        <span>저가</span>
      </div>
    </div>
  );
};

export default summary;
