import React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;

    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;
        
        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            let start = Math.max(1, currentPage - 2);
            let end = Math.min(totalPages, start + maxVisiblePages - 1);
            
            if (end === totalPages) {
                start = Math.max(1, end - maxVisiblePages + 1);
            }
            
            for (let i = start; i <= end; i++) pages.push(i);
        }
        return pages;
    };

    return (
        <div className="flex items-center justify-center gap-2 mt-8 py-4">
            <div className="flex items-center bg-gray-900/50 border border-gray-800 rounded-2xl p-1 shadow-inner">
                <button
                    onClick={() => onPageChange(1)}
                    disabled={currentPage === 1}
                    className="p-2 text-gray-500 hover:text-white disabled:opacity-20 transition-all hover:bg-gray-800 rounded-xl"
                    title="First Page"
                >
                    <ChevronsLeft size={20} />
                </button>
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 text-gray-500 hover:text-white disabled:opacity-20 transition-all hover:bg-gray-800 rounded-xl mr-1"
                    title="Previous Page"
                >
                    <ChevronLeft size={20} />
                </button>

                <div className="flex items-center gap-1">
                    {getPageNumbers().map((number) => (
                        <button
                            key={number}
                            onClick={() => onPageChange(number)}
                            className={`min-w-[40px] h-10 px-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                                currentPage === number
                                    ? "bg-red-600 text-white shadow-[0_0_15px_-5px_rgba(220,38,38,0.5)] scale-105"
                                    : "text-gray-500 hover:text-gray-300 hover:bg-gray-800/50"
                            }`}
                        >
                            {number}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 text-gray-500 hover:text-white disabled:opacity-20 transition-all hover:bg-gray-800 rounded-xl ml-1"
                    title="Next Page"
                >
                    <ChevronRight size={20} />
                </button>
                <button
                    onClick={() => onPageChange(totalPages)}
                    disabled={currentPage === totalPages}
                    className="p-2 text-gray-500 hover:text-white disabled:opacity-20 transition-all hover:bg-gray-800 rounded-xl"
                    title="Last Page"
                >
                    <ChevronsRight size={20} />
                </button>
            </div>
            <div className="text-xs font-mono text-gray-500 ml-4 hidden sm:block">
                Page {currentPage} of {totalPages}
            </div>
        </div>
    );
};

export default Pagination;
