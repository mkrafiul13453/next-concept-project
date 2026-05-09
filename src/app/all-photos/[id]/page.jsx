import React from 'react';

const PhotoDetailsPge = async ({params}) => {
    const {id}=await params;
    const res = await fetch("https://next-concept-project.vercel.app/data.json");
    const allPhotos = await res.json();
    const photo= allPhotos.find(p=>p.id == id)
    // console.log(id);
    return (
        <div>
            <h1>photo details page</h1>
            <h1>{photo.title}</h1>
            <h1>{photo.category}</h1>
        </div>
    );
};

export default PhotoDetailsPge;