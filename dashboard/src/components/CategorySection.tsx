import WidgetCard from "./WidgetCard"

type CategorySectionProps = {
    onAddWidget: () => void;
};

export default function CategorySection({ onAddWidget }: CategorySectionProps) {
    const arr = [1, 2, 3, 4, 5, 6, 7];

    const gridCols = arr.length < 2
        ? "repeat(auto-fit,minmax(360px,30vw))"
        : "repeat(auto-fit,minmax(360px,1fr))"

    return (
        <div className="py-[12px]">
            <div className="mb-4">Dashboard category</div>
            <div className={`grid gap-[20px] w-full`} style={{ gridTemplateColumns: gridCols }}>
                {arr.map((_, index) => (
                    <div key={index}>
                        <WidgetCard />
                    </div>
                ))}

                <WidgetCard isEmpty={true} onAddWidget={onAddWidget}/>
            </div>
        </div>
    )
}