import "./folder.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { feathersClient } from "../common";
import FolderCard from "../folder-card";

const Folder = () => {
  const { folderId, subFolderId } = useParams();
  const folderService = feathersClient.service("folders");
  const [folder, setFolder] = useState();

  useEffect(() => {
    if (folderId) {
      folderService
        .get(folderId)
        .then((result) => setFolder(result))
        .catch((err) => {
          console.log(err);
        });
    }
  }, [folderId]);

  if (!folder) {
    return <div>LOADING FOLDER...</div>;
  }

  console.log(folder);

  return (
    <div>
      You are inside: {folder.name}
      <div className="folder-list">
        {folder.children.map((v) => {
          return (
            <FolderCard
              key={v._id}
              linkTo={`/folder/${folder._id}/${v._id}`}
              name={v.name}
              childs={v.children}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Folder;
