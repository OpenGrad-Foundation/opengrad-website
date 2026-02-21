import { ImageHoverBox } from "../../../../Components/ImageHoverBox/ImageHoverBox";
import styles from "./VolunteerDirectory.module.css";
import { ArrowLeft, ArrowRight, SearchSvg } from "../../../../assets/svg";
import { useEffect, useState } from "react";
import { getVolunteerDirectory } from "./Api";
import SubHeadings from "../../../../Components/subHeadings";

type Props = {};

export const VolunteerDirectory = (_props: Props) => {
  const [data, setData] = useState<any[]>([]);
  const [show, setShow] = useState(5);
  const [searchName, setSearchName] = useState("");
  const [searchDescription, setSearchDescription] = useState("");

  const handleFetchDetails = async () => {
    try {
      const response = await getVolunteerDirectory();
      if (response) {
        setData(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetchDetails();
    console.log(data);
  }, []);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(event.target.value.toLowerCase());
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchDescription(event.target.value.toLowerCase());
  };

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchName) &&
      item.description.toLowerCase().includes(searchDescription)
  );

  const updatedata = (value: number) => {
    setShow(show + value);
  };

  return (
    <div className={styles.VolunteerDirectory}>
      <div className={styles.headingContainer}>
        <SubHeadings text="Community Directory" />
        <SubHeadings text="" variant="secondary" />
      </div>
      <div className={styles.btnWrapper}>
        <p>
          Total Volunteers: 2000+
          {/* {filteredData.length} */}
        </p>
        <div>
          <SearchSvg />
          <input
            type="text"
            placeholder="Search by name"
            value={searchName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <SearchSvg />
          <input
            type="text"
            placeholder="Search by college"
            value={searchDescription}
            onChange={handleDescriptionChange}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        {filteredData
          .slice(0, show)
          .map(({ image, name, description, linkedin }) => (
            <ImageHoverBox
              key={name}
              image={image}
              name={name}
              description={description}
              linkedIn={linkedin}
              width=""
              height=""
            />
          ))}
      </div>
      <div className={styles.buttonwrap}>
        {show > 5 && (
          <button onClick={() => updatedata(-6)}>
            <ArrowLeft color="#05B570" />
            Show Less
          </button>
        )}
        {show < filteredData.length && (
          <>
            <div></div>
            <button onClick={() => updatedata(6)}>
              See More
              <ArrowRight color="#05B570" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};
