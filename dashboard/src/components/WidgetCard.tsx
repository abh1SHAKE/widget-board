export default function WidgetCard({ isEmpty = false }) {
    function handleDelete() {
        console.log("DELETE WIDGET")
    }

    function handleAddWidget() {
        console.log("ADD WIDGET")
    }

    if (isEmpty) {
        return (
            <div className="flex flex-row justify-center items-center bg-[#181818] p-[16px] rounded-md w-full h-[180px]">
                <button 
                    onClick={handleAddWidget}
                    className="text-sm text-[#828282] hover:text-[#c1c1c1] border border-[#828282] hover:border-[#c1c1c1] px-[8px] py-[2px] rounded-2xl cursor-pointer"
                >
                    + Add Widget
                </button>
            </div>
        )
    }

    return (
        <div className="bg-[#181818] p-[16px] rounded-md w-full h-[180px] group">
            <div className="flex flex-row justify-between">
                Card title
                <span className="cursor-pointer invisible group-hover:visible" onClick={handleDelete}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
	                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="m7 7l10 10M7 17L17 7" />
                    </svg>
                </span>
            </div>
            <div>Random stuff</div>
        </div>
    )
}