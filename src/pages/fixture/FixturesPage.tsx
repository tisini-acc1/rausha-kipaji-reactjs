import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import Spinner from "@components/spinner/Spinner";
import { GetFixtures } from "src/lib/getFixtures";
import GroupFixtures from "src/lib/groupFixtures";
import { TopScorers } from "@components/fixtures/TopScorers";
import { FixtureCard } from "@components/fixtures/FixtureCard";
import { FixturesHeader } from "@components/fixtures/FixturesHeader";

const DATES = ["2024-04-18", "2024-04-19", "2024-04-20", "2024-04-21"];

const FixturesPage = () => {
  const [date, setDate] = useState(DATES[0]);
  const [category, setCategory] = useState("U15 Boys");

  const { data, isLoading } = useQuery({
    queryKey: ["fixtures"],
    queryFn: GetFixtures,
  });

  if (isLoading) return <Spinner />;

  const fixturesData = GroupFixtures(data?.data);
  const fixtures =
    fixturesData[date] && fixturesData[date][category]
      ? fixturesData[date][category]
      : [];

  // console.log(category);
  // console.log(fixtures);
  // console.log(fixturesData[date]);

  return (
    <main className="min-h-screen bg-primary max-w-[900px] mx-auto ">
      <FixturesHeader selectedDate={date} dates={DATES} setDates={setDate} />

      <section className="flex flex-col md:flex-row space-y-1">
        <div className="flex-1 p-2">
          <nav className="grid grid-cols-4 gap-x-2 mb-2 bg-black text-white">
            {fixturesData[date] !== undefined &&
              Object.entries(fixturesData[date]).map(([category]) => (
                <div
                  className="border p-1 flex items-center cursor-pointer hover:bg-green-600"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  <p>{category}</p>
                </div>
              ))}
          </nav>

          <div className="text-white">
            {fixtures.length === 0 ? (
              <div className="flex items-center justify-center h-96">
                No fixture yet!
              </div>
            ) : (
              Object.entries(fixtures).map(([groupName, groupFixtures]) => (
                <div className="mb-4" key={groupName}>
                  <div className="flex justify-between text-sm font-semibold bg-secondary rounded-sm p-2">
                    <h2 className="">
                      {groupFixtures[0].category} - {groupName}
                    </h2>
                    <span className="text-slate-300 text-xs cursor-pointer hover:text-green-600">
                      Standings
                    </span>
                  </div>
                  {groupFixtures.map((fixture) => (
                    <FixtureCard key={fixture.id} fixture={fixture} />
                  ))}
                </div>
              ))
            )}
          </div>
        </div>

        <TopScorers category={category} />
      </section>
    </main>
  );
};

export default FixturesPage;
