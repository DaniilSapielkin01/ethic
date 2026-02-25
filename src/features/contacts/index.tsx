import { useState } from "react";
import { useContacts, useDialInput, useFilteredContacts } from "./hooks";
import { ContactList, DialPad, SearchToggle } from "./components";

export const ContactsFeature = () => {
  const [byName, setByName] = useState(true);
  const { digits, addDigit, deleteDigit, reset } = useDialInput();
  const contacts = useContacts();
  const filtered = useFilteredContacts(contacts, digits, byName);

  const handleToggle = () => {
    setByName((prev) => !prev);
    reset();
  };

  return (
    <div className="flex min-h-screen w-full mt-[10vh]">
      <div className="flex flex-col overflow-hidden w-[375px] rounded-[24px] shadow-2xl max-h-[90vh] h-max">
        {/* Header */}
        <div
          className="pt-7"
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
        </div>

        {/* Contacts */}
        <ContactList contacts={filtered} />
      </div>
    </div>
  );
};
