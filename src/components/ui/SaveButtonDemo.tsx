"use client";
import { SaveButton } from "./ui/save-button";

export function SaveButtonDemo() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center bg-black p-6">
      <SaveButton
        text={{
          idle: "Save me, please!",
          saving: "Working on it...",
          saved: "Saved! Woohoo!",
        }}
        className="text-white"
      />
    </div>
  );
}
