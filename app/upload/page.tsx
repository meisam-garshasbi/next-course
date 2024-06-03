//7-6-Customizing the upload  widget
// ---------------------

"use client";
import React, { useState } from "react";

import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResultType {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    //Here for customizing the "CldUploadWidget" we use option property
    //and set it to an object
    <>
      {publicId && <CldImage src={publicId} width={270} height={180} alt="" />}
      <CldUploadWidget
        options={{
          sources: ["local"], //For permitting to upload only from local
          //computer
          multiple: false, //if you don't want to allow multiple files,
          maxFiles: 5, //to set the maximum number of files to upload
          
          styles: { //for styling the look of the upload window
            palette: {
              window: "#000000",
              menuIcons: "#ffffff",
              sourceBg: "#ffffff",
            },
          },
          //and etc.
        }}
        uploadPreset="w0qoasmb"
        onSuccess={(result, widget) => {
          console.log(result);
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResultType;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button onClick={() => open()} className="btn btn-primary">
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
