import { atom } from 'jotai';

export const toastAtom = atom([]);

export const derivedToastAtom = atom((get) => get(toastAtom));

export const showToastAtom = atom(null, (get, set, payload) => {
  const currentStack = get(toastAtom);
  const { props } = payload;

  return set(toastAtom, [
    ...currentStack,
    {
      id: Date.now(),
      props,
      isOpen: true,
    },
  ]);
});

export const closeToastAtom = atom(null, (get, set, toastID) => {
  const currentStack = get(toastAtom);

  set(
    toastAtom,
    currentStack.filter((toast) => toast.id !== toastID)
  );
});
