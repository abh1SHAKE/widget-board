export interface Widget {
    id: string;
    title: string;
    description: string;
}

export interface Category {
    id: string;
    name: string;
    widgets: Widget[];
}

export interface DashboardData {
    categories: Category[];
}

