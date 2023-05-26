export function addContact(data: object) {
  return {
    type: "ADD_NEW_CONTACT",
    payload: {
      id: new Date().getTime().toString(),
      data,
    },
  };
}
export function showCreateScreen() {
  return {
    type: "SHOW_CREATE_CONTACT_SCREEN",
  };
}
export function deleteListItem(id: number) {
  return {
    type: "DELETE_ITEM",
    id,
  };
}
export function selectedListItem(id: number) {
  return {
    type: "SELECTED_ITEM",
    id,
  };
}
export function editSelectedItem(editedData: object) {
  console.log("ACTION CALLED");

  return {
    type: "EDIT_SELECTED_ITEM",
    editedData,
  };
}
