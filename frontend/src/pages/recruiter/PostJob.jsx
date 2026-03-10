// @ts-nocheck
import React, { useState } from 'react'

import { Label } from '../../components/ui/label'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import { useSelector } from 'react-redux'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'
import { postJob } from '../../services/jobServices'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import useGetAllCompanies from '../../hooks/useGetAllCompanies'

const PostJob = () => {
    useGetAllCompanies();

    const [input, setInput] = useState({
        title: "",
        description: "",
        requirements: "",
        salary: "",
        location: "",
        jobType: "",
        experience: "",
        position: 0,
        companyId: ""
    });
    const [loading, setLoading]= useState(false);
    const navigate = useNavigate();

    const { companies } = useSelector(/** @type {any} */ store => store.company);
    const { user } = useSelector(/** @type {any} */ store => store.auth);

    useEffect(() => {
        if (companies && companies.length === 1 && !input.companyId) {
            setInput(prev => ({ ...prev, companyId: companies[0]._id }));
        } else if (companies && companies.length > 0 && user?.company && !input.companyId) {
            // For recruiters, prioritize their linked company
            const recruiterCompany = companies.find(c => c._id === user.company);
            if (recruiterCompany) setInput(prev => ({ ...prev, companyId: recruiterCompany._id }));
        }
    }, [companies, user, input.companyId]);

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const selectChangeHandler = (value) => {
        const selectedCompany = companies.find((company)=> company.name.toLowerCase() === value);
        setInput({...input, companyId:selectedCompany?._id || ""});
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const { title, description, requirements, salary, location, jobType, experience, position, companyId } = input;
        
        if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
            toast.error("Please fill in all required fields including company.");
            return;
        }

        try {
            setLoading(true);
            const res = await postJob(input);
            if(res.data.success){
                toast.success(res.data.message);
                navigate("/recruiter/jobs");
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to post job");
        } finally{
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-[#09090b] text-white pt-24 px-4 md:px-8 pb-12 font-sans relative flex items-start justify-center">
            <div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-900/10 blur-[120px] pointer-events-none" />
            <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[120px] pointer-events-none" />

            <div className='max-w-3xl w-full mx-auto relative z-10 mt-8'>
                <form onSubmit={submitHandler} className='bg-gray-900/60 border border-gray-800 rounded-3xl p-8 backdrop-blur-md shadow-2xl'>
                    <div className="mb-8 border-b border-gray-800 pb-6">
                        <h1 className="text-3xl font-bold">Post a New Job</h1>
                        <p className="text-gray-400 mt-2">Publish a job for your company.</p>
                    </div>
                
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className="space-y-2">
                            <Label className="text-gray-300">Job Title</Label>
                            <Input
                                type="text"
                                name="title"
                                value={input.title}
                                onChange={changeEventHandler}
                                className="bg-gray-800/50 border-gray-700 text-white focus:border-indigo-500 rounded-xl"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-gray-300">Description</Label>
                            <Input
                                type="text"
                                name="description"
                                value={input.description}
                                onChange={changeEventHandler}
                                className="bg-gray-800/50 border-gray-700 text-white focus:border-indigo-500 rounded-xl"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-gray-300">Requirements (Comma Separated)</Label>
                            <Input
                                type="text"
                                name="requirements"
                                value={input.requirements}
                                onChange={changeEventHandler}
                                className="bg-gray-800/50 border-gray-700 text-white focus:border-indigo-500 rounded-xl"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-gray-300">Salary Range</Label>
                            <Input
                                type="text"
                                name="salary"
                                value={input.salary}
                                onChange={changeEventHandler}
                                className="bg-gray-800/50 border-gray-700 text-white focus:border-indigo-500 rounded-xl"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-gray-300">Location</Label>
                            <Input
                                type="text"
                                name="location"
                                value={input.location}
                                onChange={changeEventHandler}
                                className="bg-gray-800/50 border-gray-700 text-white focus:border-indigo-500 rounded-xl"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-gray-300">Job Type</Label>
                            <Input
                                type="text"
                                name="jobType"
                                value={input.jobType}
                                onChange={changeEventHandler}
                                className="bg-gray-800/50 border-gray-700 text-white focus:border-indigo-500 rounded-xl"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-gray-300">Experience Level</Label>
                            <Input
                                type="text"
                                name="experience"
                                value={input.experience}
                                onChange={changeEventHandler}
                                className="bg-gray-800/50 border-gray-700 text-white focus:border-indigo-500 rounded-xl"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-gray-300">No of Positions</Label>
                            <Input
                                type="number"
                                name="position"
                                value={input.position}
                                onChange={changeEventHandler}
                                className="bg-gray-800/50 border-gray-700 text-white focus:border-indigo-500 rounded-xl"
                            />
                        </div>

                        <div className="space-y-2 md:col-span-2">
                            <Label className="text-gray-300">Company</Label>
                            {companies.length > 0 ? (
                                <Select onValueChange={(value) => setInput({...input, companyId: value})} value={input.companyId}>
                                    <SelectTrigger className="w-full bg-gray-800/50 border-gray-700 text-white focus:border-indigo-500 rounded-xl">
                                        <SelectValue placeholder="Select a Company" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-gray-900 border-gray-800 text-white">
                                        <SelectGroup>
                                            {companies.map((company) => (
                                                <SelectItem key={company._id} value={company._id} className="hover:bg-gray-800 focus:bg-gray-800">
                                                    {company.name}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            ) : (
                                <p className='text-red-400 text-sm'>Please register a company first before posting a job.</p>
                            )}
                        </div>
                    </div> 
                    {
                        loading 
                        ? <Button className="w-full mt-8 bg-indigo-600 text-white rounded-xl py-4 hover:bg-indigo-600" disabled> <Loader2 className='mr-2 h-5 w-5 animate-spin' /> Posting... </Button> 
                        : <Button type="submit" disabled={companies.length === 0} className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-4 flex items-center justify-center text-lg shadow-[0_0_15px_rgba(79,70,229,0.3)] disabled:opacity-50">Post New Job</Button>
                    }
                </form>
            </div>
        </div>
    )
}

export default PostJob