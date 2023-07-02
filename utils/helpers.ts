export const generateId = () => {
  return (
    "id-" + Date.now().toString(36) + Math.random().toString(36).substring(2)
  );
};
