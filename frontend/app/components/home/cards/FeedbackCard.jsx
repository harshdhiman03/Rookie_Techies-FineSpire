import Image from "next/image";
import styles from "../../../../public/styles/home.module.css";
import stars from "../../../../public/images/feedback/stars.svg";

export default function FeedbackCard({ name, description }) {
    return (
        <div className={styles.feedbackcard}>
            <div className={styles.feedback_image}>
                {(name) ? name[0] : ""}
            </div>
            <Image src={stars} alt="stars" width={"80%"} />
            <p>{(name) ? name : ""}</p>
            <span>{(description) ? description : ""}</span>
        </div>
    )
}