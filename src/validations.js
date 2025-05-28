
export function checkRequired(fields) {
  let allValid = true;

  fields.forEach(({ input, errorElement, message }) => {
    const value = input.value.trim();

    if (value === '') {
      errorElement.textContent = `${message} !`;
      errorElement.classList.remove('hidden');
      allValid = false;
    } else if (input.type === 'tel' && !/^\d+$/.test(value)) {
      errorElement.textContent = `Le téléphone doit contenir uniquement des chiffres !`;
      errorElement.classList.remove('hidden');
      allValid = false;
    } else {
      errorElement.classList.add('hidden');
    }
  });

  return allValid;
}

