import { useQuery } from "@tanstack/react-query";

import { GetScorers } from "src/lib/getScorers";
import { GetCategories } from "src/lib/getCategories";

export const TopScorers = ({ category }: { category: string }) => {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: GetCategories,
  });

  const categoryId = categories?.data.find((item) => item.name === category);
  const id = categoryId?.id as string;

  const { data, isLoading } = useQuery({
    queryKey: ["scorers", id],
    queryFn: () => GetScorers(id),
  });

  if (isLoading)
    return (
      <div className="w-full md:w-[300px] flex items-center justify-center border border-black text-white">
        Loading...
      </div>
    );
  // console.log(data?.data);

  return (
    <div className="w-full md:w-[300px] ml-2 p-1 border border-black overflow-y-auto">
      <h1 className="font-bold text-white mb-2 bg-black p-1">
        {category} Goals
      </h1>

      {data?.data.length === 0 ? (
        <div className="w-full md:w-[300px] h-auto flex items-center justify-center border border-black text-white">
          No Scorers Yet!
        </div>
      ) : (
        data?.data.map((scores, idx) => (
          <div
            key={idx}
            className="flex justify-between text-white border-b p-1 pr-2"
          >
            <div className="flex items-center justify-center gap-2">
              <div className="w-3 h-3 rounded-full flex items-center justify-center text-xs italic">
                {idx + 1}.
              </div>

              <div className="flex flex-col gap-0 whitespace-nowrap">
                <h1 className="font-semibold text-sm ">{scores.pname}</h1>
                <p className="text-xs text-gray-300">{scores.name}</p>
              </div>
            </div>

            <div className="flex items-center justify-center text-base font-semibold mr-3">
              {scores.tot}
            </div>
          </div>
        ))
      )}
    </div>
  );
};
