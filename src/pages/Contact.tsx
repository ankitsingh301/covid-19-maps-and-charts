import AllContact from "../components/AllContact";
import CreateContact from "../components/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { showCreateScreen } from "../Redux/Action";

const Contact: React.FC = () => {
  const dispatch = useDispatch();
  const showCreateContactScreen = useSelector(
    (state: any) => state.ContactState.showCreateContactScreen
  );

  function handleClick() {
    dispatch(showCreateScreen());
    console.log(showCreateContactScreen);
  }

  return (
    <div className="container mx-auto bg-cyan-100" style={{ height: "100vh" }}>
      <div className="border-2 w-24 text-center p-2 bg-blue-600 text-white">
        <a href="/">Home</a>
      </div>
      <div className=" text-center justify-center pt-20">
        {showCreateContactScreen ? (
          <CreateContact />
        ) : (
          <div className="flex justify-center grid">
            <div>
              <button
                className="border-2 border-black w-40 py-4 text-white bg-blue-500 font-medium"
                onClick={handleClick}
              >
                Create Contact
              </button>
            </div>
            <AllContact />
          </div>
        )}
      </div>
    </div>
  );
};
export default Contact;
