import axios from "axios";
import { Scorers } from "types/scores";

export const GetScorers = async (id: string) => {
  const data = await axios.get<Scorers[]>(
    `https://apis.tisini.co.ke/apiagent5.php?leaguetopscorer=108&categorytopscorer=${id}`
  );

  return data;
};
