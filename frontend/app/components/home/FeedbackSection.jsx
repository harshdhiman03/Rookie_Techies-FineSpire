import styles from "../../../public/styles/home.module.css";
import Image from "next/image";
import Carousel from "./Carousel";

export default function FeedbackSection() {

    return (
        <section className={styles.feedback}>
            <div className={styles.content}>
                <h1 className={styles.feedback_content_title}>User Feedback</h1>
                <div className={styles.feedback_text_content}>
                    <h2>Shape Our Shield</h2>
                    <h3>Your Feedback Powers the Evolution of Our LLM Model</h3>
                    <p>
                        Using FinWise has been a game-changer for me! The personalized investment recommendations and real-time market insights have helped me make informed decisions with confidence.
                    </p>
                </div>
                <div className={styles.feedback_list}>
                    <Carousel />
                </div>
            </div>
        </section>
    )
}