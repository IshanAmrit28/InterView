import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ClipboardCheck, Play } from 'lucide-react'

const AppliedJobTable = ({ limit = null, variant = "default" }) => {
    /** @type {{ allAppliedJobs: any[] }} */
    const {allAppliedJobs} = useSelector(/** @param {any} store */ (store)=>store.job);
    const navigate = useSelector(state => state.auth?.user ? null : null); // Simple trick or just use Link
    
    // Slice the jobs if a limit is provided
    const displayJobs = limit ? allAppliedJobs.slice(0, limit) : allAppliedJobs;

    if (variant === "sidebar") {
        return (
            <div className="flex flex-col gap-4">
                {(!displayJobs || displayJobs.length <= 0) ? (
                    <div className="text-center text-gray-500 py-8 italic text-sm">No recent applications</div>
                ) : (
                    <div className="space-y-3">
                        {displayJobs.map((appliedJob) => (
                            <div key={appliedJob._id} className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-all group">
                                <div className="flex items-center gap-3 overflow-hidden">
                                     <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center font-black text-indigo-400 text-xs border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
                                        {appliedJob?.job?.company?.name?.substring(0, 1)}
                                     </div>
                                     <div className="overflow-hidden">
                                        <div className="font-bold text-gray-200 text-sm truncate group-hover:text-indigo-400 transition-colors">
                                            {appliedJob?.job?.title}
                                        </div>
                                        <div className="text-[10px] text-gray-500 font-medium truncate">
                                            {appliedJob?.job?.company?.name}
                                        </div>
                                        {appliedJob?.assessment && (
                                            <div className={`text-[9px] font-bold mt-1 uppercase tracking-wider flex items-center gap-1 ${
                                                appliedJob.assessment.isSubmitted ? 'text-emerald-500' : 'text-amber-500'
                                            }`}>
                                                <div className={`w-1 h-1 rounded-full ${
                                                    appliedJob.assessment.isSubmitted ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500 animate-pulse'
                                                }`} />
                                                {appliedJob.assessment.isSubmitted ? 'Submitted' : 'Pending'}
                                            </div>
                                        )}
                                     </div>
                                </div>
                                <Badge 
                                    variant="outline" 
                                    className={`text-[9px] font-black px-2 py-0.5 rounded-md border shrink-0 ${
                                        appliedJob?.status === "rejected" ? 'bg-red-500/5 text-red-400 border-red-500/20' : 
                                        appliedJob?.status === 'pending' ? 'bg-gray-500/5 text-gray-400 border-gray-500/20' : 
                                        'bg-emerald-500/5 text-emerald-400 border-emerald-500/20'
                                    }`}
                                >
                                    {appliedJob?.status?.toUpperCase()}
                                </Badge>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow className="border-slate-800/50">
                        <TableHead className="text-gray-500 uppercase text-[10px] font-black tracking-widest">Date</TableHead>
                        <TableHead className="text-gray-500 uppercase text-[10px] font-black tracking-widest">Job Role</TableHead>
                        <TableHead className="text-gray-500 uppercase text-[10px] font-black tracking-widest">Company</TableHead>
                        <TableHead className="text-gray-500 uppercase text-[10px] font-black tracking-widest">Assessment</TableHead>
                        <TableHead className="text-gray-500 uppercase text-[10px] font-black tracking-widest">Next Steps</TableHead>
                        <TableHead className="text-right text-gray-500 uppercase text-[10px] font-black tracking-widest">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        (!displayJobs || displayJobs.length <= 0) ? (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center text-gray-500 py-10 italic">No applications found yet.</TableCell>
                            </TableRow>
                        ) : displayJobs.map((appliedJob) => (
                            <TableRow key={appliedJob._id} className="border-slate-800/50 hover:bg-white/5 transition-colors group">
                                <TableCell className="text-gray-400 font-medium text-xs">{appliedJob?.createdAt?.split("T")[0]}</TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-gray-200 group-hover:text-indigo-400 transition-colors">{appliedJob?.job?.title}</span>
                                        {appliedJob?.job?.status === 'inactive' && (
                                            <Badge variant="outline" className="text-[9px] bg-red-500/5 text-red-400 border-red-500/20 px-1.5 py-0 h-4">
                                                CLOSED
                                            </Badge>
                                        )}
                                    </div>
                                </TableCell>
                                <TableCell className="text-gray-400 text-sm">{appliedJob?.job?.company?.name}</TableCell>
                                <TableCell>
                                    {appliedJob.assessment ? (
                                        appliedJob.assessment.isSubmitted ? (
                                            <div className="flex items-center gap-2 text-emerald-500 text-xs font-bold uppercase tracking-tighter">
                                                <ClipboardCheck size={14} />
                                                Verified
                                            </div>
                                        ) : (
                                            <Link 
                                                to={`/candidate/assessment/${appliedJob.assessment._id}`}
                                                className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-black text-xs uppercase tracking-tighter transition-colors"
                                            >
                                                <Play size={12} fill="currentColor" />
                                                Start Test
                                            </Link>
                                        )
                                    ) : (
                                        <span className="text-gray-600 text-[10px] uppercase font-bold">Unassigned</span>
                                    )}
                                </TableCell>
                                <TableCell>
                                    <div className="text-xs text-gray-500 italic max-w-[150px] truncate">
                                        {appliedJob?.status === "rejected" ? "Review feedback soon" : 
                                         appliedJob?.status === "pending" ? "Awaiting HR Review" : 
                                         "Next interview stage"}
                                    </div>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Badge 
                                        variant="outline" 
                                        className={`text-[10px] font-black px-2.5 py-0.5 rounded-lg border shadow-sm ${
                                            appliedJob?.status === "rejected" ? 'bg-red-500/5 text-red-400 border-red-500/20' : 
                                            appliedJob?.status === 'pending' ? 'bg-gray-500/5 text-gray-400 border-gray-500/20' : 
                                            'bg-emerald-500/5 text-emerald-400 border-emerald-500/20'
                                        }`}
                                    >
                                        {appliedJob?.status?.toUpperCase()}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default AppliedJobTable