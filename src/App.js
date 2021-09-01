import { useState } from "react";
import "./App.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
function App() {
  const [fileUploaded, setFileUploaded] = useState(null);
  const [fileName, setFileName] = useState("");
  let date = new Date().getFullYear();
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
    <div className="w-screen h-screen flex flex-col  items-center bg-gray-200">
      <div className="w-full h-20 bg-yellow-400 flex items-center justify-center shadow-2xl">
        <h1 className="text-4xl text-white">PDF Corruptor free</h1>
      </div>
      <div className="w-full  items-center flex flex-col">
        <div className="max-w-3xl mt-10 p-7">
          <h2 className="text-3xl">
            PDF File Corrupt - The PDF corrupter you were looking for!
          </h2>
          <h3 className="text-2xl mt-5">
            Corrupt any PDF file with our free, online service.
          </h3>
          <p className="mt-3">
            Homework submission the next day and you were fooling around. No
            problem just give us your file and we will corrupt it and you will
            get more time.
          </p>
          <h3 className="text-2xl mt-5">How to corrupt a file?</h3>
          <p className="mt-3">
            That's easy. Give us your file, we will damage it at a point you
            can't imagine.
          </p>
          <p className="mt-3">This site can corrupt any kind of PDF file.</p>
        </div>
      </div>
      <div className="bg-gray-50 flex flex-col justify-center items-center p-8 rounded-xl">
        {" "}
        <input type="file" name="" id="" onChange={handleFileUpload} />
        {fileUploaded && (
          <button
            className="w-20 mt-4  p-2 rounded-lg border-green-300 border-2 hover:bg-green-400 hover:border-transparent"
            onClick={saveDoc}>
            Save
          </button>
        )}
      </div>
      <div className="bottom-0 bg-red-400 absolute w-screen flex justify-center items-center p-2">
        <a
          className="text-4xl text-white mr-3"
          href="https://github.com/Anishpras"
          target="_blank"
          rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a
          className="text-4xl text-white mr-3"
          href="https://www.linkedin.com/in/anishpras118/"
          target="_blank"
          rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <p className="text-white mr-3">Copyright {date}</p>
        <p className="text-white font-semibold">| Made by Anish Prashun</p>
      </div>
    </div>
  );
}

export default App;
