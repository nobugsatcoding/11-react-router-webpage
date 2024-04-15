import { MdOutlineMarkEmailRead } from 'react-icons/md';
import { LuPhoneCall } from 'react-icons/lu';
import { LiaMapSignsSolid } from 'react-icons/lia';
import styles from './Contacts.module.css';

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <p> MUS RASITE</p>
      <div className={styles.contactInfo}>
        <div>
          <MdOutlineMarkEmailRead /> info@energijossistemos.lt
        </div>
        <div>
          <LuPhoneCall /> +37069230675
        </div>
        <div>
          <LiaMapSignsSolid /> Frenkelių g. 10-4, Šiauliai
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d647.3451187236509!2d23.32989792433771!3d55.92744853400728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e5e2e506d78901%3A0xc5a3a92b63661a1!2sJSC%20%22Energy%20System%22!5e1!3m2!1sen!2slt!4v1711787175522!5m2!1sen!2slt"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Embedded"
      ></iframe>
    </div>
  );
};

export default Contacts;
