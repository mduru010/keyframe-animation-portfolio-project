"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/router

export default function Navigation() {
  const router = useRouter();

  const handleClickBack = (event) => {
    event.preventDefault(); // Prevent default link behavior
    router.back(); // Navigate back in the client-side
  };

  return (
    <main className="navigation-container bg-black flex justify-between align-center my-5">
      <Link href="/profile" onClick={handleClickBack}>
        <div className="exit-image-div invert ml-5">
          <img
            src="https://img.icons8.com/ios/50/cancel.png"
            width="30"
            height="48"
            alt="x"
          />
        </div>
      </Link>

      <Link href="/">
        <div className="exit-image-div ml-5">
          <img src="logo.png" alt="logo" width="250" height="80" />
        </div>
      </Link>

      <Link href="/upload">
        <div className="share-image-div invert mr-5">
          <img
            width="30"
            height="48"
            src="https://img.icons8.com/ios/50/settings--v1.png"
            alt="settings"
          />
        </div>
      </Link>
    </main>
  );
}
