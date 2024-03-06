"use client";
import { useState, useRef } from "react";
import Navigation from "../components/navigation";
import BottomNavigationBar from "../components/bottom_nav";

export default function AvatarUploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);

  const handleUpload = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!inputFileRef.current?.files) {
      throw new Error("No file selected");
    }

    const file = inputFileRef.current.files[0];

    const newBlob = await upload(file.name, file, {
      access: "public",
      handleUploadUrl: "/api/avatar/upload",
    });

    setBlob(newBlob);
  };

  return (
    <main className="container mx-auto">
      <Navigation />
      <h1 className="text-center text-2xl font-semibold mt-8">
        Upload Your Profile Picture
      </h1>

      <div className="flex justify-center mt-8">
        <form onSubmit={handleUpload} className="max-w-md">
          <input
            name="file"
            ref={inputFileRef}
            type="file"
            required
            className="block border border-gray-300 py-2 px-4 w-full mb-4"
          />
          <button
            type="submit"
            className="block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full"
          >
            Upload
          </button>
        </form>
      </div>

      {blob && (
        <div className="text-center mt-8">
          Blob url: <a href={blob.url}>{blob.url}</a>
        </div>
      )}

      <BottomNavigationBar />
    </main>
  );
}
