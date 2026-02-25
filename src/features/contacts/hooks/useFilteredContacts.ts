import { Contact } from "@/shared/types";
import { matchByName, matchByNumber } from "@/shared/utils";

export const useFilteredContacts = (
  contacts: Contact[],
  digits: string,
  byName: boolean
) =>
  contacts.filter((c) =>
    byName ? matchByName(c.name, digits) : matchByNumber(c.phone, digits)
  );
