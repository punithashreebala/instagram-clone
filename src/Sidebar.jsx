
import {
  Home,
  Search,
  Compass,
  Clapperboard,
  MessageCircle,
  Heart,
  PlusSquare,
  Menu
} from "lucide-react";

import logo from './assets/instalogo.svg'

const menuItems = [
  { name: "Home", icon: Home },
  { name: "Search", icon: Search },
  { name: "Explore", icon: Compass },
  { name: "Reels", icon: Clapperboard },
  { name: "Messages", icon: MessageCircle },
  { name: "Notifications", icon: Heart },
  { name: "Create", icon: PlusSquare }
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <img
        src={logo}
        alt="InstaPractice"
        className="logo"
      />

      <nav>
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <div className="nav-item" key={item.name}>
              <Icon size={24} />
              <span>{item.name}</span>
            </div>
          );
        })}
      </nav>

      <div className="nav-item more-menu">
        <Menu size={24} />
        <span>More</span>
      </div>
    </aside>
  );
}

export default Sidebar;
