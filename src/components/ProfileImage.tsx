import profile from "@/assets/profile.png";

export const ProfileImage = () => (
  <div className="relative group">
    <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500/30 relative z-10 transition-transform duration-500 group-hover:scale-105">
      <img
        src={profile}
        alt="Fermin Blanco"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
  </div>
);
