export const formatterArray = (data) => {
  const formatData = data?.length
    ? data.map(({ email, first_name, last_name }) => {
        return { email, first_name, last_name };
      })
    : [];
  return formatData;
};
