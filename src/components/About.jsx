import styles from './About.module.css';
import quality from '../images/quality.jpg';
import electric from '../images/pic_eletric.jpg';
import growth from '../images/growth.jpg'
import { MdOutlineHighQuality } from 'react-icons/md';
import { GiStrong } from 'react-icons/gi';
import { TbCubeUnfolded } from 'react-icons/tb';
import { BiSolidLike } from 'react-icons/bi';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.header}>
        <p>
          <div>
            <TbCubeUnfolded /> ĮMONĖ SU ISTORIJA.
            <div>
              Įkurta 2012 metais ir turi solidžią patirtį, kuri kuria vertę mūsų
              klientams.
            </div>
            <img src={growth} alt="augimas" />
          </div>
        </p>
        <p>
          <div>
            <MdOutlineHighQuality />
            KOMEPTENCIJOS IR KOKYBĖ
          </div>
          <div>Įmonė turi reikiamus sertifikatus, o 2023 metais buvo įvertinti kaip stipri įmonė.</div>
          <img src={quality} alt="Stipriausi Lietuvoje 2003" />
        </p>
        <p>
          <div>
            <GiStrong /> MES PROFESIONALI KOMANDA!
            <div>
              Esame atviri ir atsakingi žmonės, kuriame naujas idėjas, o
              realizuodami jas profesionaliai augame.
            </div>
          </div>
          <img src={electric} alt="" />
        </p>
      </div>
      <div className={styles.comment}>
        <details>
          <summary>
            Klientų atsiliepimai <BiSolidLike />
          </summary>
          <section>
            Labai atsakingi, kruopštūs, puikūs specialistai! Daug žino apie
            elektrą ir naujoves, pataria kaip teisingai instaliuoti, kokios
            naujos tendencijos... Labai geri savo srityje... Esu dekinga už jų
            atliktą sudėtingą darbą, įrengiant namus !!!
          </section>
          <section>
            Labai atsakingi, kruopštūs, puikūs specialistai! Daug žino apie
            elektrą ir naujoves, pataria kaip teisingai instaliuoti, kokios
            naujos tendencijos... Labai geri savo srityje... Esu dekinga už jų
            atliktą sudėtingą darbą, įrengiant namus !!!
          </section>
        </details>
      </div>

      <div className={styles.sign}></div>
    </div>
  );
};

export default About;
