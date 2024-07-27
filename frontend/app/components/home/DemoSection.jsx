import styles from "../../../public/styles/home.module.css";
import heroSection from "../../../public/images/hero/heroSection.svg"
import demoBackgroundTop from "../../../public/images/demo/demoBackgroundTop.svg"
import Image from "next/image";

export default function DemoSection() {
    return (
        <section className={styles.demo}>
            <Image src={demoBackgroundTop} alt="background" width="300" className="absolute right-0 top-0" />
            <div className={styles.content + " flex flex-col !justify-center !items-center gap-8"}>
                <h1 className={styles.demo_content_title}>Demo</h1>
                {/* <div className={styles.demo_text_content}>
                </div> */}
                <Image src="/demo.png" alt="background" height="500" width="800" style={{ width: "85%", maxWidth: "800px" }} />
            </div>
        </section>
    )
}