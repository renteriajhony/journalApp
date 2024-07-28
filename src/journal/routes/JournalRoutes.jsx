import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { JournalPage } from '../pages';

export const JournalRoutes = () => {
  return (
    <Routes>
      {/* Journal */}
      <Route path='/' element={<JournalPage />} />
      {/* Other route */}
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};
