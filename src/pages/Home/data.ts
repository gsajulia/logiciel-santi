import carnaval from "../../assets/carnaval.png";
import dashboard from "../../assets/dashboard.png";
import ia from "../../assets/ia.png";
import kanban from "../../assets/kanban.png";
import weather from "../../assets/weather.png";

const options = [
  { img: carnaval, url: "https://carnaval-searcher.vercel.app/" },
  { img: dashboard, url: "https://dashboard-sales-rocketseat-challenge.vercel.app/" },
  { img: ia, url: "https://ai-image-improvement.vercel.app/" },
  { img: kanban, url: "https://kanban-boracodar.vercel.app/" },
  { img: weather, url: "https://weather-dashboard-eosin.vercel.app/" },
];

export const generateRandomOption = () => {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}
