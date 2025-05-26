import Image from "next/image";

export default function ProfileHero() {
  return (
    <div className="flex flex-col items-center text-center space-y-8">
      {/* Profile Image */}
      <div className={`relative w-32 h-48 overflow-hidden border-4 border-white shadow-lg ring-2 ring-pink-100`}>
        <Image
          src="/profile-pic.jpg"
          alt="Profile"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Introduction Text */}
      <div className="max-w-2xl space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-700">
          Hi, I am <span className="text-pink-400">Grace Biemans</span>
        </h1>
        <p className="text-lg text-gray-500">
          I am a full-stack developer who is passionate about applying technology to solve problems and develop solutions that improve everyday experiences.
        </p>
      </div>
    </div>
  );
};