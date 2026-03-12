import React from 'react'
import { Button } from './ui/button'
import { MapPin } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { useSelector } from 'react-redux'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = ({ job, isSelected, onClick }) => {
    const navigate = useNavigate();
    const { allAppliedJobs } = useSelector(store => store.job);
    const isApplied = allAppliedJobs?.some(application => application.job?._id === job?._id);

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
    }

    return (
        <div 
            onClick={onClick}
            className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 bg-[#111b27] border ${isSelected ? 'border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]' : 'border-slate-800'} text-white hover:border-slate-700 flex flex-col h-full min-h-[280px] w-full max-w-[320px] mx-auto`}
        >
            <div className='flex items-start justify-between mb-4'>
                <Avatar className="h-12 w-12 border border-slate-700 rounded-xl">
                    <AvatarImage src={job?.company?.logo} />
                </Avatar>
                <p className='text-[10px] whitespace-nowrap text-slate-500 bg-slate-800/50 px-2 py-1 rounded-full'>
                    {job?.createdAt ? (daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)}d ago`) : "N/A"}
                </p>
            </div>

            <div className='mb-4 space-y-1'>
                <h1 className='font-bold text-lg leading-tight text-white group-hover:text-blue-400 transition-colors'>{job?.title}</h1>
                <p className='text-sm text-slate-400 font-medium'>{job?.company?.name}</p>
                <p className='text-xs text-slate-500 flex items-center gap-1'>
                    <MapPin size={12} /> {job?.location || 'India'}
                </p>
            </div>

            <div className='flex flex-wrap gap-2 mt-auto mb-6'>
                <Badge className='text-[10px] bg-blue-500/10 text-blue-400 border-none' variant="outline">{job?.position} Positions</Badge>
                <Badge className='text-[10px] bg-purple-500/10 text-purple-400 border-none' variant="outline">{job?.salary}LPA</Badge>
            </div>
            
            <div className='flex items-center gap-2 mt-auto pt-4 border-t border-slate-800/50'>
                <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 h-10 text-xs border-slate-700 text-slate-300 hover:bg-slate-800"
                    onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/candidate/description/${job?._id}`);
                    }}
                >
                    Details
                </Button>
                {
                    isApplied ? (
                        <Badge className="flex-1 h-10 justify-center bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Applied</Badge>
                    ) : (
                        <Button 
                            size="sm" 
                            className="flex-1 h-10 text-xs bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20"
                            onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/candidate/description/${job?._id}`);
                            }}
                        >
                            Apply
                        </Button>
                    )
                }
            </div>
        </div>
    )
}

export default Job