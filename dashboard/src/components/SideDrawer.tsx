type SideDrawerProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children?: React.ReactNode;
};

export default function SideDrawer({ isOpen, onClose, title, children }: SideDrawerProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50">
            <div 
                className="absolute inset-0 bg-black bg-opacity-50"
                onClick={onClose}
            ></div>
            
            <div className="absolute right-0 top-0 h-full w-[33vw] bg-[#161616] shadow-xl rounded-tl-3xl rounded-bl-3xl transform transition-transform duration-300 ease-in-out">
                <div className="flex items-center justify-between p-6">
                    <h2 className="text-lg text-[#c1c1c1] font-semibold max-w-[400px] truncate cursor-default">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-[#c1c1c1] hover:text-[#606060]"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
	                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="m7 7l10 10M7 17L17 7" />
                        </svg>
                    </button>
                </div>

                <div className="p-6 h-[calc(100%-72px)]">
                    {children}
                </div>
            </div>
        </div>
    );
}