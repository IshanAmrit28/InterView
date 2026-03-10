import React, { useState } from 'react'
import { Label } from '../../components/ui/label'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import { useNavigate } from 'react-router-dom'
import { registerCompany } from '../../services/companyServices'
import { toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { setSingleCompany } from '../../redux/companySlice'

const AdminCompanyCreate = () => {
    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState("");
    const dispatch = useDispatch();

    const registerNewCompany = async () => {
        if (!companyName.trim()) {
            toast.error("Company name is required");
            return;
        }
        try {
            const res = await registerCompany({ companyName });
            if(res?.data?.success){
                dispatch(setSingleCompany(res.data.company));
                toast.success(res.data.message);
                const companyId = res?.data?.company?._id;
                navigate(`/admin/companies/${companyId}`);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Failed to create company");
        }
    }

    return (
        <div className="w-full relative z-10 flex items-center justify-center py-10">
            <div className='max-w-2xl w-full mx-auto relative z-10'>
                <div className="bg-gray-900/60 border border-gray-800 rounded-3xl p-8 backdrop-blur-md shadow-2xl">
                    <div className='mb-10'>
                        <h1 className='font-bold text-3xl mb-2'>Register New Company</h1>
                        <p className='text-gray-400'>Enter the name of the company you want to add to the platform.</p>
                    </div>

                    <div className="space-y-2">
                        <Label className="text-gray-300 font-medium">Company Name</Label>
                        <Input
                            type="text"
                            className="w-full bg-gray-800/50 border-gray-700 focus:border-indigo-500 text-white py-3 rounded-xl"
                            placeholder="e.g. Google, Microsoft, StartupX"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                        />
                    </div>

                    <div className='flex items-center gap-4 mt-10'>
                        <Button 
                            variant="outline" 
                            onClick={() => navigate("/admin/companies")}
                            className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                        >
                            Cancel
                        </Button>
                        <Button 
                            onClick={registerNewCompany}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white"
                        >
                            Continue
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminCompanyCreate;
