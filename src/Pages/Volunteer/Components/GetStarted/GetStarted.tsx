import SubHeadings from '../../../../Components/subHeadings';
import styles from './GetStarted.module.css'
import image from './imageBlock.png'
type Props = {};

export const GetStarted = (_props: Props) => {
  return (
    <div className={styles.GetStartedWrapper}>
      <div className={styles.header}>
        <SubHeadings text="Ready To Make an Impact?" />
        {/* <p>
          By Joining Our Vibrant Community, You'll Be Part Of An Incredible
          Journey To Transform Education And Make A Difference In The Lives Of
          Underprivileged Students.
        </p> */}
      </div>
      <div className={styles.volunteer}>
        {/* <h2>
          <div></div>
          <p>Who Can Volunteer</p>
          <div></div>
        </h2> */}
        <div className={styles.imageandcontent}>
          <img src={image} alt="" />
          <p>
          Whether you are an educator, a coder, or a mentor, your skills have a
          home here. Join the movement to transform the educational landscape
          of India.
          </p>
        </div>
        {/* <button
          className={styles.redirectbtn}
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSfZtsL0-tXcs0pbRfaTE3FnanKNppiab0zAv8dOqBm0aMUzfQ/viewform",
              "_blank"
            )
          }
        >
          Join as Volunteer
        </button> */}

      </div>
      <p className={styles.questionText}>WHO WE ARE LOOKING FOR?</p>
    </div>
  );
};
