import { atom } from 'nanostores';

export const $invoiceUrl = atom<string | null>(null);
export const $isInvoiceOpen = atom<boolean>(false);

export function openInvoice(url: string) {
  $invoiceUrl.set(url);
  $isInvoiceOpen.set(true);
}

export function closeInvoice() {
  $isInvoiceOpen.set(false);
  $invoiceUrl.set(null);
}

