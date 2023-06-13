import React from "react";

export default function TransferAmount() {
  return (
    <div className="w-full">
      <p>Transfer Money</p>

      <div className="mx-auto">
        <div className="mt-5 flex items-center gap-5">
          <div className="h-10 w-10 rounded-lg bg-primary"></div>
          <div>
            <p className="font-bold">Samuel Suhi</p>
            <p className="text-sm text-slate-400">+62 896 0108 5905</p>
          </div>
        </div>
      </div>

      <p className="text-slate-600 mt-5">
        Type the amount you want to transfer and then press continue to the next
        steps.
      </p>

      <div>
        <input
          type="number"
          className="text-3xl text-primary font-bold mt-5 text-center w-40 flex content-center"
          placeholder="0.00"
        />
        <p className="text-center font-bold">Rp120.000 is Available</p>

        <input
          type="text"
          className="w-52 p-2 lg:mx-96 overflow-y-auto border-b border-slate-500 text-center"
          placeholder="Add some notes here"
        />
      </div>

      <button className="button-primary mx-0 flex items-center justify-center content-center">Continue</button>
    </div>
  );
}
