import { Contact } from "@/shared/types";
import { Avatar } from "./Avatar";

type ContactList = { contacts: Contact[] };

export const ContactList = ({ contacts }: ContactList) => {
  const renderComponent = () => {
    if (!contacts.length)
      return (
        <div className="flex items-center justify-center py-12 text-gray-400 text-[14px]">
          No contacts found
        </div>
      );

    return (
      <>
        {contacts.map((contact, idx) => (
          <div
            key={contact.id}
            className="flex items-center px-4 py-3 gap-4"
            style={{
              borderBottom:
                idx < contacts.length - 1 ? "1px solid #f0f0f0" : "none",
            }}
          >
            <Avatar name={contact.name} image={contact.image} />
            <span className="font-semibold flex-1">{contact.name}</span>
            <span className="text-[12px] text-gray-500 font-normal">
              {contact.phone}
            </span>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="contacts-list overflow-y-auto bg-white max-h-[320px]">
      {renderComponent()}
    </div>
  );
};
