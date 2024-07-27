import styles from "../../../public/styles/home.module.css";
import Image from "next/image";
import BenefitsCard from "./cards/BenefitsCard";

export default function BeneFitSection() {
    const data = ['Personalized Investment Recommendations', 'Real Time Market Insights', 'Awakening Memes', 'Portfolio Optimization', 'Comprehensive Analysis', 'News Summarization'];
    const benefitsCard = data.map((text, key) => {
        return (
            <BenefitsCard key={key} img={key + 1} text={text} />
        )
    })
    return (
        <section className={styles.benefits}>
            <div className={styles.content}>
                <h1 className={styles.benefits_content_title}>Benefits</h1>
                <div className={styles.cards_div}>
                    {benefitsCard}
                </div>
            </div>
        </section>
    )
}