export const generateTempId = () => {
    return Date.now().toString() + Math.random().toString().substr(2, 5);
  };