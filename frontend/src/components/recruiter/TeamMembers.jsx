import React, { useEffect, useState } from 'react';
import { getCompanyMembers } from '../../services/authServices';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { useSelector } from 'react-redux';

const TeamMembers = () => {
    const { user } = useSelector((store) => store.auth);
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const data = await getCompanyMembers();
                if (data.success) {
                    setMembers(data.members);
                }
            } catch (error) {
                console.error("Error fetching team members:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchMembers();

        // Optional: refresh every minute for "online" status
        const interval = setInterval(fetchMembers, 60000);
        return () => clearInterval(interval);
    }, []);

    const isOnline = (updatedAt) => {
        const lastActive = new Date(updatedAt);
        const now = new Date();
        const diffInMinutes = (now.getTime() - lastActive.getTime()) / 60000;
        return diffInMinutes < 5; // Online if active in last 5 mins
    };

    if (loading && members.length === 0) return <div className="text-gray-500 animate-pulse">Loading team...</div>;

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                Team Members
                <Badge variant="outline" className="text-[10px] bg-indigo-500/10 text-indigo-400 border-indigo-500/20">
                    {members.length}
                </Badge>
            </h2>
            <div className="grid gap-3 overflow-y-auto pr-1 custom-scrollbar max-h-[350px]">
                {members.length === 0 ? (
                    <p className="text-gray-500 text-sm italic">No other members yet.</p>
                ) : (
                    members.map((member) => (
                        <div key={member._id} className={`flex items-center justify-between p-3 rounded-xl bg-gray-800/30 border border-transparent hover:border-gray-700 transition-all group ${member._id === user?._id ? 'bg-indigo-500/10 border-indigo-500/20' : ''}`}>
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <Avatar className="h-10 w-10 border border-gray-700">
                                        <AvatarImage src={member.profile?.profilePhoto} />
                                        <AvatarFallback className="bg-indigo-900/50 text-indigo-200">
                                            {(member.fullname || member.userName || "?").charAt(0).toUpperCase()}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#09090b] ${isOnline(member.updatedAt) ? 'bg-green-500' : 'bg-gray-600'}`} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-gray-200 group-hover:text-white">
                                        {member.fullname || member.userName}
                                        {member._id === user?._id && <span className="ml-2 text-indigo-400 text-xs">(Me)</span>}
                                    </span>
                                    <span className="text-[10px] text-gray-500">
                                        {isOnline(member.updatedAt) ? 'Online' : 'Away'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default TeamMembers;
