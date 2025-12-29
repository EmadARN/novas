import TextBooksContent from "@/features/dashboard-user/components/notes/TextBooksContent";
import { Suspense } from "react";

export default function TextBooksPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
        </div>
      }
    >
      <TextBooksContent />
    </Suspense>
  );
}
