import styles from './Home.module.css';
import logo from '../images/en_sis_logo_50.jpg';
import picture from '../images/home_pic_3.jpg';

const Home = () => {
  return (
    <div className={styles.home}>
      <img src={logo} alt="logo" />
      <p>GERIAUSI ELEKTRIKAI ŠIAURĖS LIETUVOJE</p>
      <img className={styles.footerPic} src={picture} alt="instruments" />
    </div>
  );
};

export default Home;
