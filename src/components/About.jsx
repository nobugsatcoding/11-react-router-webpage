import styles from './About.module.css';
import quality from '../images/quality.jpg';
import electric from '../images/pic_eletric.jpg';
import { MdOutlineHighQuality } from 'react-icons/md';
import { GiStrong } from 'react-icons/gi';
import { TbCubeUnfolded } from 'react-icons/tb';
import { MdAccountBalance } from 'react-icons/md';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.header}>
        <p>
          <MdOutlineHighQuality /> KOKYBĖ
        </p>
        <p>
          <GiStrong /> PATIRTIS
        </p>
        <p>
          <TbCubeUnfolded /> PROFESIONALUMAS
        </p>
        <p>
          <MdAccountBalance /> ATSAKOMYBĖ
        </p>
      </div>
      <div className={styles.comment}>
        Labai atsakingi, kruopštūs, puikūs specialistai! Daug žino apie elektrą
        ir naujoves, pataria kaip teisingai instaliuoti, kokios naujos
        tendencijos... Labai geri savo srityje... Esu dekinga už jų atliktą
        sudėtingą darbą, įrengiant namus !!!
      </div>
      <div className={styles.sign}>
        <img src={quality} alt="Stipriausi Lietuvoje 2003" />
      </div>
      <div className={styles.sign}>
        <img src={electric} alt="" />
      </div>
    </div>
  );
};

export default About;
