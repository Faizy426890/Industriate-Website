"use client"
import dynamic from "next/dynamic";
// Dynamically import to prevent SSR hydration issues with camera/MediaPipe APIs
const ScannerPage = dynamic(
  () =>
    import("@/components/Scannerpage").then((mod) => ({
      default: mod.ScannerPage,
    })),
  {
    ssr: false,
    loading: () => (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "#f8fafc" }}
      >
        <div className="flex flex-col items-center gap-4">
          <div
            className="w-10 h-10 rounded-full border-2 border-indigo-400 border-t-transparent animate-spin"
            style={{ animationDuration: "0.8s" }}
          />
          <p className="text-[14px] text-slate-400 font-medium">
            Loading scanner…
          </p>
        </div>
      </div>
    ),
  }
);

export default function Home() {
  return <ScannerPage />;
}