import axios from "axios";

export const GetFixtures = async () => {
  const data = await axios.get(
    "https://apis.tisini.co.ke/apiagent5.php?leaguefixture=108"
  );

  return data;
};
