import Profile from "@/components/Profile";
import HomeNavButtons from "@/components/HomeNavButtons";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-purple-50">
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 pt-24">

        <Profile />

        <HomeNavButtons />

      </main>
    </div>
  );
}
