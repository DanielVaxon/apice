import type { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export default function EmpreendimentoLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#1A1A1A",
            color: "#FFF",
            border: "1px solid #C4A572",
            borderRadius: 0,
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: "13px",
            letterSpacing: "0.04em",
          },
          duration: 5000,
        }}
      />
    </>
  );
}
