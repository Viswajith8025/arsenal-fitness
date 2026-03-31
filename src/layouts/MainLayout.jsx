import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/ui/CustomCursor';
import AdminPortal from '../components/AdminPortal';
import WhatsAppButton from '../components/WhatsAppButton';

const MainLayout = ({ children }) => {
  const [isAdminPortalOpen, setIsAdminPortalOpen] = useState(false);

  useEffect(() => {
    const handleOpenAdmin = () => setIsAdminPortalOpen(true);
    window.addEventListener('arsenal-admin-open', handleOpenAdmin);
    return () => window.removeEventListener('arsenal-admin-open', handleOpenAdmin);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white relative overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <AdminPortal 
        isOpen={isAdminPortalOpen} 
        onClose={() => setIsAdminPortalOpen(false)} 
      />
      <WhatsAppButton />
    </div>
  );
};

export default MainLayout;
