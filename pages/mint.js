import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindowMinimize,
  faWindowMaximize,
  faX,
} from "@fortawesome/free-solid-svg-icons";

export default function Mint() {
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
          <div className="h-60 w-auto p-4 text-center">
            <div className="h-5/6 w-auto bg-white">
              <h2>Presale</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
