import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const LatestJobCards = ({job}) => {
    const navigate = useNavigate();
    const { allAppliedJobs } = useSelector(store => store.job);
    const isApplied = allAppliedJobs?.some(application => application.job?._id === job?._id);

    return (
        <div onClick={()=> navigate(`/candidate/description/${job._id}`)} className='p-5 rounded-md shadow-2xl bg-[#111b27] border border-slate-800 text-white cursor-pointer relative'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                    <p className='text-sm text-gray-500'>India</p>
                </div>
                {isApplied && (
                    <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 px-2 py-0">Applied</Badge>
                )}
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{job?.description?.length > 120 ? job?.description?.slice(0, 120) + "..." : job?.description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position} Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary}LPA</Badge>
            </div>

        </div>
    )
}

export default LatestJobCards