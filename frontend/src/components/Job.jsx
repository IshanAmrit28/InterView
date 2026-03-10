import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { useSelector } from 'react-redux'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = ({job}) => {
    const navigate = useNavigate();
    const { allAppliedJobs } = useSelector(store => store.job);
    const isApplied = allAppliedJobs?.some(application => application.job?._id === job?._id);

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference/(1000*24*60*60));
    }
    
    return (
        <div className='p-5 rounded-md shadow-2xl bg-[#111b27] border border-slate-800 text-white'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'>{job?.createdAt ? (daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`) : "N/A"}</p>
                <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
            </div>

            <div className='flex items-center gap-2 my-2'>
                <Button className="p-6" variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src={job?.company?.logo} />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                    <p className='text-sm text-gray-500'>India</p>
                </div>
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
            <div className='flex items-center gap-4 mt-4'>
                <Button onClick={()=> navigate(`/candidate/description/${job?._id}`)} variant="outline">Details</Button>
                {
                    isApplied ? (
                        <Button className="bg-emerald-600 cursor-default opacity-90 hover:bg-emerald-600">Applied</Button>
                    ) : (
                        <Button onClick={()=> navigate(`/candidate/description/${job?._id}`)} className="bg-[#7209b7]">Apply Now</Button>
                    )
                }
            </div>
        </div>
    )
}

export default Job