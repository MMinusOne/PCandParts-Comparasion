export const safeCall = async (action) => {
  const recursive = async () => {
    try {
      return await action();
    } catch {
      await recursive();
      return;
    }
  };

  const data = await recursive();
  return data;
};
