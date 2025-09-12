import { useState } from "react";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setInputValue(query);
        onSearch(query);
    };

    return (
        <div>
            <div className={`flex flex-row px-4 py-1 rounded-2xl ${isInputFocused ? "border border-[#c1c1c1]" : "border border-[#606060]"}`}>
                <div className="flex flex-row items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                        <path fill="#c1c1c1" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0s.41-1.08 0-1.49zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14" />
                    </svg>
                </div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    onFocus={() => setIsInputFocused(true)}
                    onBlur={() => setIsInputFocused(false)}
                    placeholder="Search anything..."
                    className="w-[280px] bg-[#161616] text-sm rounded-xl px-[4px] py-[2px] placeholder-[#606060] outline-none"
                />
            </div>
        </div>
    );
}