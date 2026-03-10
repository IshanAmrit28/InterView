import React, { useEffect, useState } from 'react'

import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import CompaniesTable from '../../components/recruiter/CompaniesTable'
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '../../hooks/useGetAllCompanies'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchCompanyByText } from '../../redux/companySlice'

const AdminCompanies = () => {
    useGetAllCompanies();
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const { user } = useSelector((store) => store.auth);

  useEffect(() => {
    dispatch(setSearchCompanyByText(input));
  }, [input, dispatch]);

  return (
    <div className="w-full relative z-10 px-4 md:px-8">
      <div className='max-w-6xl mx-auto my-10'>
        <div className='flex items-center justify-between my-5'>
          <Input
            className="w-fit bg-gray-800/50 border-gray-700 focus:border-indigo-500 text-white"
            placeholder="Filter by name"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button 
              onClick={() => navigate("/admin/companies/create")} 
              className="bg-indigo-600 hover:bg-indigo-700 text-white"
          >
              New Company
          </Button>
        </div>
        <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 backdrop-blur-md shadow-2xl">
            <CompaniesTable/>
        </div>
      </div>
    </div>
  )
}

export default AdminCompanies
