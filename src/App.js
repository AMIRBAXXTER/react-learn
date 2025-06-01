import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
export default function App() {
	return (
		<div>
			<Header />
			<div className="w-full flex justify-center my-10 rounded-lg ">
				<Main />
			</div>
			<Footer />
		</div>
	);
}
