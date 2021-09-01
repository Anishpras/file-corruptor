import { useState } from "react";
import "./App.css";

import { jsPDF } from "jspdf";

function App() {
  const [fileUploaded, setFileUploaded] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleFileUpload = async (e) => {
    if (e.target.files[0]) {
      setFileUploaded(await e.target.files[0].text());
      setFileName(await e.target.files[0].name);
    }
  };
  const saveDoc = () => {
    const element = document.createElement("a");
    let string = fileUploaded.replace("%PDF-1.3", "");
    console.log(string);
    const file = new Blob([string], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = `${fileName}`;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  return (
    <div className="App">
      <input type="file" name="" id="" onChange={handleFileUpload} />

      <button onClick={saveDoc}>Save</button>
    </div>
  );
}

export default App;
