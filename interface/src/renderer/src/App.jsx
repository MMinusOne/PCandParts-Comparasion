import "./App.css";
import React, { useEffect, useMemo, useState } from "react";
import * as XLSX from "xlsx";

function App() {
  const [csvData, setCSVData] = useState(null);
  const [settings, setSettings] = useState({
    fetchTimeout: undefined,
    tax: 0.11,
  });
  const [category, setCategory] = useState();
  const [categories, setCategories] = useState([]);
  const [expectedTime, setExpectedTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);
  const [products, setProducts] = useState([]);

  const handleFileUpload = async (e) => {
    console.log("reading input file:");
    const file = e.target.files[0];
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, {
      header: 1,
      defval: "",
    });

    setCSVData(jsonData);
  };
  //TODO: mojitech tax included
  useEffect(() => {
    const cats = [];
    console.log(csvData);
    if (csvData) {
      for (const cell of csvData.slice(1)) {
        const cat = cell.at(0);
        if (!cats.includes(cat.toLowerCase())) cats.push(cat.toLowerCase());
      }
      console.log(cats);
      setCategories(cats);
    }
  }, [csvData]);

  useEffect(() => {
    console.log(settings.category);
    if (csvData) {
      for (const cell of csvData.slice(1)) {
        const cat = cell.at(0);
        console.log(settings.category, cat);
        if (settings.category.toLowerCase() === cat.toLowerCase()) {
          setProducts((prev) => [...prev, cell]);
        }
      }
    }
  }, [category]);

  return (
    <>
      <main className="p-4 flex flex-col items-center justify-center gap-2 w-42">
        {!running ? (
          <div>
            <label className="form-control w-full max-w-xs" />

            <div className="label">
              <span className="label-text">Input product data</span>
            </div>

            <input
              type="file"
              accept=".xlsx"
              className="file-input file-input-bordered w-full max-w-xs"
              onChange={handleFileUpload}
            ></input>
          </div>
        ) : null}

        {csvData && !running ? (
          <>
            <div className="flex w-fit h-26 items-center justify-center gap-2">
              <label className="form-control w-16 max-w-xs">
                <input
                  type="number"
                  placeholder="Tax"
                  className="input input-bordered w-16 text-center max-w-xs"
                  defaultValue={Math.floor(10 * (settings.tax + 1))}
                />
              </label>

              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Category
                </option>
                {categories.map((e) => {
                  return (
                    <option
                      onClick={(event) => {
                        setCategory(e);
                      }}
                    >
                      {e}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="btn btn-wide btn-primary"
                onClick={() => {
                  setRunning(true);
                }}
              >
                Compare
              </button>
            </div>
          </>
        ) : (
          <></>
        )}

        {running ? (
          <>
            <progress
              className="progress w-56 progress-secondary"
              value={(currentItem / products.length) * 100}
              max="100"
            ></progress>

            <p>
              {currentItem} / {products.length}
            </p>

            <div className="flex gap-2">
              <button className="btn btn-success {btn-active}">
                Download CSV
              </button>
              <button className="btn btn-error">Cancel</button>
            </div>
          </>
        ) : (
          <></>
        )}
      </main>
    </>
  );
}

export default App;
