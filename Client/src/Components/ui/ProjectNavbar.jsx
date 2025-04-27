import React, { useState } from "react";

const tabs = [
  { label: "Trends", value: "trends" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Cloud", value: "cloud" },
  { label: "AI", value: "ai" },
  { label: "Tools", value: "tools" },
];

export default function TabNavigation() {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <nav>
      <ul
        role="tablist"
        className="flex relative bg-blue-gray-50 rounded-lg p-1 flex-row h-10 !w-12/12 md:w-[50rem] border border-white/25 bg-opacity-90"
      >
        {tabs.map((tab) => (
          <li
            key={tab.value}
            role="tab"
            onClick={() => setActiveTab(tab.value)}
            className={`flex items-center justify-center text-center w-full h-full relative bg-transparent py-1 px-2 text-blue-gray-900 antialiased font-sans text-base font-normal leading-relaxed select-none cursor-pointer ${
              activeTab === tab.value ? "font-semibold" : ""
            }`}
            data-value={tab.value}
          >
            <div className="z-20 text-inherit">{tab.label}</div>
            {activeTab === tab.value && (
              <div
                className="absolute inset-0 z-10 h-full bg-white rounded-md shadow"
                style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
