import { useState } from "react";

export default function App() {
  const [data, setData] = useState(0);
  const [searchMode, setSearchMode] = useState("sku");
  return (
    <>
      <main className="p-4 flex flex-col items-center justify-center gap-2 w-full h-full">
        <input
          type="text"
          placeholder="SKU or Description"
          className="input input-bordered w-full max-w-xs"
          id="id"
        />
        <select
          onChange={(e) => {
            const searchMode = e.target.value;
            setSearchMode(searchMode);
          }}
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled selected>
            Search Mode
          </option>
          <option>SKU</option>
          <option>Description</option>
        </select>
        <button
          className="btn btn-primary"
          onClick={async () => {
            const inputEl = document.querySelector("#id");
            const input = inputEl.value;
            const results = await window.electron.quickSearch(
              input,
              searchMode
            );
            console.log(results);
            setData(results);
          }}
        >
          Search
        </button>

        {data ? (
          <div className="flex flex-col gap-3">
            <p>PC and Parts: ${data?.prices.pcandparts}</p>
            <p>Mojitech: ${data?.prices.mojitech}</p>
            <p>Ayoub: ${data?.prices.ayoub}</p>
          </div>
        ) : (
          <></>
        )}
      </main>
    </>
  );
}
