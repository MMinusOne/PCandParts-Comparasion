import { useState } from "react";
import FullSearch from "./systems/full-search/App";
import OneTimeSearch from "./systems/onetime-search/App";
import "./App.css";

export default function App() {
  const [app, setApp] = useState(0);
  return (
    <>
      <div className="w-full h-full flex items-center justify-center">
        {!app ? (
          <>
            <div className="flex gap-3">
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setApp(1);
                }}
              >
                Full Search
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => {
                  setApp(2);
                }}
              >
                One-Time Search
              </button>
            </div>
          </>
        ) : null}
        {app === 1 ? (
          <FullSearch />
        ) : app === 2 ? (
          <OneTimeSearch />
        ) : app === 3 ? (
          <FullSearch />
        ) : null}
      </div>
    </>
  );
}
