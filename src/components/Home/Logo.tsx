import Eternal from "../../assets/eternal.png";

function Logo() {
  return (
    <div className='flex flex-col gap-6'>
      <img src={Eternal} width={800} height={800} />
      <div className="flex flex-col gap-4">
        <h1 className="text-white text-6xl">The Eternal Jukebox</h1>
        <h2 className="text-white text-xl">
          For when your favorite song just isn't long enough
        </h2>
      </div>
    </div>
  );
}

export default Logo;
