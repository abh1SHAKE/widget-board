import useDashboardStore from "../store/dashboardStore";
import type { Category } from "../types/widget";
import WidgetCard from "./WidgetCard"

type CategorySectionProps = {
    category: Category;
    onAddWidget: (categoryId: string) => void;
};

export default function CategorySection({ category, onAddWidget }: CategorySectionProps) {
    const { removeWidget } = useDashboardStore();

    const gridCols = category.widgets.length < 2
        ? "repeat(auto-fit,minmax(360px,30vw))"
        : "repeat(auto-fit,minmax(360px,1fr))"
    
    function handleDeleteWidget(widgetId: string) {
        removeWidget(category.id, widgetId);
    }

    function handleAddWidget() {
        onAddWidget(category.id);
    }

    return (
        <div className="py-[12px]">
            <div className="mb-4">{ category.name }</div>
            <div className={`grid gap-[20px] w-full`} style={{ gridTemplateColumns: gridCols }}>
                {category.widgets.map((widget) => (
                    <WidgetCard 
                        key={widget.id}
                        widget={widget}
                        onDelete={() => handleDeleteWidget(widget.id)}
                    />
                ))}

                <WidgetCard isEmpty={true} onAddWidget={handleAddWidget}/>
            </div>
        </div>
    )
}