const links = [
  {
    label: "Contact Page",
    path: "/contact",
  },
  {
    label: "Chart and Maps Page",
    path: "/charts-and-maps",
  },
];

const Home: React.FC = () => {
  return (
    <div className="bg-cyan-100 pt-8" style={{ height: "100vh" }}>
      {links.map((item) => {
        return (
          <div className="border-2 w-48 text-center ml-8 p-2 mb-4 bg-blue-600 text-white">
            <a href={item.path}>{item.label}</a>
          </div>
        );
      })}
    </div>
  );
};
export default Home;
