import React, { useState, useRef, useEffect } from 'react';
import { Search, X, ChevronDown, Check, Plus } from 'lucide-react';

const QuestionSelector = ({ allProblems, selectedIds, onSelect, onRemove, themeColor = "purple" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const dropdownRef = useRef(null);

    // Filter available problems (not selected and matches search)
    const availableProblems = allProblems.filter(p => 
        !selectedIds.includes(p._id) && 
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const selectedProblems = allProblems.filter(p => selectedIds.includes(p._id));

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const colorClasses = {
        purple: {
            border: "focus:border-purple-500",
            bg: "bg-purple-600",
            hover: "hover:bg-purple-700",
            text: "text-purple-400",
            lightBg: "bg-purple-500/10"
        },
        indigo: {
            border: "focus:border-indigo-500",
            bg: "bg-indigo-600",
            hover: "hover:bg-indigo-700",
            text: "text-indigo-400",
            lightBg: "bg-indigo-500/10"
        }
    };

    const activeColor = colorClasses[themeColor] || colorClasses.purple;

    return (
        <div className="space-y-4" ref={dropdownRef}>
            {/* Selected Questions Tags */}
            <div className="flex flex-wrap gap-2 min-h-[40px]">
                {selectedProblems.length === 0 ? (
                    <p className="text-gray-500 text-sm italic">No questions selected yet</p>
                ) : (
                    selectedProblems.map(p => (
                        <div key={p._id} className={`${activeColor.lightBg} border border-white/10 rounded-lg px-3 py-1.5 flex items-center gap-2 group animate-in fade-in zoom-in duration-200`}>
                            <span className="text-sm font-medium">{p.title}</span>
                            <button 
                                type="button"
                                onClick={() => onRemove(p._id)}
                                className="text-gray-500 hover:text-white transition-colors"
                            >
                                <X size={14} />
                            </button>
                        </div>
                    ))
                )}
            </div>

            {/* Dropdown Input */}
            <div className="relative">
                <div 
                    className={`flex items-center gap-2 w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 cursor-text transition-all ${isOpen ? 'border-' + themeColor + '-500 ring-1 ring-' + themeColor + '-500/20' : ''}`}
                    onClick={() => setIsOpen(true)}
                >
                    <Search size={18} className="text-gray-500" />
                    <input 
                        type="text"
                        placeholder="Search and select questions..."
                        className="bg-transparent border-none outline-none w-full text-white placeholder:text-gray-600"
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setIsOpen(true);
                        }}
                    />
                    <ChevronDown size={18} className={`text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </div>

                {/* Results Menu */}
                {isOpen && (
                    <div className="absolute z-50 w-full mt-2 bg-[#18181b] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-top-2 duration-200">
                        <div className="max-h-60 overflow-y-auto p-2 space-y-1 custom-scrollbar">
                            {availableProblems.length === 0 ? (
                                <div className="p-4 text-center text-gray-500 text-sm">
                                    {searchQuery ? "No matching questions found" : "All questions selected"}
                                </div>
                            ) : (
                                availableProblems.map(p => (
                                    <button
                                        key={p._id}
                                        type="button"
                                        className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all text-left group"
                                        onClick={() => {
                                            onSelect(p._id);
                                            setSearchQuery("");
                                            // Keep open for multiple selections if desired, or close? 
                                            // User said "select multiple in any order", so keeping open is better.
                                        }}
                                    >
                                        <div>
                                            <p className="font-medium text-gray-200 group-hover:text-white">{p.title}</p>
                                            <p className="text-xs text-gray-500">{p.difficulty} • {p.tags?.join(", ")}</p>
                                        </div>
                                        <div className={`opacity-0 group-hover:opacity-100 p-1 rounded-full ${activeColor.lightBg} ${activeColor.text}`}>
                                            <Plus size={16} />
                                        </div>
                                    </button>
                                ))
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuestionSelector;
