import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
import { ArrowRight } from "../../assets/svg";
import { deleteBlogs, getBlogs } from "./Api";
import styles from "./OurBlog.module.css";
import { useState, useEffect } from "react";
import sound from "./assets/sound.png";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { supabase } from "../../App";

export const OurBlog = () => {
  const [data, setData] = useState<any[]>([]);
  const [activeComponent, setActiveComponent] =
    useState<string>("News and Updates");
  const [topBlogs, setTopBlogs] = useState<any[]>([]);
  const [count, setCount] = useState(6);

  const handleFetchDetails = async () => {
    try {
      const response = await getBlogs();
      if (response) {
        setData(response);
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleFetchDetails();
  }, []);

  useEffect(() => {
    const filteredData = data.filter((item) =>
      item.category.includes(activeComponent)
    );
    setTopBlogs(filteredData);
  }, [activeComponent, data]);

  const handleCount = () => {
    setCount(count + 3);
  };
  const handleCountBack = () => {
    setCount(6);
  };
  const datas = [
    {
      name: "News and Updates",
      value: "News and Updates",
    },
    {
      name: "Events",
      value: "Events",
    },
    {
      name: "Campus Diaries",
      value: "Campus Diaries",
    },
    // {
    //   name: "Insights",
    //   value: "Insights",
    // },
  ];
  const navigate = useNavigate();

  const detailBlogs = (id: any) => {
    navigate(`/detailedblog/${id}`);
  };

  const formatDate = (inputDate: string | number | Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "2-digit",
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
      <div className={styles.HeaderWrapper}>
        <div className={styles.Header}>
          <div className={styles.BackgroundText}>
            <h1>OUR BLOGS</h1>
          </div>
          <div className={styles.DetailWrapper}>
            <div className={styles.TopInner}>
              <p>Our Blogs</p>
            </div>
            <div className={styles.category}>
              {datas.map(({ value }) => {
                return (
                  <button
                    style={{
                      color: activeComponent == value ? "#05B570" : "#667085",
                    }}
                    onClick={() => setActiveComponent(value)}
                  >
                    {value}
                  </button>
                );
              })}
              <button
                style={{
                  color: "#667085",
                }}
                onClick={() => navigate('/newletters&reports')}
              >
                Newsletters & Reports
              </button>
            </div>
          </div>
        </div>
        <div className={styles.topBlogs}>
          {topBlogs
            .slice(0, 1)
            .map(
              ({
                id,
                image,
                author,
                dateofblog,
                title,
                description,
                category,
              }) => {
                const formattedDate = formatDate(dateofblog);
                return (
                  <div
                    className={styles.mainblog}
                    onClick={() => detailBlogs(id)}
                  >
                    <img src={image} alt="" />
                    <p className={styles.author}>
                      {author} • {formattedDate}
                    </p>
                    <h3>{title}</h3>
                    <p>
                      {description.length > 150
                        ? `${description.slice(0, 150)}...`
                        : description}
                    </p>
                    <CategoryDivContainer category={category} />
                  </div>
                );
              }
            )}
          <div className={styles.rightDiv}>
            {topBlogs
              .slice(1, 3)
              .map(
                ({
                  id,
                  image,
                  author,
                  dateofblog,
                  title,
                  description,
                  category,
                }) => {
                  const formattedDate = formatDate(dateofblog);
                  return (
                    <div onClick={() => detailBlogs(id)}>
                      <img src={image} alt="" />
                      <div>
                        <p className={styles.author}>
                          {author} • {formattedDate}
                        </p>
                        <h3>{title}</h3>
                        <p>
                          {description.length > 100
                            ? `${description.slice(0, 100)}...`
                            : description}
                        </p>
                        <CategoryDivContainer category={category} />
                      </div>
                    </div>
                  );
                }
              )}
          </div>
        </div>
      </div>
      <div className={styles.allBlogs}>
        <h1>All Blogs</h1>
        <div className={styles.blogWrapper}>
          {[...data]
            .slice(0, count)
            .map(
              ({
                id,
                image,
                author,
                dateofblog,
                title,
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
        {count >= data.length ? (
          <button onClick={handleCountBack}>Show Less</button>
        ) : (
          <button onClick={handleCount}>View More</button>
        )}
      </div>
      <BannerOFBlog />
      <Footer />
    </div>
  );
};

export const IndividualBlogContainer = ({
  id,
  title,
  image,
  category,
  dateofblog,
  author,
  description,
  editable,
  extra,
}: IndividualBlogContainerProps) => {
  const navigate = useNavigate();
  const detailBlogs = (id: any) => {
    console.log(id);
    navigate(`/detailedblog/${id}`);
    window.location.reload();
  };

  const formatDate = (inputDate: string | number | Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "2-digit",
    };
    const formattedDate = new Date(inputDate).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };
  const formattedDate = formatDate(dateofblog);

  const handleDelete = async () => {
    try {
      // Extract image and extra images URLs from the blog data
      const imageUrl = image;
      const extraImagesUrls = extra!.split(", ");

      // Delete main image
      if (imageUrl) {
        const imageFilePath = imageUrl.split("/").pop();
        await supabase.storage
          .from("blogs")
          .remove([`images/${imageFilePath}`]);
      }

      // Delete extra images
      for (const imageUrl of extraImagesUrls) {
        const imageFilePath = imageUrl.split("/").pop();
        await supabase.storage
          .from("blogs")
          .remove([`images/${imageFilePath}`]);
      }

      // Delete the blog entry from the database
      const response = await deleteBlogs(id);
      if (response) {
        console.log(response);
      }
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className={styles.outerIndividualBlog}>
      {" "}
      {editable ? (
        <div className={styles.editable}>
          <button>
            <FaEdit />
          </button>
          <button onClick={handleDelete}>
            <MdDelete />
          </button>
        </div>
      ) : (
        ""
      )}
      <div className={styles.individualBlogDiv} onClick={() => detailBlogs(id)}>
        <img src={image} alt="" />
        <p className={styles.author}>
          {author} • {formattedDate}
        </p>
        <h3>{title}</h3>
        <p>
          {description.length > 200
            ? `${description.slice(0, 200)}...`
            : description}
        </p>
        <CategoryDivContainer category={category} />
      </div>
    </div>
  );
};

interface CategoryDivContainerProps {
  category: string;
}
export const CategoryDivContainer = ({
  category,
}: CategoryDivContainerProps) => {
  return (
    <div className={styles.categoryDiv}>
      {category.split(",").map((cat: string) => {
        const normalizedCat = cat.trim().replace(/\s+/g, "");

        const className =
          styles[normalizedCat.toLowerCase()] || styles.defaultCategory;

        return (
          <p className={`${styles.contentCategory} ${className}`}>
            {cat.trim()}
          </p>
        );
      })}
    </div>
  );
};

export const BannerOFBlog = () => {
  return (
    <div className={styles.bannerSection}>
      <div className={styles.LeftSection}>
        <h1>
          <p>Join us in</p>&nbsp;<span>rebuilding the future</span>
          <p>of Indian Education</p>
        </h1>
        <div className={styles.buttonandpara}>
          <p>
            Help us build resources, mentor aspirants and support our activities
            and events.
          </p>
          <button
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSfZtsL0-tXcs0pbRfaTE3FnanKNppiab0zAv8dOqBm0aMUzfQ/viewform",
                "_blank"
              )
            }
          >
            <p>Join Us</p>
            <ArrowRight color="rgba(3, 72, 82, 1)" />
          </button>
        </div>
      </div>
      <img src={sound} alt="" />
    </div>
  );
};
