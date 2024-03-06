import Link from "next/link";
import Navigation from "./components/navigation";
import BottomNavigationBar from "./components/bottom_nav";
import TweetCard from "./components/tweet";

export default async function Home() {
  return (
    <main className="">
      <Navigation />
      {/* <div className="flex min-h-screen flex-col gap-4 p-24">
        <div>
          <p>
            <Link href="/profile">Profile Page</Link>
          </p>
        </div>
      </div> */}
      <TweetCard />
      <TweetCard />
      <TweetCard />
      <BottomNavigationBar />
    </main>
  );
}
