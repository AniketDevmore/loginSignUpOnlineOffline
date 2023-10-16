import React, { useEffect, useState } from "react";
import internetError from "../../../public/images/internetError.jpg";
import { RouterProvider } from "react-router-dom";
import { router } from "../../router";

const OnlineOffline = () => {
  const [online, setOnline] = useState(false);

  useEffect(() => {
    const onlineHandler = () => {
      setOnline(true);
    };

    const offlineHandler = () => {
      setOnline(false);
    };

    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);

    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  }, []);
  return (
    <div>
      {online ? (
        <RouterProvider router={router} />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "100px",
          }}
        >
          <img src={internetError} alt="internet-error" />
        </div>
      )}
    </div>
  );
};

export default OnlineOffline;
