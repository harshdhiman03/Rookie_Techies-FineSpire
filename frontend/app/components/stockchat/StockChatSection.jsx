"use client";

import { IoSend } from "react-icons/io5";
import { useState } from "react";

export default function StockChatSection() {
    const [chatText, setChatText] = useState([]);
    const [inputText, setInputText] = useState('');

    const handleSend = (e) => {
        e.preventDefault();
        if (inputText.trim()) {
            setChatText(prev => [...prev, { text: inputText, fromUser: true }]);
            setInputText('');
            // Simulate bot response
            setTimeout(() => {
                setChatText(prev => [...prev, { text: 'Here is some stock info!', fromUser: false }]);
            }, 1000);
        }
    };

    return (
        <div className="flex flex-col h-full min-w-[250px] max-w-[800px] w-[85%] md:w-[75%] py-8 ml-[80px] md:ml-[300px]">
            <div className="flex-1 overflow-y-scroll p-4 bg-gray-800 text-white rounded-lg mb-4 ">
                {chatText.length === 0 ? (
                    <p className="text-center text-xl ">No Chat! Type a message below</p>
                ) : (
                    chatText.map((chat, index) => (
                        <div key={index} className={`flex items-center mb-2 ${chat.fromUser ? 'justify-end' : 'justify-start'}`}>
                            <p className={`text-lg p-2 rounded-lg ${chat.fromUser ? 'bg-green-100 text-black' : 'bg-gray-700'}`}>
                                {chat.text}
                            </p>
                        </div>
                    ))
                )}
            </div>
            <form className="flex bg-[#9A2CF2] rounded-2xl p-1 text-black justify-evenly h-[60px]" onSubmit={handleSend}>
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type a message about stocks"
                    className="h-full border-0 focus-visible:border-1 rounded-lg p-4 focus-visible:border-white focus-visible:outline-0 w-11/12 bg-[transparent]"
                />
                <button
                    type="submit"
                    className="p-2 ml-2 rounded-full bg-transparent text-white hover:bg-purple-500"
                >
                    <IoSend className="text-xl text-black" />
                </button>
            </form>
        </div>
    );
}
