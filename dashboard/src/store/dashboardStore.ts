import { create } from "zustand";
import type { Widget, DashboardData } from "../types/widget";

const initialData: DashboardData = {
	categories: [
		{
			id: 'cspm',
			name: 'CSPM Executive Dashboard',
			widgets: [
				{ 
					id: '1', 
					title: 'Cloud Accounts', 
					description: `Overview of all connected cloud accounts in one place.  
       				See services, regions, and ownership to track usage and changes.`
				},
				{ 
					id: '2', 
					title: 'Security Score', 
					description: `Your overall security posture represented as a single score.  
       				Combines vulnerabilities, configuration checks and policy adherence.` 
				},
				{ 
					id: '3', 
					title: 'Compliance Status', 
					description: `Shows your environment’s status against key compliance frameworks.  
       				Highlights passing and failing controls to simplify audits.` 
				},
				{ 
					id: '4', 
					title: 'Risk Assessment', 
					description: `Analysis of critical risks and vulnerabilities across infrastructure.  
       				Covers misconfigurations, outdated components and high-impact threats.` 
				},
				{ 
					id: '5', 
					title: 'Cost Optimization', 
					description: `Actionable tips to reduce cloud spending and optimize resources.  
       				Surfaces underutilized services and budget trends.`
				},
			]
		},
		{
			id: 'cwpp',
			name: 'CWPP Dashboard',
			widgets: [
				{ 
					id: '6', 
					title: 'Workload Protection', 
					description: `Status of all protected workloads across your cloud environment.  
       				See which systems are covered and where gaps exist.` 
				},
        		{ 
					id: '7', 
					title: 'Threat Detection', 
					description: `Real-time monitoring for malicious or suspicious activity.  
       				Aggregates alerts from multiple sources for quick analysis.`
				},
        		{ 
					id: '8', 
					title: 'Incident Response', 
					description: `Overview of active incidents and your team’s response actions.  
       				Track progress, assign tasks, and document outcomes.`
				},
			]
		},
		{
			id: 'registry',
			name: 'Registry Scan',
			widgets: [
				{ 
					id: '9', 
					title: 'Image Vulnerabilities', 
					description: `Results from security scans of your container images.  
       				Identify outdated packages, known CVEs and misconfigurations.` 
				},
        		{ 
					id: '10', 
					title: 'Registry Health', 
					description: `Results from security scans of your container images.  
       				Identify outdated packages, known CVEs and misconfigurations.`
				},
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