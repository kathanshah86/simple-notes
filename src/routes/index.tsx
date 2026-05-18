import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Notes" },
      { name: "description", content: "A simple notes page." },
    ],
  }),
});

function Index() {
  const [note, setNote] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("note");
    if (saved) setNote(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("note", note);
  }, [note]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="mb-6 text-3xl font-semibold tracking-tight">Notes</h1>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Start writing..."
          className="min-h-[60vh] w-full resize-none rounded-lg border border-border bg-card p-4 text-base leading-relaxed outline-none focus:ring-2 focus:ring-ring"
        />
      </div>
    </main>
  );
}
