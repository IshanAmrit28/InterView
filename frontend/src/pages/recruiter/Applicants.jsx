import React, { useEffect } from 'react'

import { setAllApplicants, setAssessment } from '../../redux/applicationSlice';
import { ArrowLeft, Brain, Clock, Target, Users } from 'lucide-react';
import { Badge } from '../../components/ui/badge';

const Applicants = () => {
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { applicants, assessment } = useSelector(store=>store.application);

    useEffect(() => {
        const fetchAllApplicants = async () => {
            try {
                const res = await getApplicants(params.id);
                dispatch(setAllApplicants(res.data.job));
                dispatch(setAssessment(res.data.assessment));
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllApplicants();
    }, [params.id, dispatch]);

    return (
        <div className="min-h-screen bg-[#09090b] text-white pt-24 px-4 md:px-8 pb-12 font-sans relative">
            <div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-900/10 blur-[120px] pointer-events-none" />
            <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[120px] pointer-events-none" />

            <div className='max-w-7xl mx-auto my-10 relative z-10'>
                <div className="flex items-center justify-between mb-8">
                    <button 
                        onClick={() => navigate("/recruiter/jobs")}
                        className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-bold group transition-all"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Jobs
                    </button>
                </div>

                {assessment && (
                    <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-2xl mb-8 border-l-4 border-l-indigo-500">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <Brain className="text-indigo-400" size={24} />
                                    <h2 className="text-2xl font-bold">{assessment.title}</h2>
                                    <Badge variant="outline" className="bg-indigo-500/10 text-indigo-400 border-indigo-500/20">Active Assessment</Badge>
                                </div>
                                <p className="text-gray-400 italic">"{assessment.description}"</p>
                            </div>
                            
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-indigo-600/10 flex items-center justify-center border border-indigo-500/20">
                                        <Target size={20} className="text-indigo-400" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-500 uppercase font-bold">Max Score</p>
                                        <p className="text-lg font-bold text-white">{assessment.maxScore}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-purple-600/10 flex items-center justify-center border border-purple-500/20">
                                        <Clock size={20} className="text-purple-400" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-500 uppercase font-bold">Duration</p>
                                        <p className="text-lg font-bold text-white">{assessment.duration}m</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-pink-600/10 flex items-center justify-center border border-pink-500/20">
                                        <Users size={20} className="text-pink-400" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-500 uppercase font-bold">Attempts</p>
                                        <p className="text-lg font-bold text-white">{assessment.totalAttempts || 0}</p>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => navigate(`/recruiter/reports?assessmentId=${assessment._id}`)}
                                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-lg shadow-indigo-600/20"
                                >
                                    View Reports
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div className="bg-gray-900/60 border border-gray-800 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-2xl">
                    <h1 className='font-bold text-2xl mb-6'>Applicants ({applicants?.applications?.length || 0})</h1>
                    <ApplicantsTable />
                </div>
            </div>
        </div>
    )
}

export default Applicants