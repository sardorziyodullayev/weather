import { Link } from "react-router-dom";
import { useTheme } from "@/context/theme-provider";
import Logo from "../shared/assets/logo1.svg";
import Logo2 from "../shared/assets/logo2.svg";
import { Moon, Sun } from "lucide-react";

const Header = () => {
	const { theme, setTheme } = useTheme();
	const isDark = theme === "dark";

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto flex h-16 items-center justify-between px-4">
				<Link
					to="/"
					className="text-2xl font-bold text-gray-800 dark:text-gray-200">
					<div className="flex items-center space-x-2">
						<img src={isDark ? Logo : Logo2} alt="Logo" />
						<p className="text-2xl font-bold text-gray-400">Weather</p>
					</div>
				</Link>

				<div
					onClick={() => setTheme(isDark ? "light" : "dark")}
					className={`flex items-center cursor-pointer transition-transform duration-500
               ${isDark ? "rotate-180" : "rotate-0"}
               `}
				>
					{isDark ? (
						<Sun className="h-7 w-7 text-yellow-500 rotate-0 transition-all" />
					) : (
						<Moon className="h-7 w-7 text-blue-500 rotate-0 transition-all" />
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
