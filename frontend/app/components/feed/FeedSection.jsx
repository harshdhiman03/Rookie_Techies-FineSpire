'use client'
import { storage } from "../../firebase";
import { useEffect, useState } from "react";
import { ref as sRef, getDownloadURL } from "firebase/storage";
import MemeCard from "./MemeCard";
import styles from "../../../public/styles/feed.module.css";

export default function FeedSection() {
    const [url, setUrl] = useState([]);
    const fetchList = ["m1.jpg", "m2.jpg", "m3.jpg", "m4.jpg", "m5.jpg", "m6.jpg", "m7.jpg", "m8.jpg", "m9.jpg", "m10.jpg", "m11.jpeg", "m12.jpg", "m13.png", "m14.png", "m15.png", "m16.png", "m17.png", "m18.jpg", "m19.jpg", "m20.jpg"];
    const getImageUrl = async (i) => {
        try {
            // Get a reference to the image in Firebase Storage
            const imageRef = sRef(storage, `/memes/${fetchList[i]}`); // Replace 'path/to/image.jpg' with the path to your image in Firebase Storage

            // Get the download URL for the image
            const imageUrl = await getDownloadURL(imageRef);

            setUrl((url) => [...url, imageUrl]);
        } catch (error) {
            console.error('Error getting image URL:', error);
        }
    };

    // Call the function to get the image URL
    useEffect(() => {
        for (let i = 0; i < 20; i++) {
            getImageUrl(i);
        }
    }, []);

    return (
        <div className="overflow-y-auto">
            <h1 className={styles.meme_title}>Memes</h1>
            <div className="flex flex-col justify-center items-center gap-4">
                {url.map((val, key) => (
                    val && <MemeCard key={key} url={val} />
                ))}
            </div>
        </div>
    )
}