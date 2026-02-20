import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = "success") => {
    const id = Date.now();

    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Toast Container */}
      <div className="fixed top-5 left-1/2 -translate-x-1/2 flex flex-col gap-3 z-50">
        {toasts.map((toast) => (
  <div
    key={toast.id}
    className={`flex items-center gap-2 px-5 py-3 rounded-lg shadow-lg
      text-white animate-slideIn
      ${toast.type === "success"
        ? "bg-green-600"
        : "bg-red-600"}`}
  >
    {/* Tick Icon */}
    {toast.type === "success" && (
      <span className="text-xl">✔</span>
    )}

    <p className="text-sm font-medium">{toast.message}</p>
  </div>
))}

      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
