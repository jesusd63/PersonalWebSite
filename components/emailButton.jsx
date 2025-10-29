'use client';
import { showToast } from 'nextjs-toast-notify'; // replace with your toast library

export function EmailButton() {
  const email = "jusus.diazb2003@gmail.com";

  const handleClick = async () => {
    await navigator.clipboard.writeText(email);
    showToast.success("Email copied!", {
      duration: 4000,
      progress: true,
      position: "top-center",
      transition: "fadeIn",
      icon: '',
      sound: false,
    });
  };
  return (
    <button
      className="btn btn-lg sm:min-w-64 mb-6"
      onClick={handleClick}
    >
      Email
    </button>
  );
}
