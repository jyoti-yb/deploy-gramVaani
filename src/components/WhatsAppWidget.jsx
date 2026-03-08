import React from 'react';

const WhatsAppWidget = () => {
  const handleClick = () => {
    window.open('https://wa.me/919490872665/', '_blank', 'noopener,noreferrer');
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <button
      onClick={handleClick}
      style={{
        position: 'fixed',
        top: isMobile ? '80px' : '90px',
        right: isMobile ? '16px' : '24px',
        width: isMobile ? '50px' : '60px',
        height: isMobile ? '50px' : '60px',
        borderRadius: '50%',
        backgroundColor: '#25D366',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
      }}
      aria-label="Chat on WhatsApp"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 0C7.164 0 0 7.164 0 16c0 2.828.744 5.484 2.04 7.78L0 32l8.4-2.02A15.926 15.926 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.2c-2.42 0-4.78-.66-6.84-1.9l-.48-.3-5.04 1.22 1.26-4.88-.32-.52A13.16 13.16 0 012.8 16c0-7.28 5.92-13.2 13.2-13.2S29.2 8.72 29.2 16 23.28 29.2 16 29.2z"
          fill="white"
        />
        <path
          d="M23.36 19.64c-.4-.2-2.36-1.16-2.72-1.3-.36-.14-.62-.2-.88.2-.26.4-1 1.3-1.24 1.56-.22.26-.46.3-.86.1-.4-.2-1.7-.62-3.24-2a12.05 12.05 0 01-2.24-2.78c-.24-.4-.02-.62.18-.82.18-.18.4-.46.6-.7.2-.22.26-.4.4-.66.14-.26.06-.5-.04-.7-.1-.2-.88-2.12-1.2-2.9-.32-.76-.64-.66-.88-.66h-.76c-.26 0-.68.1-1.04.5-.36.4-1.38 1.34-1.38 3.28s1.42 3.8 1.62 4.06c.2.26 2.8 4.28 6.78 6 .94.42 1.68.66 2.26.84.96.3 1.82.26 2.5.16.76-.12 2.36-.96 2.7-1.9.32-.92.32-1.72.22-1.88-.1-.18-.36-.28-.76-.48z"
          fill="white"
        />
      </svg>
    </button>
  );
};

export default WhatsAppWidget;
