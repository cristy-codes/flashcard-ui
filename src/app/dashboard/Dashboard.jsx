import "./dashboard.css";
import React, { useState } from "react";
import { feathersClient } from "../common";
import { useCallback } from "react";
import { useEffect } from "react";
import FolderCard from "../folder-card";

const Dashboard = () => {
  const folderService = feathersClient.service("folders");
  const [folders, setFolders] = useState();
  const [err, setErr] = useState();

  useEffect(() => {
    folderService
      .find({
        query: {
          parentFolderId: null,
        },
      })
      .then((r) => setFolders(r.data))
      .catch(() => setErr(true));
  }, []);

  if (err) {
    return <div>ERROROROOR</div>;
  }

  if (!folders) {
    return <div>LOADING FOLDERS</div>;
  }

  return (
    <div className="dashboard">
      {folders.map((f) => (
        <FolderCard
          key={f._id}
          name={f.name}
          childs={f.children}
          linkTo={`/folder/${f._id}`}
        />
      ))}
    </div>
  );
};

export default Dashboard;
