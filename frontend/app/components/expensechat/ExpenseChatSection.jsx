"use client";

import { IoSend } from "react-icons/io5";
import { useRecordVoice } from "../../../hooks/useRecordVoice";
import { FaMicrophone } from "react-icons/fa";
import { useState, useEffect } from "react";
import { FaSave } from "react-icons/fa";
import { supabase } from "../../supabase";
import { UserAuth } from "../../context/AuthContext";

export default function ExpenseChatSection() {
    const { user } = UserAuth();
    const { recording, startRecording, stopRecording, text } = useRecordVoice();
    const [chattext, setChatText] = useState([]);
    useEffect(() => {
        if (text) {
            setChatText([...chattext, text]);
            handleSave();
        }
    },[text]);

    const handleSave = async () => {
        const { data: views, error } = await supabase
            .from("ExpenseReport")
            .select(`expenses`)
            .match({ email: user.email })
            .single();
        if (error && error.details.includes(`0 rows`)) {
            const { data, error } = await supabase
                .from(`ExpenseReport`)
                .insert({ email: user.email, expenses: [{ "message": text }] })
                .single();
        }
        else {
            const { data, error } = await supabase
                .from(`ExpenseReport`)
                .update({ expenses: [...views.expenses, { "message": text }] })
                .match({ email: user.email })
                .single();
        }
    }
    return (
        <div className="flex justify-end flex-col py-8 ml-[80px] md:ml-[300px] h-full min-w-[250px] max-w-[800px] w-[85%] md:w-[75%]">
            <div className="w-11/12 mx-auto overflow-y-scroll h-[90%] text-white flex flex-col justify-end mb-10">
                {(chattext.length == 0) ? <p className="text-center text-xl">No Chat! Press and hold the microphone to record</p> :
                    chattext.map((chat, index) => {
                        return (
                            <div key={index} className="flex justify-between my-1">
                                <p className="text-lg">{chat}</p>
                                {/* <p className="text-lg text-white" onClick={() => { handleSave(index); }}><FaSave /></p> */}
                            </div>
                        )
                    })
                }
            </div>
            <form className="flex bg-[#9A2CF2] rounded-2xl p-1 text-black justify-evenly h-[60px]">
                <input type="text" placeholder="Type a message" className="h-full border-0 focus-visible:border-1 rounded-lg p-4 focus-visible:border-white focus-visible:outline-0 w-11/12 bg-[transparent]" />
                <button
                    onMouseDown={startRecording}    // Start recording when mouse is pressed
                    onMouseUp={stopRecording}        // Stop recording when mouse is released
                    onTouchStart={startRecording}    // Start recording when touch begins on a touch device
                    onTouchEnd={stopRecording}        // Stop recording when touch ends on a touch device
                    onClick={(e) => { e.preventDefault(); }}
                    className="border-none bg-transparent w-10"
                >
                    {/* Microphone icon component */}
                    <FaMicrophone className="text-2xl w-[35px]" />
                </button>
                <button onClick={(e) => { e.preventDefault(); }}><IoSend className="text-2xl w-[35px]" /></button>
            </form>
        </div>
    )
}


