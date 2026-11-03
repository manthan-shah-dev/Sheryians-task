
import { Mail, Phone, MapPin, User } from "lucide-react";

const UserCard=({user})=> {
  return (
    
     
            <div
              key={user.id}
              className="rounded-2xl border border-[#272F5A] bg-[#0D1020] p-5 transition hover:border-[#C4B4FF]"
            >

              {/* Profile */}
              <div className="mb-5 flex items-center gap-3">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#27233C] text-xl font-bold text-[#C4B4FF]">
                  {user.name.firstname[0].toUpperCase()}
                </div>

                <div>
                  <h2 className="font-semibold capitalize">
                    {user.name.firstname} {user.name.lastname}
                  </h2>

                  <p className="text-sm text-slate-400">
                    @{user.username}
                  </p>
                </div>

              </div>

              {/* User Details */}
              <div className="space-y-4">

                <div className="flex items-center gap-3">
                  <Mail size={17} className="text-[#C4B4FF]" />
                  <p className="break-all text-sm text-slate-300">
                    {user.email}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={17} className="text-[#C4B4FF]" />
                  <p className="text-sm text-slate-300">
                    {user.phone}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={17} className="text-[#C4B4FF]" />
                  <p className="text-sm capitalize text-slate-300">
                    {user.address.city}
                  </p>
                </div>

              </div>

              {/* Footer */}
              <div className="mt-5 flex items-center justify-between border-t border-[#272F5A] pt-4">

                <span className="text-xs text-slate-500">
                  User ID: {user.id}
                </span>

                <button className="rounded-lg bg-[#27233C] px-4 py-2 text-sm text-[#C4B4FF] transition hover:bg-[#412146]">
                  View Profile
                </button>

              </div>

            </div>
          

      
    // </div>
  );
}

export default UserCard;
