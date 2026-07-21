"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Toast() {
  const { toast } = useApp();

  return (
    <div className={`toast-notification ${toast.active ? "active" : ""}`}>
      <CheckCircle size={20} className="gold-text" />
      <span>{toast.message}</span>
    </div>
  );
}
