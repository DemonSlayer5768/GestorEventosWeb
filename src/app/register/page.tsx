"use client";

import { User, Mail, Lock, Phone } from "lucide-react";

export default function RegisterForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-4">
      <div className="w-full max-w-lg shadow-xl">
        <header className="space-y-1">
          <h1 className="text-2xl font-bold text-center">Create an account</h1>
          <h2 className="text-center">
            Enter your information to create your account
          </h2>
        </header>
        <h3 className="grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="name">Name</label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input id="name" placeholder="Enter your name" className="pl-9" />
            </div>
          </div>
          <div className="grid gap-2">
            <label htmlFor="email">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="pl-9"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <label htmlFor="phone">Phone</label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                className="pl-9"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <label htmlFor="password">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input
                id="password"
                type="password"
                placeholder="Create a password"
                className="pl-9"
              />
            </div>
          </div>
        </h3>
        <h4>
          <button className="w-full">Create account</button>
        </h4>
      </div>
    </div>
  );
}
