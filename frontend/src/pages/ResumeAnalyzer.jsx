import { useState } from 'react'
import { Upload, FileText, CheckCircle2, AlertCircle, Loader2, Download } from 'lucide-react'
import { GoogleGenerativeAI } from '@google/generative-ai'

import Button from '../components/Button'
import './ResumeAnalyzer.css'

function ResumeAnalyzer() {
    const [file, setFile] = useState(null)
    const [analyzing, setAnalyzing] = useState(false)
    const [analysis, setAnalysis] = useState(null)
    const [apiKey, setApiKey] = useState(localStorage.getItem('gemini_api_key') || '')
    const [showSettings, setShowSettings] = useState(false)

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0]
        if (selectedFile && (selectedFile.type === 'application/pdf' || selectedFile.type === 'text/plain')) {
            setFile(selectedFile)
            setAnalysis(null)
        } else {
            alert('Please upload a PDF or TXT file')
        }
    }

    const analyzeResume = async () => {
        if (!file || !apiKey) {
            setShowSettings(true)
            return
        }

        setAnalyzing(true)

        try {
            const text = await file.text()
            const genAI = new GoogleGenerativeAI(apiKey)
            const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' })

            const prompt = `You are an expert resume reviewer and career coach. Analyze the following resume and provide detailed feedback:

Resume Content:
${text}

Please provide:
1. **Overall Score** (out of 10)
2. **Strengths** (3-5 bullet points)
3. **Areas for Improvement** (3-5 bullet points)
4. **ATS Compatibility** (score out of 10 and tips)
5. **Specific Recommendations** (actionable suggestions)

Format your response in markdown.`

            const result = await model.generateContent(prompt)
            const feedback = result.response.text()

            setAnalysis(feedback)
        } catch (error) {
            console.error('Analysis error:', error)
            alert('Error analyzing resume. Please check your API key and try again.')
        } finally {
            setAnalyzing(false)
        }
    }

    const saveApiKey = (key) => {
        setApiKey(key)
        localStorage.setItem('gemini_api_key', key)
        setShowSettings(false)
    }

    return (
        <div className="app-container">


            {showSettings && (
                <div className="settings-modal-overlay">
                    <div className="settings-modal">
                        <h2 className="page-title" style={{ fontSize: 18, marginBottom: 16 }}>Configure API Key</h2>
                        <input
                            type="password"
                            placeholder="Paste Gemini API Key"
                            className="api-input"
                            defaultValue={apiKey}
                            onChange={(e) => setApiKey(e.target.value)}
                        />
                        <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', marginTop: 16 }}>
                            <Button variant="primary" onClick={() => saveApiKey(apiKey)}>Save Key</Button>
                            <Button variant="ghost" onClick={() => setShowSettings(false)}>Cancel</Button>
                        </div>
                    </div>
                </div>
            )}

            <div className="resume-analyzer-container">
                {/* Upload Section */}
                <div className="upload-section">
                    <div className="upload-card">
                        <div className="upload-icon">
                            <FileText size={48} />
                        </div>
                        <h3>Upload Your Resume</h3>
                        <p>Upload your resume in PDF or TXT format for AI-powered analysis</p>

                        <input
                            type="file"
                            id="resume-upload"
                            accept=".pdf,.txt"
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                        />
                        <label htmlFor="resume-upload" className="upload-btn">
                            <Upload size={20} />
                            Choose File
                        </label>

                        {file && (
                            <div className="file-info">
                                <CheckCircle2 size={20} color="#10b981" />
                                <span>{file.name}</span>
                            </div>
                        )}

                        {file && (
                            <Button
                                variant="primary"
                                onClick={analyzeResume}
                                disabled={analyzing}
                                style={{ marginTop: 16 }}
                            >
                                {analyzing ? (
                                    <>
                                        <Loader2 className="animate-spin" size={16} />
                                        Analyzing...
                                    </>
                                ) : (
                                    'Analyze Resume'
                                )}
                            </Button>
                        )}
                    </div>
                </div>

                {/* Analysis Results */}
                {analysis && (
                    <div className="analysis-section">
                        <div className="analysis-card">
                            <div className="analysis-header">
                                <h3>Analysis Results</h3>
                                <Button variant="outline" size="small">
                                    <Download size={16} />
                                    Export
                                </Button>
                            </div>
                            <div className="analysis-content">
                                <div dangerouslySetInnerHTML={{
                                    __html: analysis.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                        .replace(/\n/g, '<br/>')
                                }} />
                            </div>
                        </div>
                    </div>
                )}

                {/* Tips Section */}
                {!analysis && (
                    <div className="tips-section">
                        <h3>Resume Tips</h3>
                        <div className="tips-grid">
                            <div className="tip-card">
                                <CheckCircle2 size={24} color="#10b981" />
                                <h4>Clear Formatting</h4>
                                <p>Use consistent fonts, spacing, and bullet points</p>
                            </div>
                            <div className="tip-card">
                                <CheckCircle2 size={24} color="#10b981" />
                                <h4>Quantify Achievements</h4>
                                <p>Use numbers and metrics to show impact</p>
                            </div>
                            <div className="tip-card">
                                <CheckCircle2 size={24} color="#10b981" />
                                <h4>Relevant Keywords</h4>
                                <p>Include industry-specific terms for ATS</p>
                            </div>
                            <div className="tip-card">
                                <CheckCircle2 size={24} color="#10b981" />
                                <h4>Concise Content</h4>
                                <p>Keep it to 1-2 pages maximum</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ResumeAnalyzer
