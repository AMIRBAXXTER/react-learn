import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {useRoutes} from "react-router-dom"
import routes from "./routes"

export default function App() {
    const router = useRoutes(routes)
	return (
		<div>
			<Header />
            {router}
			<Footer />
		</div>
	);
}
