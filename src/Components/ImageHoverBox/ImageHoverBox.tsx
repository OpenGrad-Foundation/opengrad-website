import styles from "./ImageHoverBox.module.css";
type Props = {
  image: any;
  name: string;
  description?: string;
  width: string;
  height: string;
  className?: string;
  linkedIn?: string;
  variant?: string;
};

export const ImageHoverBox = ({
  image,
  name,
  description,
  width,
  height,
  className,
  linkedIn,
  variant,
}: Props) => {

  return (
    <div className={styles.ImageHoverBoxWrapper + " " + className}>
      <a
        href={linkedIn}
        target="_blank"
        className={styles.ImageHoverBoxWrap}
        style={{ width: width, height: height }}
      >
        <div className={styles.FrontDiv}>
          <img src={image} alt="" />
        </div>
        <div className={styles.BackDiv}></div>
      </a>
      <div className={`${styles.Content} ${variant === 'secondary' ? styles.secondary : ''}`}>
        <h2>{name}</h2>
        <h3>{description}</h3>
      </div>
    </div>
  );
};
