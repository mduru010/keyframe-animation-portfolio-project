import Navigation from "../components/navigation";
import Profile from "../components/profile";
import Options from "../components/options";
import FileUpload from "../components/fileUpload";
import BottomNavigationBar from "../components/bottom_nav";

export default async function profile() {
  return (
    <main className="">
      <Navigation />
      <Profile />
      <Options />
      <FileUpload />
      <BottomNavigationBar />
    </main>
  );
}
