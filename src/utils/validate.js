export function validateEmail(email) {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
}

export function validatePassword(password) {
  return password.length >= 6;
}

export function validateRequired(value) {
  return !!value;
}

export function validateRequiredArray(array) {
  return array.length > 0;
}

export function validateNumber(number) {
  return !isNaN(number);
}

export function validateUrl(url) {
  return /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/.test(url)
}
