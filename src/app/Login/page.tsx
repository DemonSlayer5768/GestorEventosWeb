"use client";
import { motion, AnimatePresence } from "framer-motion";
import LoginForm from "@Components/SingIn/SingIn";
import RegisterForm from "@Components/SingIn/Register";
import { useLoginRegister } from "@Lib/hooks/useLoginRegister";
import { useIsMobile } from "@Lib/hooks/useIsMobile";
import Aurora from "@Components/ui/Aurora";
// import Lightning from "@Components/ui/Lightning";

export default function LoginRegisterPage() {
  const { isLogin, toggleForms } = useLoginRegister();
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl bg-gradient-to-r from-[#021024] via-[#052659] to-[#052659]">
        {/* Sección Izquierda */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {isMobile ? (
              isLogin ? (
                <motion.div
                  key="login"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <LoginForm toggleForms={toggleForms} />
                </motion.div>
              ) : (
                <motion.div
                  key="register"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <RegisterForm toggleForms={toggleForms} />
                </motion.div>
              )
            ) : isLogin ? (
              <motion.div
                key="image1"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-screen rounded-r-full overflow-hidden"
              >
                <Aurora
                  colorStops={["#1414b8", "#0000ff", "#1414b8"]}
                  amplitude={1.0}
                  speed={1.5}
                />
                <div className="absolute inset-0 rounded-l-2xl"></div>
              </motion.div>
            ) : (
              <motion.div
                key="register"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <RegisterForm toggleForms={toggleForms} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Sección Derecha */}
        {!isMobile && (
          <div className="relative flex-1">
            <AnimatePresence mode="wait">
              {!isLogin ? (
                <motion.div
                  key="image2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-screen rounded-l-full overflow-hidden"
                >
                  <Aurora
                    colorStops={["#1f104f", "#241178", "#1f104f"]}
                    amplitude={1.0}
                    speed={1.5}
                  />
                  <div className="absolute inset-0 rounded-r-2xl"></div>
                </motion.div>
              ) : (
                <motion.div
                  key="login"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <LoginForm toggleForms={toggleForms} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
