import React, { useState, useEffect } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { useDispatch, useSelector } from 'react-redux'
import { setFilterCriteria, clearFilters } from '../redux/jobSlice'
import { X, MapPin, Briefcase, Building2 } from 'lucide-react'
import api from '@/services/api'
import { JOB_API_END_POINT } from '@/utils/constant'

const FilterCard = () => {
    const dispatch = useDispatch();
    const { filterCriteria = { location: "", company: "", experience: "", salary: "" } } = useSelector(store => store.job || {});
    
    const [locations, setLocations] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);

    const experienceOptions = ["Entry Level", "1-3 years", "3-5 years", "5+ years"];

    useEffect(() => {
        const fetchFilters = async () => {
            try {
                setLoading(true);
                const [locationRes, companyRes] = await Promise.all([
                    api.get(`${JOB_API_END_POINT}/filters/locations`),
                    api.get(`${JOB_API_END_POINT}/filters/companies`)
                ]);

                if (locationRes.data.success) {
                    setLocations(locationRes.data.locations);
                }
                if (companyRes.data.success) {
                    setCompanies(companyRes.data.companies);
                }
            } catch (error) {
                console.error("Error fetching filter options:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFilters();
    }, []);

    const handleSelectChange = (field, value) => {
        // 'all' is our custom clear value
        if (value === 'all') {
            dispatch(setFilterCriteria({ [field]: "" }));
        } else {
            dispatch(setFilterCriteria({ [field]: value }));
        }
    }

    const handleClearAll = () => {
        dispatch(clearFilters());
    }

    const hasFilters = filterCriteria ? Object.values(filterCriteria).some(v => v !== "") : false;

    if (loading) {
        return (
            <div className='w-full bg-[#111b27] p-5 rounded-2xl border border-slate-800 text-white shadow-2xl animate-pulse'>
                <div className="h-6 bg-slate-800 rounded w-1/2 mb-6"></div>
                <div className="space-y-4">
                    <div className="h-10 bg-slate-800 rounded w-full"></div>
                    <div className="h-10 bg-slate-800 rounded w-full"></div>
                    <div className="h-10 bg-slate-800 rounded w-full"></div>
                </div>
            </div>
        );
    }

    return (
        <div className='w-full bg-[#111b27] p-5 rounded-2xl border border-slate-800 text-white shadow-2xl sticky top-24'>
            <div className='flex items-center justify-between mb-6'>
                <h1 className='font-bold text-xl tracking-tight'>Filter Jobs</h1>
                {hasFilters && (
                    <button 
                        onClick={handleClearAll}
                        className='text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors'
                    >
                        <X size={14} /> Clear all
                    </button>
                )}
            </div>

            <div className='space-y-5'>
                {/* Location Filter */}
                <div className='space-y-2'>
                    <label className='text-sm font-medium text-slate-300 flex items-center gap-2'>
                        <MapPin size={16} className="text-blue-500" /> Location
                    </label>
                    <Select value={filterCriteria.location || ""} onValueChange={(value) => handleSelectChange('location', value)}>
                        <SelectTrigger className="w-full bg-slate-900 border-slate-700 text-slate-200 focus:ring-blue-500">
                            <SelectValue placeholder="All Locations" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-900 border-slate-800 text-slate-200">
                            <SelectGroup>
                                <SelectItem value="all" className="focus:bg-slate-800 focus:text-white">All Locations</SelectItem>
                                {locations.map((loc) => (
                                    <SelectItem key={loc} value={loc} className="focus:bg-slate-800 focus:text-white">{loc}</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                {/* Experience Filter */}
                <div className='space-y-2'>
                    <label className='text-sm font-medium text-slate-300 flex items-center gap-2'>
                        <Briefcase size={16} className="text-purple-500" /> Experience
                    </label>
                    <Select value={filterCriteria.experience || ""} onValueChange={(value) => handleSelectChange('experience', value)}>
                        <SelectTrigger className="w-full bg-slate-900 border-slate-700 text-slate-200 focus:ring-purple-500">
                            <SelectValue placeholder="All Experience Levels" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-900 border-slate-800 text-slate-200">
                            <SelectGroup>
                                <SelectItem value="all" className="focus:bg-slate-800 focus:text-white">All Experience Levels</SelectItem>
                                {experienceOptions.map((exp) => (
                                    <SelectItem key={exp} value={exp} className="focus:bg-slate-800 focus:text-white">{exp}</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                {/* Company Filter */}
                <div className='space-y-2'>
                    <label className='text-sm font-medium text-slate-300 flex items-center gap-2'>
                        <Building2 size={16} className="text-green-500" /> Company
                    </label>
                    <Select value={filterCriteria.company || ""} onValueChange={(value) => handleSelectChange('company', value)}>
                        <SelectTrigger className="w-full bg-slate-900 border-slate-700 text-slate-200 focus:ring-green-500">
                            <SelectValue placeholder="All Companies" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-900 border-slate-800 text-slate-200">
                            <SelectGroup>
                                <SelectItem value="all" className="focus:bg-slate-800 focus:text-white">All Companies</SelectItem>
                                {companies.map((comp) => (
                                    <SelectItem key={comp._id} value={comp._id} className="focus:bg-slate-800 focus:text-white">{comp.name}</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    )
}

export default FilterCard