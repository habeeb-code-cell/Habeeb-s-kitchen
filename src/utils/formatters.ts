export const formatPrice = (price: number): string => {
  return `₦${price.toLocaleString('en-NG')}`;
};

export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digits
  const digits = phone.replace(/\D/g, '');
  
  // If starts with 234, format as +234 XXX XXX XXXX
  if (digits.startsWith('234')) {
    const number = digits.slice(3);
    return `+234 ${number.slice(0, 3)} ${number.slice(3, 6)} ${number.slice(6)}`;
  }
  
  // If starts with 0, replace with +234
  if (digits.startsWith('0')) {
    const number = digits.slice(1);
    return `+234 ${number.slice(0, 3)} ${number.slice(3, 6)} ${number.slice(6)}`;
  }
  
  return phone;
};

export const validateNigerianPhone = (phone: string): boolean => {
  const digits = phone.replace(/\D/g, '');
  
  // Should be 11 digits starting with 0, or 13 digits starting with 234, or 10 digits without country code
  return (
    (digits.length === 11 && digits.startsWith('0')) ||
    (digits.length === 13 && digits.startsWith('234')) ||
    (digits.length === 10 && !digits.startsWith('0'))
  );
};

export const formatDeliveryTime = (minutes: number): string => {
  if (minutes < 60) {
    return `${minutes} mins`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMins = minutes % 60;
  return remainingMins > 0 ? `${hours}h ${remainingMins}m` : `${hours}h`;
};

export const generateOrderId = (): string => {
  return `HK${Date.now().toString().slice(-6)}${Math.random().toString(36).substr(2, 3).toUpperCase()}`;
};