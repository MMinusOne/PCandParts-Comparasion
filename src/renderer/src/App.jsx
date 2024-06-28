import "./App.css";
import React, { useEffect, useMemo, useState } from "react";
import * as XLSX from "xlsx";

function App() {
  const [csvData, setCSVData] = useState(null);
  const [formattedData, setFormattedData] = useState(null);
  const [settings, setSettings] = useState({
    category: undefined,
    fetchTimeout: undefined,
    lowerType: 0,
    tax: 0.11,
  });
  const [comparedData, setComparedData] = useState(null);
  const [categories, setCategories] = useState([]);
  const [expectedTime, setExpectedTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);
  const [products, setProducts] = useState([]);
  const [timesTaken, setTimesTaken] = useState([]);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    setCSVData(jsonData);
  };
  //TODO: mojitech tax included
  useEffect(() => {
    const filterCategories = async () => {
      const cats = [];
      if (csvData) {
        const fdata = await window.electron.formatData(csvData);
        setFormattedData(fdata);
        for (const cell of fdata) {
          const { category } = cell;
          if (!cats.includes(category.toLowerCase()))
            cats.push(category.toLowerCase());
        }
        setCategories(cats.sort());
      }
    };
    if (!running) {
      filterCategories();
    }
  }, [running, csvData]);

  useEffect(() => {
    if (csvData && !running) {
      for (const cell of formattedData) {
        const { category } = cell;

        if (settings.category === category.toLowerCase()) {
          setProducts((prev) => [...prev, cell]);
        }
      }
    }
  }, [running, formattedData, settings.category]);

  useEffect(() => {
    if (running) {
      console.log("running");
      const compareData = async () => {
        const comparedData = await window.electron.compareData(
          products,
          settings
        );
        setComparedData(comparedData);
      };

      compareData();
    }
  }, [running]);
  // High or low

  useEffect(() => {
    if (running) {
      window.electron.onProgress((event, prog) => {
        setTimesTaken((prev) => [...prev, new Date()]);
        setCurrentItem(parseInt(prog));
      });
    }
  }, [running]);

  useEffect(() => {
    if (currentItem === products.length) {
      window.electron.cancel();
    }
  }, [currentItem, products]);
  useEffect(() => {
    if (timesTaken.length > 2) {
      const timeDifferences = timesTaken.map((date, index) => {
        if (index === 0) {
          return 0;
        }
        const prevDate = timesTaken[index - 1];
        const diffInMilliseconds = date.getTime() - prevDate.getTime();
        return diffInMilliseconds / 1000;
      });
      const avgTimeDiff = timeDifferences
        .map((t) => t / timeDifferences.length)
        .reduce((a, b) => a + b);
      console.log(avgTimeDiff);
      setExpectedTime(avgTimeDiff * (products.length - currentItem));
    }
  }, [timesTaken]);

  return (
    <>
      <main className="p-4 flex flex-col items-center justify-center gap-2 w-full h-full">
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
              <label className="form-control  max-w-xs">
                <input
                  type="number"
                  placeholder="Tax"
                  className="input input-bordered w-16 text-center max-w-xs"
                  defaultValue={Math.floor(10 * (settings.tax + 1))}
                />
              </label>

              <select
                onChange={(e) => {
                  const category = e.target.value;
                  setSettings({
                    ...settings,
                    category: category.toLowerCase(),
                  });
                }}
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled selected>
                  Category
                </option>
                {categories.map((e) => {
                  return <option>{e}</option>;
                })}
              </select>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text w-20">You Lower</span>
                  <input
                    onClick={() => {
                      setSettings({ lowerType: 0 });
                    }}
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-secondary m-2"
                    defaultChecked
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text w-20">Them Lower</span>
                  <input
                    onClick={() => {
                      setSettings({ lowerType: 1 });
                    }}
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-secondary m-2"
                  />
                </label>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                disabled={settings.category ? false : true}
                className="btn btn-wide btn-primary"
                onClick={() => {
                  window.electron.start();
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

            <p>Estimated Time: {Math.floor(expectedTime) || "..."}s</p>

            <div className="flex gap-2">
              <button
                disabled={currentItem !== products.length}
                onClick={() => {
                  if (comparedData) {
                    const workbook = XLSX.utils.book_new();
                    const worksheet = XLSX.utils.json_to_sheet(comparedData);
                    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
                    const csvData = XLSX.write(workbook, {
                      bookType: "csv",
                      type: "binary",
                    });
                    const blob = new Blob([csvData], {
                      type: "text/csv;charset=utf-8;",
                    });
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement("a");
                    link.setAttribute("href", url);
                    link.setAttribute("download", "data.csv");
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }
                }}
                className="btn btn-success {btn-active}"
              >
                Download CSV
              </button>
              {/* <button
                className="btn btn-error"
                onClick={() => {
                  window.electron.cancel();
                  setCSVData(undefined);
                  setComparedData(undefined);
                  setSettings({
                    category: undefined,
                    fetchTimeout: undefined,
                    lowerType: undefined,
                    tax: 0.11,
                  });
                  setCurrentItem(0);
                  setTimesTaken([]);
                  setComparedData(false);
                  setRunning(false);
                  window.electron.end();
                }}
              >
                Cancel
              </button> */}
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
