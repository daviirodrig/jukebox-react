import {
  faPause,
  faPlay,
  faGear,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Controls() {
  const [playing, setPlaying] = useState(false);

  function play() {
    setPlaying(!playing);
  }
  return (
    <div className="flex flex-row text-white justify-center">
      <div className="flex flex-row bg-[rgb(64,84,104)] rounded-xl gap-8 text-xl p-1.5">
        <button className="flex gap-2 items-center" onClick={play}>
          <FontAwesomeIcon icon={playing ? faPause : faPlay} />
          Play
        </button>
        <button className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faGear} />
          Tune
        </button>
        <button className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faShareAlt} />
          Short URL
        </button>
      </div>
    </div>
  );
}
export default Controls;
