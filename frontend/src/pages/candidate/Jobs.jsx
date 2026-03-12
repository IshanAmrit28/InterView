import React, { useEffect, useState } from 'react'

import FilterCard from '../../components/FilterCard'
import Job from '../../components/Job';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import useGetAllJobs from '../../hooks/useGetAllJobs';
import useGetAppliedJobs from '../../hooks/useGetAppliedJobs';

const Jobs = () => {
    useGetAllJobs();
    useGetAppliedJobs();
    const { allJobs = [] } = useSelector(store => store.job || {});

    return (
        <div className="min-h-screen">
            <div className='max-w-7xl mx-auto pt-5 pb-10 px-4'>
                <div className='flex flex-col md:flex-row gap-8'>
                    <div className='w-full md:w-1/4'>
                        <FilterCard />
                    </div>
                    {
                        allJobs.length <= 0 ? (
                            <div className='flex-1 flex flex-col items-center justify-center h-[60vh] text-slate-500'>
                                <span className='text-xl font-semibold text-slate-300'>Sorry, no jobs available currently.</span>
                                <p className='text-md mt-2'>Try adjusting your filters to find what you're looking for.</p>
                            </div>
                        ) : (
                            <div className='flex-1 h-[80vh] overflow-y-auto pb-10 pr-2 custom-scrollbar'>
                                <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
                                    {
                                        allJobs.map((job) => (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.3 }}
                                                key={job?._id}>
                                                <Job job={job} />
                                            </motion.div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Jobs