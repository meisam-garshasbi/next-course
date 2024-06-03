// 4-3-Dynamic Routes

//Here we create the path : /user/[id]/photos/[photoId]
import React from "react";

interface UserPhotoPagePropsType {
  params: {
    id: number;
    photoId: number;
  };
}

const UserPhotoPage = ({ params: { id, photoId } }: UserPhotoPagePropsType) => {
  return (
    <div>
      UserPhotoPage {id} {photoId}
    </div>
  );
};

export default UserPhotoPage;
