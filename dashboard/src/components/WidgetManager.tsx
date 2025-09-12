import { useState } from "react";
import useDashboardStore from "../store/dashboardStore";
import type { Widget } from "../types/widget";

type WidgetManagerProps = {
    onAddWidgetToCategory: (categoryId: string) => void;
};

export default function WidgetManager({ onAddWidgetToCategory }: WidgetManagerProps) {
    const { data, removeWidget } = useDashboardStore();
    const [activeTab, setActiveTab] = useState(data.categories[0]?.id || "");

    const activeCategory = data.categories.find(cat => cat.id === activeTab);

    function handleDeleteWidget(widgetId: string) {
        if (activeCategory) {
            removeWidget(activeCategory.id, widgetId);
        }
    }

    function handleAddWidget() {
        if (activeCategory) {
            onAddWidgetToCategory(activeCategory.id);
        }
    }

    return (
        <div className="flex flex-col h-full">
            <div className="border-b border-[#606060] mb-6">
                <div className="flex space-x-1 overflow-x-scroll no-scrollbar">
                    {data.categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveTab(category.id)}
                            className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors flex-shrink-0 ${
                                activeTab === category.id
                                    ? 'bg-[#c1c1c1] text-[#161616]'
                                    : 'text-[#c1c1c1] hover:text-white hover:bg-[#2a2a2a]'
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>

            {activeCategory && (
                <div className="flex flex-col flex-1">
                    <div className="mb-4">
                        <button
                            onClick={handleAddWidget}
                            className="w-full bg-[#c1c1c1] text-[#161616] font-semibold py-3 px-4 rounded-lg hover:bg-[#a0a0a0] transition-colors"
                        >
                            + Add Widget to {activeCategory.name}
                        </button>
                    </div>

                    <div className="flex-1">
                        {activeCategory.widgets.length === 0 ? (
                            <div className="text-center text-[#828282] py-8">
                                <p>No widgets in this category</p>
                                <p className="text-sm mt-2">Click "Add Widget" to get started</p>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {activeCategory.widgets.map((widget) => (
                                    <WidgetListItem
                                        key={widget.id}
                                        widget={widget}
                                        onDelete={() => handleDeleteWidget(widget.id)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

type WidgetListItemProps = {
    widget: Widget;
    onDelete: () => void;
};

function WidgetListItem({ widget, onDelete }: WidgetListItemProps) {
    return (
        <div className="bg-[#2a2a2a] rounded-lg p-4 group hover:bg-[#333333] transition-colors">
            <div className="flex items-start justify-between">
                <div className="flex-1 overflow-hidden">
                    <h3 className="font-medium text-[#c1c1c1] text-sm mb-1">
                        {widget.title}
                    </h3>
                    <p className="text-[#828282] text-xs leading-relaxed truncate">
                        {widget.description}
                    </p>
                </div>
                <button
                    onClick={onDelete}
                    className="ml-3 p-1 text-[#828282] hover:text-[#ff6b6b] opacity-0 group-hover:opacity-100 transition-all"
                    title="Delete widget"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                </button>
            </div>
        </div>
    );
}