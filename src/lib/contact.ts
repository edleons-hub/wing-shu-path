export const WHATSAPP_NUMBER = '55219715355762164';
export const WHATSAPP_PHONE_NUMBER = '+55219715355762164';
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const whatsappLink = (message?: string) =>
  message ? `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}` : WHATSAPP_BASE_URL;
export const telephoneLink = `tel:${WHATSAPP_PHONE_NUMBER}`;
