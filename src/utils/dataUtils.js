export const decodeJson = payload => (JSON.parse(payload) || {});

export const encodeJSON = payload => JSON.stringify(payload);

export const getLocalData = () => decodeJson(localStorage.getItem('data'));

export const currentUser = () => {
  const localData = getLocalData();
  const loggedInUser = localData['currentUser'];
  if (loggedInUser) {
    const {
      displayName: name,
      photoURL: photo,
      email,
      emailVerified: verified,
      phoneNumber: phone
    } = loggedInUser;
    return {
      name,
      photo,
      email,
      verified,
      phone
    };
  } else {
    return false;
  }
};