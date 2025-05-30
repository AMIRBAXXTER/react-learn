import "./Header.css";
export default function Header() {
  return (
    <div className="bg-gray-400 p-4 text-center flex justify-between items-center">
      <h1>Header</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click me
      </button>
    </div>
  );
}
