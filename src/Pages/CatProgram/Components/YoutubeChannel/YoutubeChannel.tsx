import styles from './YoutubeChannel.module.css';

const YoutubeChannel = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Visit our Youtube Channel</h2>
      <p className={styles.description}>
        One of the most trusted higher education YouTube channel in Kerala with over 20K subscribers giving real insights and experiences on higher educational opportunities.
      </p>
      <div className={styles.videoContainer}>
         
         <iframe className={styles.video} src="https://www.youtube.com/embed/JBWZaYDOWS8?si=7jchHbbdkpjeuLdt" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      
      </div>
          <div className={styles.channelLink}>
        <a href="https://www.youtube.com/@opengrad_mal" className={styles.channelName}>@opengrad_mal</a>
        <svg className={styles.youtubeIcon} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
      </div>
    </section>
  );
};

export default YoutubeChannel;
