import SearchBar from "./SearchBar";

interface NavbarProps {
    onSearch: (query: string) => void;
}

export default function Navbar({ onSearch }: NavbarProps) {
    return (
        <div className="flex flex-row bg-[#161616] justify-between items-center px-12 py-4">
            <div className="breadcrumb cursor-pointer">
                Home &gt; <span className="font-semibold">Dashboard</span>
            </div>
            <div className="flex flex-row gap-20 items-center">
                <div>
                    <SearchBar onSearch={onSearch} />
                </div>
                <div className="flex flex-row gap-[8px]">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                            <path fill="#c1c1c1" fillRule="evenodd" d="M256 42.667A213.333 213.333 0 0 1 469.334 256c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m21.334 234.667h-42.667c-52.815 0-98.158 31.987-117.715 77.648c30.944 43.391 81.692 71.685 139.048 71.685s108.104-28.294 139.049-71.688c-19.557-45.658-64.9-77.645-117.715-77.645M256 106.667c-35.346 0-64 28.654-64 64s28.654 64 64 64s64-28.654 64-64s-28.653-64-64-64" />
                        </svg>
                    </div>
                    <div className="flex flex-row cursor-pointer gap-[2px]">
                        <span>Anakin</span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#c1c1c1" fillRule="evenodd" d="M16.707 9.293a1 1 0 0 1 0 1.414L12 15.414l-4.707-4.707a1 1 0 0 1 1.414-1.414L12 12.586l3.293-3.293a1 1 0 0 1 1.414 0" clipRule="evenodd" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}