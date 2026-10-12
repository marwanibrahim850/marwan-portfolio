import React from 'react';

const LoadingScreen = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-[#08090a] z-50">
    <div className="loader border-4 border-t-[#ff4d00] border-b-[#ffb59e] rounded-full w-12 h-12 animate-spin" />
  </div>
);

export default LoadingScreen;
