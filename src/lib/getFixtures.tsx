import axios from "axios";

export const GetFixtures = async () => {
  const data = await axios.get(
    "https://apis.tisini.co.ke/apiagent2.php?fixture=all&fixtype=football"
  );

  return data;
};
