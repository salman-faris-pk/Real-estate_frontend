//@ts-nocheck
import { createContext, useEffect, useState } from "react";
import { CloudinaryScriptContext } from "../../context/CloudinaryContext";

export const UploadWidget = ({ uwConfig, setState }: any) => {
  const [loaded, setLoaded] = useState(false);
  const [widget, setWidget] = useState(null);

  useEffect(() => {
    const loadScript = () => {
      const uwScript = document.getElementById("uw");

      if (!uwScript) {
        const script = document.createElement("script");
        script.setAttribute("async", "");
        script.setAttribute("id", "uw");
        script.src = "https://upload-widget.cloudinary.com/global/all.js";
        script.onload = () => {
          setLoaded(true);
        };
        document.body.appendChild(script);
      } else if (window.cloudinary) {
        setLoaded(true);
      }
    };

    loadScript();
  }, []);

  useEffect(() => {
    if (loaded && window.cloudinary && !widget) {
      const newWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        (error: any, result: any) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            setState((prev: any) => [...prev, result.info.secure_url]);
          }
        }
      );
      setWidget(newWidget);
    }
  }, [loaded, widget, uwConfig, setState]);

  const openWidget = () => {
    if (widget) {
      widget.open();
    } else {
      console.error("Widget is not initialized yet.");
    }
  };

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <button
        id="upload_widget"
        className="cloudinary-button"
        onClick={openWidget}
      >
        Upload
      </button>
    </CloudinaryScriptContext.Provider>
  );
};



