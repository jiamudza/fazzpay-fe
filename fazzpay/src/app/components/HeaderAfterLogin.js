import React from "react";

//icon
import { VscBell } from "react-icons/vsc";

export default function HeaderAfterLogin() {
  return (
    <div className="flex content-center justify-between bg-white">
      <p className="font-bold text-2xl text-primary">Fazzpay</p>
      <div>
        <div className="flex content-center gap-5 justify-between">
          <div className="flex content-center justify-between gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary"></div>
            <div>
              <p className="font-bold">Robert Chandra</p>
              <p className="text-sm text-slate-400">+62 8960 1085 905</p>
            </div>
          </div>
          <div>
            <VscBell size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
