import { useState } from "react";
import { useContacts, useDialInput, useFilteredContacts } from "./hooks";
import { ContactList, DialPad, SearchToggle } from "./components";

export const ContactsFeature = () => {
  const [byName, setByName] = useState(true);
  const { digits, addDigit, deleteDigit, reset } = useDialInput();
  const contacts = useContacts();
  const filtered = useFilteredContacts(contacts, digits, byName);

  const handleToggle = () => {
    setByName(!byName);
    reset();
  };

  return (
    <div className="flex min-h-screen w-full">
      <div
        className="flex flex-col overflow-hidden w-[375px] mt-[5vh] pt-7 rounded-[24px] h-max"
        style={{
          background:
            "linear-gradient(160deg, #04e7e7 0%, #3d5afe 50%, #251285 100%)",
        }}
      >
        <h1 className="text-[28px] text-center text-white font-medium mb-6">
          Find Contacts
        </h1>
        <SearchToggle byName={byName} onToggle={handleToggle} />
        <DialPad digits={digits} onAdd={addDigit} onDelete={deleteDigit} />
        <ContactList contacts={filtered} />
      </div>
    </div>
  );
};
