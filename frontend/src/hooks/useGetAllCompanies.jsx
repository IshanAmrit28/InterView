import { setCompanies } from '../redux/companySlice';
import { getCompanies, fetchPublicCompanies } from '../services/companyServices';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useGetAllCompanies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCompaniesData = async () => {
      try {
        // Try authorized fetch first (for Admins/Recruiters)
        const res = await getCompanies();
        if (res.data.success) {
          dispatch(setCompanies(res.data.companies || []));
        }
      } catch (error) {
        const status = error.response?.status;
        
        // If 403 (Candidate/Forbidden) or 401 (Unauthenticated), use Public Fallback
        if (status === 403 || status === 401) {
          try {
            const data = await fetchPublicCompanies();
            dispatch(setCompanies(data.companies || []));
          } catch (fallbackError) {
            console.error("All fetch attempts failed", fallbackError);
          }
        }
      }
    };
    fetchCompaniesData();
  }, [dispatch]);
};

export default useGetAllCompanies;