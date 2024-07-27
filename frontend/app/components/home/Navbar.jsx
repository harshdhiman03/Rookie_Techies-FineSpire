'use client'

import Image from "next/image";
import styles from "../../../public/styles/home.module.css";
import { useEffect, useState } from "react";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";
import { UserAuth } from "../../context/AuthContext";
import Link from "next/link";
import { RiAccountCircleLine } from "react-icons/ri";
import { MdOutlineFeed, MdChatBubble, MdLogout } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { IoAnalytics } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Script from "next/script";

export default function Navbar() {
    const { user, logOut } = UserAuth();
    const path = usePathname();
    const [burgeropen, setBurgerOpen] = useState(false);
    const handleClick = () => {
        setBurgerOpen(!burgeropen);
    }

    const content = (
        <PopoverContent>
            <ul className="px-4 py-4 flex flex-col gap-2 text-black text-lg bg-white rounded-xl mt-2">
                {(user) ? <><Link href="/dashboard"><li><div className="justify-start flex items-center gap-4"><RiAccountCircleLine className={"text-2xl"} /><p>Profile</p></div></li></Link>
                    <Link href="/analyse"><li><div className="justify-start flex items-center gap-4"><IoAnalytics className={"text-2xl"} /><p>Analysis</p></div></li></Link>
                    <Link href="/feed"><li><div className="justify-start flex items-center gap-4"><MdOutlineFeed className={"text-2xl"} /><p>Feed</p></div></li></Link>
                    <Link href="/expensechat"><li><div className="justify-start flex items-center gap-4"><MdChatBubble className={"text-2xl"} /><p>Expense Chat</p></div></li></Link>
                    <Link href="https://finspirerookietechies.streamlit.app/"><li><div className="justify-start flex items-center gap-4"><MdChatBubble className={"text-2xl"} /><p>Stock Chat</p></div></li></Link> 
                    <li className={"cursor-pointer"} onClick={() => { logOut() }}><div className="justify-start flex items-center gap-4"><MdLogout className={"text-2xl"} /><p>Logout</p></div></li></>
                    :
                    <Link href="/analyse"><li><div className="justify-start flex items-center gap-4"><IoAnalytics className={"text-2xl"} /><p>Analysis</p></div></li></Link>
                }
            </ul>
        </PopoverContent>
    );

    return (
        <>
            {(path === "/") ?
                <header className={styles.navbar + " !bg-black/35 backdrop-blur-xl"}>
                    {/* <Script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></Script>
                    <Script src="https://mediafiles.botpress.cloud/ca12c9ca-3375-4deb-b5c6-7ef13312a8b6/webchat/config.js" defer></Script> */}
                    <div className={styles.navbar_content}>
                        <Link href="/"><p>RookieTechies</p></Link>
                        <div className={styles.navbar_menu}>
                            {(!user) ? <button className={styles.signin_btn}><Link href="/signin">Sign In</Link></button> : <p>Hello, {(user) ? user.displayName : "Guest"}</p>}
                            <Popover placement="bottom-end">
                                <PopoverTrigger>
                                    <button onClick={() => { handleClick() }} className={(!burgeropen) ? styles.burger : styles.burger + " " + styles.burgeractive}><span></span><span></span><span></span></button>
                                </PopoverTrigger>
                                {content}
                            </Popover>
                        </div>
                    </div>
                </header >
                :
                <>
                    {/* <Script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></Script>
                    <Script src="https://mediafiles.botpress.cloud/ca12c9ca-3375-4deb-b5c6-7ef13312a8b6/webchat/config.js" defer></Script> */}
                </>
            }
        </>
    )
}