import Image from "next/image";
import Head from "next/head";

import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindowMinimize,
  faWindowMaximize,
  faX,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function Mint() {
  const [mintNum, setMintNum] = useState(1);
  const [maxMint, setMaxMint] = useState(22);
  const [totalMint, setTotalMint] = useState(0.0333);
  const increaseMint = () => {
    if (mintNum < maxMint) {
      setMintNum(mintNum + 1);
      setTotalMint(mintNum * 0.0333);
    }
  };
  const decreaseMint = () => {
    if (mintNum > 1) {
      setMintNum(mintNum - 1);
      setTotalMint(mintNum * 0.0333);
    }
  };
  console.log(mintNum);
  return (
    <div class="min-h-screen h-full w-full flex flex-col bg-gradient-to-r from-cyan-500 to-blue-500">
      <section className="m-5 flex justify-center items-center">
        <div className="w-1/2 h-auto bg-gray-300">
          <div className="h-8 bg-gradient-to-r from-light-blue via-light-purple to-light-yellow px-4 flex flex-row justify-between">
            <p>mint.exe</p>
            <ul className="flex flex-row items-center space-x-4">
              <li className="bg-gray-300 flex w-4 h-4 items-center justify-center">
                <FontAwesomeIcon icon={faWindowMinimize} className="h-2" />
              </li>
              <li className="bg-gray-300 flex w-4 h-4 items-center justify-center">
                <FontAwesomeIcon icon={faWindowMaximize} className="h-2" />
              </li>
              <li className="bg-gray-300 flex w-4 h-4 items-center justify-center">
                <FontAwesomeIcon icon={faX} className="h-2" />
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex items-center space-x-4 md:space-x-6 px-4 overflow-hidden">
              <li>File</li>
              <li>Edit</li>
              <li>View</li>
              <li>Image</li>
              <li>Options</li>
            </ul>
          </div>
          <div className="h-full w-auto p-4 text-center">
            <div className="h-5/6 w-auto bg-white overflow-hidden">
              <h2 className="text-5xl font-bold mt-4">Presale</h2>
              <div className="flex flex-col md:flex-row md:space-x-14 w-full mt-10 md:mt-14">
                <div className="relative">
                  <div className="absolute top-2 left-2 opacity-80 filter backdrop-blur-lg text-base px-4 py-2 bg-black border border-brand-purple rounded-md flex items-center justify-center text-white font-semibold">
                    <p>
                      <span className="text-pink">0</span> / 3000
                    </p>
                  </div>

                  <img
                    src="/images/main-lighter.png"
                    className="object-cover w-full sm:h-[280px] md:w-[250px] rounded-md"
                  />
                </div>
                <div className="flex flex-col items-center justify-center md:w-1/2">
                  <div className="flex flex-row space-x-10">
                    <button onClick={decreaseMint}>
                      <FontAwesomeIcon
                        icon={faMinus}
                        size="2xl"
                      ></FontAwesomeIcon>
                    </button>
                    <p className="text-5xl">{mintNum}</p>
                    <button onClick={increaseMint}>
                      <FontAwesomeIcon
                        icon={faPlus}
                        size="2xl"
                      ></FontAwesomeIcon>
                    </button>
                  </div>
                  <p className="text-sm text-pink-200 tracking-widest mt-3">
                    Max Mint Amount: {maxMint}
                  </p>
                  <button className="bg-light-green rounded-md px-4 py-2 my-4">
                    Connect Wallet
                  </button>
                  <div>
                    <p>Total Price</p>
                    <p>{totalMint} + GAS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
