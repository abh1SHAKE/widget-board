import WidgetCard from "./WidgetCard"

export default function CategorySection() {
    const arr = [1, 2, 3, 4, 5]
    return (
        <div className="py-[12px]">
            <div className="mb-4">Dashboard category</div>
            <div className="grid grid-cols-4 gap-[20px] w-full">
                {arr.map((_, index) => (
                    <div key={index}>
                        <WidgetCard />
                    </div>
                ))}

                <WidgetCard isEmpty={true}/>
            </div>
        </div>
    )
}