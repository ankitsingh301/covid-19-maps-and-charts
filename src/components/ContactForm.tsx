//Create contact form to create new contact and also with edit and delete the existing contact funtionality.

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  editSelectedItem,
  showCreateScreen,
} from "../Redux/Action";

const ContactForm: React.FC = () => {
  const dispatch = useDispatch();
  const selectedContact = useSelector(
    (state: any) => state.ContactState.selectedContact
  );

  const [contactDetails, setContactDetails] = useState<any>({});
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [editedContactDetail, setEditedContactDetail] = useState<any>({});
  function handleInputChange(e: any) {
    const { name, value } = e.target;
    setSelectedStatus(e.target.value);
    if (Object.keys(selectedContact).length > 0) {
      setEditedContactDetail({ ...editedContactDetail, [name]: value });
    } else {
      setContactDetails((contactDetails: any) => ({
        ...contactDetails,
        [name]: value,
      }));
    }
  }
  function handleClick() {
    if (Object.keys(selectedContact).length > 0) {
      console.log("CALLLLLLLLLLWSSS");
      dispatch(editSelectedItem(editedContactDetail));
      dispatch(showCreateScreen());
    } else if (Object.keys(contactDetails).length === 3) {
      dispatch(addContact(contactDetails));
      dispatch(showCreateScreen());
      setContactDetails({});
    } else {
      alert("PLEASE ENTER ALL DETAILS");
    }
  }
  useEffect(() => {
    if (Object.keys(selectedContact).length > 0) {
      setSelectedStatus(selectedContact.status);
      setEditedContactDetail({ ...editedContactDetail, ...selectedContact });
    }
  }, [selectedContact]);
  return (
    <div className="flex justify-center grid">
      <div className="text-black-800 font-medium text-2xl text-red-600">
        Please enter valid details
      </div>
      <div className="border-2 border-black py-4 font-medium mt-10 w-auto p-8 text-start">
        <div className=" grid grid-cols-2 ">
          <div className="text-center">
            <div className="mt-4">First Name:</div>
            <div className="mt-4">Last Name:</div>
          </div>
          <div className="text-center">
            <div className="mt-4">
              <input
                className="border-2 border-slate-500 w-full pl-0.5"
                type="text"
                name="firstName"
                defaultValue={`${
                  selectedContact && selectedContact.firstName
                    ? selectedContact.firstName
                    : ""
                }`}
                onChange={handleInputChange}
                required
              ></input>
            </div>
            <div className="mt-4">
              <input
                className="border-2 border-slate-500 w-full pl-0.5"
                type="text"
                name="lastName"
                defaultValue={`${
                  selectedContact && selectedContact.lastName
                    ? selectedContact.lastName
                    : ""
                }`}
                onChange={handleInputChange}
                required
              ></input>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-4">
          <div className="text-center">Status:</div>
          <div className="grid text-start">
            <div>
              <input
                type="radio"
                name="status"
                value="Active"
                checked={selectedStatus === "Active"}
                onChange={handleInputChange}
              ></input>
              <span className="ml-2">Active</span>
            </div>
            <div>
              <input
                type="radio"
                name="status"
                value="Inactive"
                checked={selectedStatus === "Inactive"}
                onChange={handleInputChange}
              ></input>
              <span className="ml-2">Inactive</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <button
          className="border-2 border-black w-40 py-4 text-white bg-blue-500 font-medium"
          onClick={handleClick}
        >
          Save
        </button>
      </div>
    </div>
  );
};
export default ContactForm;
