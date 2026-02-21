import { useState, useEffect } from "react";
import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
import styles from "./index.module.css";
import fav from "./fav.png";
import { supabase } from "../../App";

type SelectionData = {
  iim: string;
  selections: number;
};

type Data = {
  [key: string]: SelectionData[];
};

export const OurResults = () => {
  const [selectedYear, setSelectedYear] = useState<string>("CAT2022");
  const [data, setData] = useState<Data>({});

  useEffect(() => {
    const fetchData = async () => {
      const { data: results, error } = await supabase
        .from("cat_selections")
        .select("year, iim, selections");

      if (error) {
        console.error("Error fetching data:", error);
        return;
      }

      const formattedData: Data = results.reduce((acc: Data, curr: any) => {
        const yearKey = curr.year;
        if (!acc[yearKey]) {
          acc[yearKey] = [];
        }
        acc[yearKey].push({ iim: curr.iim, selections: curr.selections });
        return acc;
      }, {});

      setData(formattedData);
    };

    fetchData();
  }, []);

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
  };

  const calculateTotalSelections = (year: string): number => {
    return (
      data[year]?.reduce((total, entry) => total + entry.selections, 0) || 0
    );
  };

  const totalSelections = calculateTotalSelections(selectedYear);

  return (
    <>
      <Navbar />
      <div className={styles.HeaderWrapper}>
        <div className={styles.BackgroundText}>
          <h1>RESULTS</h1>
        </div>
        <div className={styles.DetailWrapper}>
          <div className={styles.Content}>
            <div className={styles.TopInner}>
              <p>OUR RESULTS</p>
            </div>
          </div>
          <div className={styles.btnwrap}>
            {Object.keys(data).map((year) => (
              <button
                key={year}
                className={selectedYear === year ? styles.active : ""}
                onClick={() => handleYearChange(year)}
              >
                {year.replace("CAT", "CAT ")}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.ourResults}>
          <div>
            <table>
              <thead>
                <tr>
                  <th>IIM's</th>
                  <th>No. of Selections</th>
                </tr>
              </thead>
              <tbody>
                {data[selectedYear]?.map((entry, index) => (
                  <tr key={index}>
                    <td>{entry.iim}</td>
                    <td>{entry.selections}</td>
                  </tr>
                ))}
                <tr>
                  <td>Total</td>
                  <td>{totalSelections}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.content}>
            <h3>
              OpenGrad's students dominate the selection lists of top tier
              institutions!
            </h3>
            <p>
              A total of 2805 OpenGrad students have been selected in CAT 2022
              to get into the 13 IIMs for which results are publicly available
              and have been verified as on 5th October 2023.
            </p>
            <img src={fav} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OurResults;
