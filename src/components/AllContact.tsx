import crossSign from "../assests/crossSign.avif";
import ContactList from "./ContactList";
import { useSelector } from "react-redux";

const AllContact: React.FC = () => {
  const contactItem = useSelector((state: any) => state.ContactState.list);
  return (
    <div>
      {contactItem.length > 0 ? (
        <ContactList />
      ) : (
        <div className="border-2 border-black w-80 py-4 text-black-600 bg-gray-300 font-medium mt-20 grid grid-cols-6 text-center">
          <div className="mt-4 ml-4">
            <img src={crossSign} width="40px" height="40px"></img>
          </div>
          <div className="col-span-5">
            No Contact Found <br /> Please add contact from <br />
            <span className="text-green-600">Create Contact Button</span>
          </div>
        </div>
      )}
    </div>
  );
};
export default AllContact;
