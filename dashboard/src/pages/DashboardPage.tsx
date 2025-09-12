import { useState } from "react";
import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";

export default function DashboardPage() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="text-[#c1c1c1]">
            <Navbar onSearch={setSearchQuery} />
            <Dashboard searchQuery={searchQuery} />
        </div>
    );
}