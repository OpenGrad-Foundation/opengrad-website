import styles from "./index.module.css";

type Props = {
    text: string;
    variant?: 'primary' | 'secondary';
};

const SubHeadings = (_props: Props) => {
    const { text, variant = 'primary' } = _props;
    const className = `${styles.SubHeadings} ${variant === 'secondary' ? styles.secondary : ''}`.trim();
    return <h1 className={className}>{text}</h1>;
};

export default SubHeadings;
