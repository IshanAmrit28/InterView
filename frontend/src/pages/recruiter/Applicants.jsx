import React, { useEffect } from 'react'

import ApplicantsTable from '../../components/recruiter/ApplicantsTable'
import { useParams, useNavigate } from 'react-router-dom';
import { getApplicants } from '../../services/applicationServices';
import { useDispatch, useSelector } from 'react-redux';
import { setAllApplicants } from '../../redux/applicationSlice';
import { ArrowLeft } from 'lucide-react';

const Applicants = () => {
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {applicants} = useSelector(store=>store.application);

    useEffect(() => {
        const fetchAllApplicants = async () => {
            try {
                const res = await getApplicants(params.id);
                dispatch(setAllApplicants(res.data.job));
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllApplicants();
    }, []);
    return (
        <div className="min-h-screen bg-[#09090b] text-white pt-24 px-4 md:px-8 pb-12 font-sans relative">
            <div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-900/10 blur-[120px] pointer-events-none" />
            <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[120px] pointer-events-none" />

            <div className='max-w-7xl mx-auto my-10 relative z-10'>
                <button 
                    onClick={() => navigate("/recruiter/jobs")}
                    className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-bold mb-6 group transition-all"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Jobs
                </button>
                <div className="bg-gray-900/60 border border-gray-800 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-2xl">
                    <h1 className='font-bold text-2xl mb-6'>Applicants ({applicants?.applications?.length || 0})</h1>
                    <ApplicantsTable />
                </div>
            </div>
        </div>
    )
}

export default Applicants