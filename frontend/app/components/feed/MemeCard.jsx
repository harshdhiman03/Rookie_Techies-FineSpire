import styles from "../../../public/styles/feed.module.css";
import Image from "next/image";
export default function MemeCard({ url }) {
    return (
        <div className={styles.memecard}>
            {/* <div className={"flex gap-4 w-11/12 items-center justify-start mx-auto" + styles.friend}>
                <div className={"bg-white w-[25px] h-[25px] rounded-full text-black flex justify-center items-center"}>{(name) ? name[0] : ""}</div>
                <p>{(name) ? name : ""}</p>
            </div> */}
            <Image src={url} alt="Meme Image" width={"300"} height={"300"} className={"lg:w-[400px] lg:h-[400px] sm:w-[300px] sm:h-[300px] w-[200px] h-[200px]"} />
            {/* <div></div> */}
            {/* <div></div> */}
        </div>
    )
}