import { useState } from "react"
import type { FormData } from "../types/forms";

type WidgetFormProps = {
    onSubmit: (data: FormData) => void;
    onCancel: () => void;
};

export default function WidgetForm({ onSubmit, onCancel }: WidgetFormProps) {
    const [formData, setFormData] = useState<FormData>({
        title: "",
        description: ""
    });

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleFormSubmit(e: React.FormEvent) {
        e.preventDefault();
        onSubmit(formData);

        setFormData({ title: "", description: ""});
    }

    function handleCancel() {
        setFormData({ title: "", description: "" });
        onCancel();
    }

    return (
        <form onSubmit={handleFormSubmit} className="flex flex-col justify-between h-full space-y-6">
            <div>
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-[#c1c1c1] mb-2">
                        Widget title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full bg-[#161616] placeholder-[#606060] px-3 py-2 border border-[#606060] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c1c1c1]"
                        placeholder="Enter widget title"
                        required
                    >
                    </input>
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-[#c1c1c1] mb-2 mt-4">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        rows={6}
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full bg-[#161616] placeholder-[#606060] px-3 py-2 border border-[#606060] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c1c1c1]"
                        placeholder="Enter widget description"
                        required
                    >
                    </textarea>
                </div>
            </div>

            <div className="flex gap-3 pt-4">
                <button
                    title="Add widget"
                    type="submit"
                    className="flex-1 bg-[#c1c1c1] text-[#161616] font-semibold py-2 px-4 rounded-[50px] hover:bg-[#606060]"
                >
                    Add widget
                </button>
                <button
                    title="Cancel"
                    type="button"
                    onClick={handleCancel}
                    className="flex-1 bg-[#161616] text-[#c1c1c1] font-semibold py-2 px-4 rounded-[50px] hover:text-[#606060] hover:border-[#606060] border-2 border-[#c1c1c1]"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}