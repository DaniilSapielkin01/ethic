import { useState, useEffect } from "react";
import { Contact } from "@/shared/types/contact";
import { FALLBACK_CONTACTS } from "@/shared/constants/fallBack";

export const useContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    fetch("/contacts.json")
      .then((r) => r.json())
      .then(setContacts)
      .catch(() => setContacts(FALLBACK_CONTACTS));
  }, []);

  return contacts;
};
