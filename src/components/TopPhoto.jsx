import PhotoCard from './PhotoCard';

const TopPhoto =async () => {
    const res = await fetch("https://next-concept-project.vercel.app/data.json");
    const photos = await res.json();
    const topPhotos = photos.slice(0,8);
    console.log(topPhotos);
    return (
        <div>
            <h1 className='text-5xl font-bold mt-3.5'>Top generation</h1>
            <div className='grid grid-cols-4 gap-3 mt-6'>
                {
                    topPhotos.map(photo=><PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default TopPhoto;