import { useState, useEffect } from "react";
import CategorySection from "./CategorySection";
import SideDrawer from "./SideDrawer";
import WidgetForm from "./WidgetForm";
import WidgetManager from "./WidgetManager";
import useDashboardStore from "../store/dashboardStore";
import type { FormData } from "../types/forms";
import type { DashboardData } from "../types/widget";

type DrawerMode = 'manager' | 'form';

interface DashboardProps {
    searchQuery: string;
}

export default function Dashboard({ searchQuery }: DashboardProps) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [drawerMode, setDrawerMode] = useState<DrawerMode>('manager');
    const [activeCategoryId, setActiveCategoryId] = useState<string>("");
    const { data, addWidget, refreshData } = useDashboardStore();
    const [filteredData, setFilteredData] = useState<DashboardData>(data);

    useEffect(() => {
        if (searchQuery) {
            const lowerCaseQuery = searchQuery.toLowerCase();
            const filteredCategories = data.categories.map(category => ({
                ...category,
                widgets: category.widgets.filter(widget => 
                    widget.title.toLowerCase().includes(lowerCaseQuery)
                )
            }));
            setFilteredData({ categories: filteredCategories });
        } else {
            setFilteredData(data);
        }
    }, [searchQuery, data]);

    function handleAddWidgetFromHeader() {
        console.log("HANDLE ADD WIDGET FROM HEADER");
        setDrawerMode('manager');
        setIsDrawerOpen(true);
    }

    function handleAddWidgetFromCategory(categoryId: string) {
        console.log("HANDLE ADD WIDGET FROM CATEGORY", categoryId);
        setActiveCategoryId(categoryId);
        setDrawerMode('form');
        setIsDrawerOpen(true);
    }

    function handleAddWidgetFromManager(categoryId: string) {
        console.log("HANDLE ADD WIDGET FROM MANAGER", categoryId);
        setActiveCategoryId(categoryId);
        setDrawerMode('form');
    }

    function handleRefresh() {
        console.log("HANDLE REFRESH");
        refreshData();
    }

    function handleCloseDrawer() {
        setIsDrawerOpen(false);
        setActiveCategoryId("");
        setDrawerMode('manager');
    }

    function handleWidgetSubmit(formData: FormData) {
        console.log("Widget data: ", formData);
        if (activeCategoryId) {
            addWidget(activeCategoryId, formData);
        }
        setIsDrawerOpen(false);
        setActiveCategoryId("");
        setDrawerMode('manager');
    }

    function handleFormCancel() {
        if (drawerMode === 'form') {
            if (activeCategoryId) {
                setDrawerMode('manager');
                setActiveCategoryId("");
            } else {
                handleCloseDrawer();
            }
        }
    }

    const drawerTitle = drawerMode === 'manager' ? 'Personalize your dashboard' : 'Add new widget';

    return (
        <div className="px-12">
            <div className="flex flex-row pt-8 pb-4 justify-between">
                <span className="flex flex-row items-center text-base font-bold cursor-default">CNAPP Dashboard</span>
                <div className="flex flex-row gap-6">
                    <button 
                        onClick={handleAddWidgetFromHeader}
                        className="text-[#c1c1c1] hover:text-[#161616] border border-[#c1c1c1] hover:bg-[#c1c1c1] px-[8px] py-[2px] rounded-2xl cursor-pointer"
                    >
                        Add Widget +
                    </button>
                    <button 
                        onClick={handleRefresh}
                        className="flex flex-row text-[#c1c1c1] hover:text-[#161616] hover:bg-[#c1c1c1] border border-[#c1c1c1] px-[8px] py-[2px] rounded-2xl gap-[6px] cursor-pointer"
                    >
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
                {filteredData.categories.map((category) => (
                    <CategorySection 
                        key={category.id}
                        category={category}
                        onAddWidget={(categoryId) => handleAddWidgetFromCategory(categoryId)}
                    />
                ))}
            </div>
            <div className="h-[40px]"></div>
            <SideDrawer 
                isOpen={isDrawerOpen}
                onClose={handleCloseDrawer}
                title={drawerTitle}
            >
                {drawerMode === 'manager' ? (
                    <WidgetManager onAddWidgetToCategory={handleAddWidgetFromManager} />
                ) : (
                    <WidgetForm 
                        onSubmit={handleWidgetSubmit}
                        onCancel={handleFormCancel}
                    />
                )}
            </SideDrawer>
        </div>
    );
}