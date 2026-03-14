import React, { useState, useEffect } from "react";
import { fetchAllQuestions, createQuestion, bulkCreateQuestions, deleteQuestion, updateQuestionCategory } from "../../services/adminService";
import { Database, PlusCircle, Trash2, ArrowLeft, FolderOpen, Loader2, XCircle, CheckCircle2, ListPlus } from "lucide-react";
import Pagination from "../../components/shared/Pagination";

const CATEGORIES = ["DBMS", "OS", "CN", "OOP", "ALGORITHM", "SQL"];

const AdminQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [newQuestionText, setNewQuestionText] = useState("");
  const [newQuestionCategory, setNewQuestionCategory] = useState("DBMS");
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    setLoading(true);
    try {
      const data = await fetchAllQuestions();
      setQuestions(data.questions || []);
    } catch (err) {
      setError(err.message || "Failed to load questions");
    } finally {
      setLoading(false);
    }
  };

  const handleAddQuestion = async (e) => {
    e.preventDefault();
    if (!newQuestionText.trim()) return;

    const lines = newQuestionText.split('\n').filter(line => line.trim());
    
    setIsSubmitting(true);
    setError("");

    try {
      if (lines.length > 1) {
        // Bulk mode
        const res = await bulkCreateQuestions({
          questions: lines,
          category: newQuestionCategory
        });
        setQuestions([...questions, ...res.questions]);
        showSuccess(`${res.questions.length} questions added successfully.`);
      } else {
        // Single mode
        const res = await createQuestion({
          question: newQuestionText.trim(),
          category: newQuestionCategory,
        });
        setQuestions([...questions, res.question]);
        showSuccess("Question added.");
      }
      setNewQuestionText("");
    } catch (err) {
      setError(err.message || "Failed to add question(s)");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteQuestion = async (id) => {
    if (!window.confirm("Delete this question?")) return;
    try {
      await deleteQuestion(id);
      setQuestions(questions.filter((q) => q._id !== id));
      showSuccess("Question deleted.");
    } catch (err) {
      setError(err.message || "Failed to delete question");
    }
  };

  const handleUpdateCategory = async (id, newCategory) => {
    try {
      const res = await updateQuestionCategory(id, newCategory);
      setQuestions(
        questions.map((q) => (q._id === id ? { ...q, category: res.question.category } : q))
      );
      showSuccess("Category updated.");
    } catch (err) {
      setError(err.message || "Failed to update category");
    }
  };

  const showSuccess = (msg) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(""), 3000);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-red-500">
        <Loader2 className="w-12 h-12 mb-4 animate-spin" />
        <p className="text-lg text-gray-300">Loading questions...</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      {error && (
        <div className="bg-red-900/40 border border-red-500/50 text-red-200 p-4 rounded-xl mb-6 flex items-center gap-3">
          <XCircle className="text-red-500" />
          {error}
        </div>
      )}
      {successMsg && (
        <div className="bg-emerald-900/40 border border-emerald-500/50 text-emerald-200 p-4 rounded-xl mb-6 flex items-center gap-3">
          <CheckCircle2 className="text-emerald-500" />
          {successMsg}
        </div>
      )}

      {!selectedCategory ? (
        <>
          <div className="flex items-center gap-3 mb-8">
            <FolderOpen size={28} className="text-red-500" />
            <h2 className="text-2xl font-bold text-gray-100">Question Categories</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((category) => {
              const categoryCount = questions.filter(q => q.category === category).length;
              return (
                <div
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setNewQuestionCategory(category);
                    setCurrentPage(1);
                  }}
                  className="bg-gray-800/40 border border-gray-700 hover:border-red-500/50 rounded-2xl p-6 cursor-pointer transition-all hover:bg-gray-800/60 group shadow-lg"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-200 group-hover:text-red-400 transition-colors">
                      {category}
                    </h3>
                    <span className="bg-gray-900 text-gray-400 px-3 py-1 rounded-full text-xs font-mono border border-gray-700">
                      {categoryCount} Qs
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">Manage questions for {category} interviews.</p>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <button 
            onClick={() => setSelectedCategory(null)} 
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors px-4 py-2 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 rounded-lg w-max"
          >
            <ArrowLeft size={16} /> Back to Categories
          </button>

          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 mb-8">
            <h3 className="text-xl font-bold flex items-center gap-2 mb-4 text-red-100">
              <ListPlus size={20} className="text-red-500"/>
              Add {selectedCategory} Questions (Bulk Supported)
            </h3>
            <form onSubmit={handleAddQuestion} className="flex flex-col gap-4">
              <textarea
                value={newQuestionText}
                onChange={(e) => setNewQuestionText(e.target.value)}
                placeholder={`Paste questions here... Tip: Put each question on a new line to add multiple.`}
                className="w-full h-32 bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors resize-none"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting || !newQuestionText.trim()}
                  className="bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white font-bold px-8 py-3 rounded-xl transition-colors flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Adding...
                    </>
                  ) : (
                    "Add to Database"
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-100">{selectedCategory} Bank</h2>
            <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full border border-gray-700">
              {questions.filter(q => q.category === selectedCategory).length} items
            </span>
          </div>
          
          {(() => {
            const filteredQuestions = questions.filter(q => q.category === selectedCategory);
            const totalPages = Math.ceil(filteredQuestions.length / itemsPerPage);
            const startIndex = (currentPage - 1) * itemsPerPage;
            const paginatedQuestions = filteredQuestions.slice(startIndex, startIndex + itemsPerPage);

            return (
              <>
                <div className="space-y-3">
                  {paginatedQuestions.map((q) => (
                    <div key={q._id} className="flex items-center justify-between bg-gray-800/40 rounded-xl p-4 border border-gray-700/60 transition-colors group">
                      <div className="flex-1 pr-6">
                        <p className="text-gray-200 font-medium">{q.question}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <select
                          value={q.category}
                          onChange={(e) => handleUpdateCategory(q._id, e.target.value)}
                          className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-1.5 text-sm text-gray-300 cursor-pointer"
                        >
                          {CATEGORIES.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                        <button
                          onClick={() => handleDeleteQuestion(q._id)}
                          className="p-2 text-gray-500 hover:bg-red-500/20 hover:text-red-500 rounded-lg transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredQuestions.length > 0 && (
                  <Pagination 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => {
                      setCurrentPage(page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  />
                )}
              </>
            );
          })()}
        </>
      )}
    </div>
  );
};

export default AdminQuestions;
