import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';

const AdminPortal = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [leads, setLeads] = useState([]);
  const [error, setError] = useState('');

  // Standard cinematic easing
  const EASE = [0.16, 1, 0.3, 1];

  // Sync leads from localStorage
  useEffect(() => {
    if (isOpen && isAuthenticated) {
      const storedLeads = JSON.parse(localStorage.getItem('arsenal_leads') || '[]');
      setLeads(storedLeads.sort((a, b) => b.id - a.id));
    }
  }, [isOpen, isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'arsenal@2026') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('ACCESS DENIED. INCORRECT CLEARANCE.');
      setPassword('');
    }
  };

  const toggleStatus = (id) => {
    const updated = leads.map(lead => 
      lead.id === id ? { ...lead, status: lead.status === 'Pending' ? 'Contacted' : 'Pending' } : lead
    );
    setLeads(updated);
    localStorage.setItem('arsenal_leads', JSON.stringify(updated));
  };

  const clearLeads = () => {
    if (window.confirm('WIPE ALL RECRUIT DATA? THIS ACTION IS PERMANENT.')) {
      localStorage.setItem('arsenal_leads', '[]');
      setLeads([]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10 pointer-events-none">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/98 backdrop-blur-xl pointer-events-auto cursor-crosshair"
      />

      {/* Portal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="relative w-full max-w-5xl bg-secondary border border-white/10 rounded-[2.5rem] shadow-[0_0_100px_rgba(59,130,246,0.1)] overflow-hidden pointer-events-auto flex flex-col max-h-[85vh]"
      >
        {/* Header */}
        <div className="p-8 border-b border-white/5 flex justify-between items-center bg-black/20">
          <div className="space-y-1">
            <h2 className="text-xl font-black uppercase tracking-tighter text-white">
              {isAuthenticated ? 'Arsenal Terminal' : 'Secure Uplink'}
            </h2>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500">
              {isAuthenticated ? 'Recruit Mission Control' : 'Authorized Personnel Only'}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all active:scale-90"
          >
            ✕
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-grow overflow-y-auto p-8 md:p-12 scrollbar-hide">
          {!isAuthenticated ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-md mx-auto py-12 space-y-8"
            >
              <div className="text-center space-y-4">
                 <div className="w-16 h-16 bg-blue-600/10 rounded-2xl border border-blue-500/20 flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                 </div>
                 <h3 className="text-white font-black uppercase tracking-widest">Authentication Required</h3>
                 <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                   ACCESS IS RESTRICTED TO ARSENAL FITNESS COMMAND. ENTER CLEARANCE CODE.
                 </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <input 
                  type="password"
                  placeholder="CLEARANCE CODE"
                  autoFocus
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-6 py-4 text-sm font-medium text-white outline-none focus:border-blue-500/50 transition-all text-center tracking-[0.5em]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p className="text-[10px] text-red-500 font-black text-center animate-pulse">{error}</p>}
                <Button type="submit" className="w-full py-5">Verify Clearance</Button>
              </form>
            </motion.div>
          ) : (
            <div className="space-y-12">
              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-white/5 space-y-1 text-center">
                   <p className="text-[8px] font-black uppercase tracking-widest text-gray-600">Total Recruits</p>
                   <p className="text-2xl font-black text-white">{leads.length}</p>
                </div>
                <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-white/5 space-y-1 text-center">
                   <p className="text-[8px] font-black uppercase tracking-widest text-gray-600">Pending Follow-up</p>
                   <p className="text-2xl font-black text-blue-500">{leads.filter(l => l.status === 'Pending').length}</p>
                </div>
              </div>

              {/* Recruitment Table */}
              <div className="space-y-6">
                 <div className="flex justify-between items-end border-b border-white/10 pb-4">
                    <h4 className="text-xs font-black uppercase tracking-widest text-white">Recruitment Log</h4>
                    <button 
                      onClick={clearLeads}
                      className="text-[9px] font-black uppercase tracking-widest text-red-900 hover:text-red-500 transition-colors"
                    >
                      Wipe Logs
                    </button>
                 </div>

                 {leads.length > 0 ? (
                    <div className="space-y-4">
                       {leads.map((lead) => (
                          <motion.div 
                            key={lead.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-[#0a0a0a] border border-white/5 hover:border-white/10 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all"
                          >
                             <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                   <div className={`w-2 h-2 rounded-full ${lead.status === 'Pending' ? 'bg-blue-500' : 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]'}`} />
                                   <h5 className="text-lg font-black text-white uppercase tracking-tight">{lead.name}</h5>
                                </div>
                                <div className="flex flex-wrap gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                   <span className="flex items-center gap-1">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.28-2.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                      {lead.phone}
                                   </span>
                                   <span className="flex items-center gap-1">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                      {lead.time}
                                   </span>
                                   <span className="opacity-40">{new Date(lead.submittedAt).toLocaleDateString()}</span>
                                </div>
                             </div>
                             
                             <button 
                                onClick={() => toggleStatus(lead.id)}
                                className={`text-[9px] font-black uppercase tracking-widest px-6 py-3 rounded-lg border transition-all ${
                                   lead.status === 'Pending' 
                                   ? 'border-blue-500/30 text-blue-500 hover:bg-blue-500/5' 
                                   : 'border-emerald-500/30 text-emerald-500 bg-emerald-500/5'
                                }`}
                             >
                                {lead.status === 'Pending' ? 'MARK CONTACTED' : '✓ FOLLOW-UP DONE'}
                             </button>
                          </motion.div>
                       ))}
                    </div>
                 ) : (
                    <div className="py-20 text-center opacity-30 select-none">
                       <p className="text-[10px] font-black uppercase tracking-[0.5em]">No Recruitment Intelligence Detected</p>
                    </div>
                 )}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default AdminPortal;
