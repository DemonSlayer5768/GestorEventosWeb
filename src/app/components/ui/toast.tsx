// import React from "react";

interface ToastProps {
  title: string;
  description: string;
}

export const toast = ({ title, description }: ToastProps) => {
  // Implementación de la notificación toast
  console.log(title, description);
};
