import { useState } from 'react';
import service_1 from '../images/service_1.jpg';
import service_2 from '../images/service_2.jpg';
import service_3 from '../images/service_3.jpg';
import service_4 from '../images/service_4.jpg';
import styles from './Services.module.css';

const Services = () => {
  const [showCard, setShowCard] = useState(null);

  const showCardText = (key) => {
    setShowCard(key === showCard ? null : key)
  }

  return (
    <div className={styles.serv_container}>
      <div key={1} className={styles.card} onClick={() => showCardText(1)}>
        <h3>Elektros instaliacija</h3>
        <img src={service_1} alt="instaliacija" />
        <p style={{ display: showCard === 1 ? 'block' : 'none'  }}>
        Esame atestuota, turinti kvalifikuotus darbuotojus įmonė ir atliekame statybinių elektros įvadų (statybinių elektros skydelių) vidaus ir išorės bei lauko teritorijoje esančio iki 10 kV
        </p>
      </div>
      <div key={2} className={styles.card} onClick={() => showCardText(2)}>
        <h3>Saulės eletrinių įrengimas</h3>
        <img src={service_2} alt="saulės" />
        <p style={{ display: showCard === 2 ? 'block' : 'none'  }}>
        Mąstome plačiai, todėl jūsų verslui ir namams siūlome įvairius saulės sprendimus – nuo autonominės elektrinės iki elektromobilių įkrovimo stotelės.
        </p>
      </div>
      <div key={3} className={styles.card} onClick={() => showCardText(3)}>
        <h3>Elektros ūkio priežiūra</h3>
        <img src={service_3} alt="priežiūra" />
        <p style={{ display: showCard === 3 ? 'block' : 'none'  }}>
        Prižiūrime įmonių elektros ūkį, atliekame technini aptarnavima, šaliname gedimus, skiriame atsakingus už įmonės elektros ūkį savo darbuotojus. Atsakingo už įmonės elektros ūkį funkcijų vykdymas. Kiekvieno vartotojo elektros įrenginiuose privalo būti skiriamas atestuotas asmuo atsakingas už elektros ūkį, jei turimą elektros įrenginių leista naudoti galia, esant įvadui trifaziui yra didesnė kaip 30 kW.
        </p>
      </div>
      <div key={4} className={styles.card} onClick={() => showCardText(4)}>
        <h3>Elektros tinklų projektavimas</h3>
        <img src={service_4} alt="proejktavimas" />
        <p style={{ display: showCard === 4 ? 'block' : 'none'  }}>
        Elektros įvedimo į norimą objektą situacijos analizė, optimaliausio prijungimo scenarijaus parinkimas, įvedimo kaštų įvertinimas. Galime apsilankyti Jūsų objekte ir parengti ataskaitą išnagrinėję situaciją dėl Jūsų nekilnojamo turto ar kito objekto prijungimo prie AB ESO elektros tinklo ar AB ESO tinklų rekonstravimo (tinklų iškėlimo, apsaugojimo), suskaičiuoti elektros energijos poreikį. 
        </p>
      </div>
    </div>
  );
};

export default Services;
