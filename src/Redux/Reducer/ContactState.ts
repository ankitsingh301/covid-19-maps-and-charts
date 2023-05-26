const INITIALSTATE: any = {
  list: [],
  showCreateContactScreen: false,
  selectedContact: {},
};
const ContactState = (state = INITIALSTATE, action: any) => {
  switch (action.type) {
    case "ADD_NEW_CONTACT":
      const { id, data } = action.payload;
      const newData = { ...data, id };
      return {
        ...state,
        list: [...state.list, newData],
      };

    case "SHOW_CREATE_CONTACT_SCREEN":
      return {
        ...state,
        showCreateContactScreen: !state.showCreateContactScreen,
      };

    case "DELETE_ITEM":
      const newList = state.list.filter((item: any) => item.id !== action.id);
      return { ...state, list: newList };
    case "SELECTED_ITEM": {
      const contact = state.list.filter((item: any) => item.id === action.id);
      return {
        ...state,
        selectedContact: contact[0],
      };
    }
    case "EDIT_SELECTED_ITEM":
      console.log("REDUCER CALLED", action.editedData);
      const editedNewList = state.list.map((item: any) => {
        if (item.id === action.editedData.id) {
          return { ...item, ...action.editedData };
        } else {
          return item;
        }
      });
      console.log("REDUXEDITEDLIST", editedNewList);
      return { ...state, list: editedNewList, selectedContact: {} };
    default:
      return state;
  }
};
export default ContactState;
