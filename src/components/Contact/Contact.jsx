import { IoIosContact } from "react-icons/io";
import { MdPhoneInTalk } from "react-icons/md";
import styles from "./Contact.module.css";

function Contact({ id, name, number, onDelete }) {
  return (
    <li className={styles.contactItem}>
      <div className={styles.contactBox}>
        <div className={styles.contactContext}>
          <IoIosContact />
          <span>{name}</span>
        </div>
        <div className={styles.contactContext}>
          <MdPhoneInTalk />
          <a href={`tel: ` + number}>{number}</a>
        </div>
      </div>
      <button
        onClick={() => onDelete(id)}
        type="button"
        aria-label="delete button"
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;
