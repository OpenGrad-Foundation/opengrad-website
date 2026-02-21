import { useEffect, useState } from "react";
import { getBlogs } from "../../../OurBlog/Api";
import styles from "./OurWorks.module.css";

import { useNavigate } from "react-router-dom";
import SubHeadings from "../../../../Components/subHeadings";

type Props = {
  id: string;
  image: string;
  par: string;
};

export const OurWorks = () => {
  const [data, setData] = useState<any[]>([]);
  const handleFetchDetails = async () => {
    try {
      const response = await getBlogs();
      if (response) {
        setData(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleFetchDetails();
  }, []);
  return (
    <div className={styles.OurWorkWrapper}>
      {" "}
      <SubHeadings text="News and updates" />
      <div className={styles.WorksWrapper}>
        {[...data].slice(0, 6).map(({ id, image, title }) => {
          return <Container key={id} id={id} image={image} par={title} />;
        })}
      </div>
    </div>
  );
};

const Container = ({ id, image, par }: Props) => {
  const navigate = useNavigate();
  const detailBlogs = (id: any) => {
    console.log(id);
    navigate(`/detailedblog/${id}`);
    window.location.reload();
  };
  return (
    <div className={styles.Container} onClick={() => detailBlogs(id)}>
      <img src={image} alt="" loading="lazy" />
      <div className={styles.InnerDiv}>
        <p>{par}</p>
      </div>
    </div>
  );
};
