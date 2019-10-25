const isAllCharNum = value => /^\d+$/.test(value);

export const usernameValidation = username => {
  if (!username) {
    return "Kullanıcı adı boş olamaz!";
  }
  if (username.length < 3) {
    return "Geçersiz kullanıcı adı!";
  }
  return null;
};

export const mobilePhoneValidation = mobilePhone => {
  if (!mobilePhone) {
    return "Cep telefonu boş olamaz!";
  }
  if (mobilePhone.length < 10) {
    return "Cep telefonu 11 karakterden az olamaz!";
  }
  if (mobilePhone.length > 10) {
    return "Cep telefonu 11 karakterden fazla olamaz!";
  }
  if (!isAllCharNum(mobilePhone)) {
    return "Cep telefonu sadece rakamlardan oluşmalıdır!";
  }
  return null;
};

export const tcknValidation = tckn => {
  if (!tckn) {
    return "TC Kimlik numarası boş olamaz!";
  }
  if (tckn.length !== 11) {
    return "TC Kimlik numarası 11 haneli olmalıdır!";
  }
  if (!isAllCharNum(tckn)) {
    return "TC Kimlik numarası sadece rakamlardan oluşmalıdır!";
  }
  return null;
};

export const passwordValidation = password => {
  if (!password) {
    return "Şifre boş olamaz!";
  }
  if (password.length < 4) {
    return "Şifrenız 4 karakterden az olamaz!";
  }
  return null;
};

export const newPasswordValidation = (newPassword, repassword) => {
  if (newPassword !== repassword) {
    return "Yeni Şifre ve Yeni Şifre Tekrar alanlarının eşleştiğinden emin olun!";
  }
  return null;
};

export const confirmationCodeValidation = confirmationCode => {
  if (!confirmationCode) {
    return "Onay kodu boş olamaz!";
  }
  if (confirmationCode.length !== 6) {
    return "Onay kodu 6 karakter olmalıdır!";
  }
  if (!isAllCharNum(confirmationCode)) {
    return "Onay kodu sadece rakamlardan oluşmalıdır!";
  }
  return null;
};

export const eMailValidation = email => {
  if (!email) {
    return "E-posta alanı boş olamaz!";
  }
  const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (!re.test(String(email))) {
    return "Lütfen geçerli bir mail adresi giriniz!";
  }

  return null;
};

export const nameValidation = (name, field) => {
  if (!name) {
    return `${field} boş olamaz!`;
  }
  if (isAllCharNum(name)) {
    return `${field} sadece harflerden oluşmalıdır!`;
  }
  return null;
};
