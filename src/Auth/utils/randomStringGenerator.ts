let counter = 0;

export default function generateUniqueString(length: number): string {
  const timestamp = Date.now().toString();
  const uniqueTimestamp = `${timestamp}-${counter++}`;
  
  if (uniqueTimestamp.length >= length) {
    return uniqueTimestamp.slice(0, length);
  }

  const randomChars = generateRandomChars(length - uniqueTimestamp.length);
  return uniqueTimestamp + randomChars;
}

function generateRandomChars(length: number): string {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomChars = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomChars += charset[randomIndex];
  }
  return randomChars;
}
