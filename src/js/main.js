// Import Functions/Classes
import { InfoTile } from "./Components/InfoTile";
import { animations } from "./Utils/LottieInits";
import './Services/FetchMoonPhases';
import { FetchMoonPhases } from "./Services/FetchMoonPhases";

// All Global Inits
animations.init();

// Init Fetch Moon Phases Request
const single = new FetchMoonPhases;
single.init();

new InfoTile('tilesScope', 'tile', {"id": "some_tile_id"}, {});
