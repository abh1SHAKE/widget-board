import { create } from "zustand";
import type { Widget, DashboardData } from "../types/widget";

const initialData: DashboardData = {
	categories: [
		{
			id: 'cspm',
			name: 'CSPM Executive Dashboard',
			widgets: [
				{ id: '1', title: 'Cloud Accounts', description: 'Connected cloud accounts overview' },
				{ id: '2', title: 'Security Score', description: 'Overall security posture score' },
				{ id: '3', title: 'Compliance Status', description: 'Compliance framework status' },
				{ id: '4', title: 'Risk Assessment', description: 'Critical risks and vulnerabilities' },
				{ id: '5', title: 'Cost Optimization', description: 'Cost saving recommendations' },
			]
		},
		{
			id: 'cwpp',
			name: 'CWPP Dashboard',
			widgets: [
				{ id: '6', title: 'Workload Protection', description: 'Protected workloads status' },
        		{ id: '7', title: 'Threat Detection', description: 'Real-time threat monitoring' },
        		{ id: '8', title: 'Incident Response', description: 'Active incidents and response' },
			]
		},
		{
			id: 'registry',
			name: 'Registry Scan',
			widgets: [
				{ id: '9', title: 'Image Vulnerabilities', description: 'Container image scan results' },
        		{ id: '10', title: 'Registry Health', description: 'Registry security health check' },
			]
		}
	]
};

interface DashboardStore {
	data: DashboardData;
	addWidget: (categoryId: string, widget: Omit<Widget, 'id'>) => void;
  	removeWidget: (categoryId: string, widgetId: string) => void;
  	refreshData: () => void;
}

const useDashboardStore = create<DashboardStore>((set) => ({
	data: initialData,

	addWidget: (categoryId: string, widget: Omit<Widget, 'id'>) => {
		const newWidget: Widget = {
			...widget,
			id: `widget_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
		};

		set((state) => ({
			data: {
				...state.data,
				categories: state.data.categories.map((category) =>
					category.id === categoryId
					? { ...category, widgets: [...category.widgets, newWidget] }
					: category
				)
			}
		}));
	},

	removeWidget: (categoryId: string, widgetId: string) => {
		set((state) => ({
			data: {
				...state.data,
				categories: state.data.categories.map((category) => 
					category.id === categoryId
					? { ...category, widgets: category.widgets.filter((w) => w.id !== widgetId) }
					: category
				)
			}
		}));
	},

	refreshData: () => {
		set({ data: initialData });
	}
}));

export default useDashboardStore;