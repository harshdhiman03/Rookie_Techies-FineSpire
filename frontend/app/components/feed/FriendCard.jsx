import styles from "../../../public/styles/feed.module.css";

export default function FriendCard({name}) {
    return (
        <div className={"flex gap-4 w-11/12 items-center justify-start mx-auto" + styles.friend}>
            <div className={"bg-white w-[50px] h-[50px] rounded-full text-black flex justify-center items-center mb-2"}>{(name) ? name[0] : ""}</div>
            <p className="text-lg hidden lg:block">{(name) ? name : ""}</p>
        </div>
    )
}