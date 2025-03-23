import { useState } from "react";

export function useLoginRegister() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForms = () => setIsLogin(!isLogin);

  return { isLogin, toggleForms };
}
