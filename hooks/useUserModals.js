import { useState } from "react";

export default function useUserModals() {
  const [modals, setModals] = useState({
    add: false,
    edit: { isOpen: false, user: null },
    delete: { isOpen: false, user: null }
  });

  return {
    modals,
    openAdd: () => setModals(p => ({ ...p, add: true })),
    closeAdd: () => setModals(p => ({ ...p, add: false })),

    openEdit: user => setModals(p => ({ ...p, edit: { isOpen: true, user } })),
    closeEdit: () => setModals(p => ({ ...p, edit: { isOpen: false, user: null } })),

    openDelete: user => setModals(p => ({ ...p, delete: { isOpen: true, user } })),
    closeDelete: () => setModals(p => ({ ...p, delete: { isOpen: false, user: null } })),
  };
}
