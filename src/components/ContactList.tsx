//Component to show all the conatct and has edit and delete contact functionality

import { useDispatch, useSelector } from "react-redux";
import {
  deleteListItem,
  selectedListItem,
  showCreateScreen,
} from "../Redux/Action";

const ContactList: React.FC = () => {
  const dispatch = useDispatch();
  const contactList = useSelector((state: any) => state.ContactState.list);
  function handleDelete(id: number) {
    dispatch(deleteListItem(id));
  }
  function handleEdit(id: number) {
    dispatch(showCreateScreen());
    dispatch(selectedListItem(id));
  }
  return (
    <div className="w-auto">
      <div className="my-10 text-black-600 font-bold text-2xl">
        List of Contacts
      </div>

      <div className="grid grid-flow-col xs:grid-flow-row gap-4 text-center flex justify-center ">
        {contactList.length > 0 &&
          contactList.map((item: any) => {
            return (
              <div className="border-2 border-black w-48 text-start bg-white">
                <div className="grid p-4">
                  <div>
                    <span className="font-bold text-xl">
                      {item.firstName + " " + item.lastName}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-blue-800">status:</span>{" "}
                    <span
                      className={`${
                        item.status === "Active"
                          ? "text-red-600"
                          : "text-green-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
                <div className="p-2">
                  <button
                    className="border-2 border-black p-2 text-white bg-green-600 font-medium mr-2"
                    onClick={() => handleEdit(item.id)}
                  >
                    EDIT
                  </button>
                  <button
                    className="border-2 border-black p-2 text-white bg-red-500 font-medium"
                    onClick={() => handleDelete(item.id)}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default ContactList;
