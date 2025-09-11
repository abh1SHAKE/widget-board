import CategorySection from "./CategorySection";

export default function Dashboard() {
    function handleAddWidget() {
        console.log("HANDLE ADD WIDGET")
    }

    function handleRefresh() {
        console.log("HANDLE REFRESH")
    }

    return (
        <div className="px-12">
            <div className="flex flex-row pt-8 pb-4 justify-between">
                <span className="flex flex-row items-center text-base font-bold cursor-default">CNAPP Dashboard</span>
                <div className="flex flex-row gap-6">
                    <button 
                        onClick={handleAddWidget}
                        className="text-[#c1c1c1] hover:text-[#161616] border border-[#c1c1c1] hover:bg-[#c1c1c1] px-[8px] py-[2px] rounded-2xl cursor-pointer"
                    >
                        Add Widget +
                    </button>
                    <button 
                        onClick={handleRefresh}
                        className="flex flex-row text-[#c1c1c1] hover:text-[#161616] hover:bg-[#c1c1c1] border border-[#c1c1c1] px-[8px] py-[2px] rounded-2xl gap-[6px] cursor-pointer">
                        Refresh
                        <span className="flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 16 16" className="stroke-[#c1c1c1] group-hover:stroke-[#161616]">
	                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M13.1 12c-1.2 1.5-3 2.5-5.1 2.5c-3.6 0-6.5-2.9-6.5-6.5S4.4 1.5 8 1.5c2.2 0 4.1 1.1 5.3 2.7m.2-3.2v3c0 .3-.2.5-.5.5h-3" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <CategorySection />
                <CategorySection />
                <CategorySection />
            </div>
            <div className="h-[40px]"></div>
        </div>
    )
}