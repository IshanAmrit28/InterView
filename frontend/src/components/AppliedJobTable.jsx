import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import { useSelector } from 'react-redux'

const AppliedJobTable = ({ limit = null }) => {
    /** @type {{ allAppliedJobs: any[] }} */
    const {allAppliedJobs} = useSelector(/** @param {any} store */ (store)=>store.job);
    
    // Slice the jobs if a limit is provided
    const displayJobs = limit ? allAppliedJobs.slice(0, limit) : allAppliedJobs;

    return (
        <div>
            <Table>
                {!limit && <TableCaption>A list of your applied jobs</TableCaption>}
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Job Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        (!displayJobs || displayJobs.length <= 0) ? (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center">You haven't applied to any jobs yet.</TableCell>
                            </TableRow>
                        ) : displayJobs.map((appliedJob) => (
                            <TableRow key={appliedJob._id}>
                                <TableCell>{appliedJob?.createdAt?.split("T")[0]}</TableCell>
                                <TableCell>{appliedJob?.job?.title}</TableCell>
                                <TableCell>{appliedJob?.job?.company?.name}</TableCell>
                                <TableCell className="text-right">
                                    <Badge variant="outline" className={`${appliedJob?.status === "rejected" ? 'bg-red-400' : appliedJob?.status === 'pending' ? 'bg-gray-400' : 'bg-green-400'}`}>
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