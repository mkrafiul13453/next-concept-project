import PhotoCard from "@/components/PhotoCard";

const AllPhotosPage = async () => {
    const res = await fetch("https://next-concept-project.vercel.app/data.json");
    const allPhotos = await res.json();
    console.log(allPhotos);
    return (
        <div>
            <h1 className="text-5xl font-bold mt-5 mb-6 ">All Photos</h1>
            <div className="grid grid-cols-4 gap-5">
                {
                    allPhotos.map(photo=><PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default AllPhotosPage;