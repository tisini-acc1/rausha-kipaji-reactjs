import axios from "axios";
import { Category } from "types/scores";

export const GetCategories = async () => {
  const data = await axios.get<Category[]>(
    "https://apis.tisini.co.ke/apiagent5.php?tournamentcategory"
  );

  return data;
};
