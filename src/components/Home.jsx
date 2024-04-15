import { useState, useEffect } from 'react';
import styles from './Home.module.css';
import logo from '../images/en_sis_logo_50.jpg';
import picture from '../images/home_pic_3.jpg';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [showText, setShowText] = useState(false);
  const homeText = 'GERIAUSI ELEKTRIKAI ŠIAURĖS LIETUVOJE!';

  useEffect(() => {
    if (showText) {
      let characterIndex = 0;
      const intervalId = setInterval(() => {
        setDisplayText(homeText.slice(0, characterIndex));
        characterIndex++;
        if (characterIndex > homeText.length) {
          clearInterval(intervalId);
          setShowText(false);
        }
      }, 300);

      return () => {
        clearInterval(intervalId);
      };
    } else {
      setDisplayText('');
      setShowText(true);
    }
  }, [showText]);

  return (
    <div className={styles.home}>
      <img className={styles.logo} src={logo} alt="logo" />
      <p>{displayText}</p>
      <img className={styles.footerPic} src={picture} alt="instruments" />
    </div>
  );
};

export default Home;
