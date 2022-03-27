import { InfoTile } from "./Components/InfoTile";
import lottie from "./Utils/LottieInits";

lottie.init('home-banner__background-planet', 'https://localhost:80/animations/moon-phases.json');
lottie.init('home-banner__background-sparks', 'https://localhost:80/sparkles-animation.json');

new InfoTile('tilesScope', 'tile', {"id": "some_tile_id"});
