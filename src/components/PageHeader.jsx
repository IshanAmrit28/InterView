import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import './PageHeader.css'

function PageHeader({ title, subtitle, showBack = true, backTo = '/dashboard' }) {
    const navigate = useNavigate()

    return (
        <div className="page-header">
            {showBack && (
                <div className="page-header-nav">
                    <button onClick={() => navigate(backTo)} className="back-button">
                        <ArrowLeft size={16} /> Back
                    </button>
                </div>
            )}
            <h1 className="page-title">{title}</h1>
            {subtitle && <p className="page-subtitle">{subtitle}</p>}
        </div>
    )
}

export default PageHeader
