import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailedBlogs, getExludedBlogs } from "../Api";
import styles from "./DetailedBlog.module.css";
import { Navbar } from "../../../Components/Navbar/Navbar";
import { Footer } from "../../../Components/Footer/Footer";
import {
  BannerOFBlog,
  CategoryDivContainer,
  IndividualBlogContainer,
} from "../OurBlog";
import SubHeadings from "../../../Components/subHeadings";

type Props = {};

export const DetailedBlog = (_props: Props) => {
  const { id } = useParams();
  const [data, setData] = useState<any[]>([]);
  const [dataBlogs, setDataBlogs] = useState<any[]>([]);
  const [count, setCount] = useState(Number);
  const [level, setLevel] = useState<number>(0);

  const handleFetchDetails = async () => {
    if (typeof id === "string") {
      try {
        const response = await getDetailedBlogs(id);
        if (response) {
          setData(response);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  const handleFetcBlogs = async () => {
    if (typeof id === "string") {
      try {
        const response = await getExludedBlogs(id);
        if (response) {
          setDataBlogs(response);
          setLevel(response.length);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  useEffect(() => {
    console.log(level, dataBlogs.length);
    if (level <= 3) {
      setCount(0);
    } else {
      setCount(Math.floor(Math.random() * Math.floor(level - 3)));
    }
  }, [level, dataBlogs.length]);

  useEffect(() => {
    handleFetchDetails();
    handleFetcBlogs();
  }, []);

  const formatDate = (inputDate: string | number | Date) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "long",
      year: "numeric",
    };
    const formattedDate = new Date(inputDate).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };

  return (
    <div className={styles.Wrapper}>
      <Navbar />
      {data.map(
        ({
          image,
          title,
          author,
          dateofblog,
          extra_images,
          description,
          category,
        }) => {
          const formattedDate = formatDate(dateofblog);
          const textSegments = description
            .replace(/<br>/g, "<br/><br/>")
            .split("<img>");
          const images = extra_images
            ? extra_images.split(",").map((src: string) => src.trim())
            : [];
          return (
            <div className={styles.HeaderWrapper}>
              <p className={styles.author}>
                Posted on {formattedDate} • <span>{author}</span>
              </p>
              <h2>{title}</h2>
              <img src={image} alt="" />

              {textSegments.map((segment: any, index: string | number) => (
                <div>
                  <div
                    className={styles.description}
                    dangerouslySetInnerHTML={{ __html: segment }}
                  />
                  {images[index] && (
                    <img
                      className={styles.extraImages}
                      src={images[index]}
                      loading="lazy"
                      alt=""
                    />
                  )}
                </div>
              ))}
              <CategoryDivContainer category={category} />
            </div>
          );
        }
      )}
      <div className={styles.WNRcontainer}>
        <SubHeadings text={"What to read next"} />
        <div>
          {dataBlogs
            .slice(count, count + 3)
            .map(
              ({
                id,
                image,
                title,
                author,
                dateofblog,
                description,
                category,
              }) => {
                return (
                  <IndividualBlogContainer
                    id={id}
                    image={image}
                    title={title}
                    author={author}
                    description={description}
                    dateofblog={dateofblog}
                    category={category}
                    editable={false}
                  />
                );
              }
            )}
        </div>
      </div>
      <BannerOFBlog />
      <Footer />
    </div>
  );
};
