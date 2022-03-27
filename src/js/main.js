// Import Functions/Classes
import { InfoTile } from "./Components/InfoTile";
import lottie from "./Utils/LottieInits";

// Import Animations
import * as moon from '../animations/moon-phases.json';
import * as sparkles from '../animations/sparkles-animation.json';

// Init Lottie
lottie.init('planet', moon);
lottie.init('sparkles', sparkles);

new InfoTile('tilesScope', 'tile', {"id": "some_tile_id"});
