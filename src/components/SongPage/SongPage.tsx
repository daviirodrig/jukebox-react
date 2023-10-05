import Eternal from "../../assets/eternal.png";
import Controls from "./Controls";
function SongPage() {
  return (
    <div className="flex flex-row gap-8">
      <div className="flex flex-col gap-6">
        <img src={Eternal} width={800} height={800} />
        <Controls />
      </div>
      <img src={Eternal} alt="Album cover" width={500} height={500} />
    </div>
  );
}
export default SongPage;
