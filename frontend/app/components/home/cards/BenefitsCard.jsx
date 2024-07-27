import styles from "../../../../public/styles/home.module.css";
import Image from "next/image";

export default function BenefitsCard({ img, text }) {
    return (
        <div className={styles.card}>
            <div className={styles.card_image}>
                <Image src={`/images/benefits/${img}.svg`} alt={text} width={125} height={125} />
            </div>
            <p>{text}</p>
        </div>
    )
}