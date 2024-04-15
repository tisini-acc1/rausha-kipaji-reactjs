import { FixturesHeader } from "@components/fixtures/FixturesHeader";
import Spinner from "@components/spinner/Spinner";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { GetFixtures } from "src/lib/getFixtures";
import GroupFixtures from "src/lib/groupFixtures";
import { Fixture } from "types/scores";

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

      <section className="flex flex-col md:flex-row p-2 space-y-1">
        <div className="flex-1">
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

        <div className="w-[300px] ml-2 p-1 border border-black">
          <h1 className="font-bold text-white">Top goal scorers</h1>
        </div>
      </section>
    </main>
  );
};

export default FixturesPage;

interface FixtureCardProps {
  fixture: Fixture;
}

const FixtureCard: React.FC<FixtureCardProps> = ({ fixture }) => {
  const {
    away_score,
    game_status,
    home_score,
    team1_name,
    team2_name,
    matchtime,
    pitchname,
    minute,
  } = fixture;

  return (
    <div className="flex gap-2 text-xs p-1 border-b-2 border-black hover:bg-[#15321c] cursor-pointer">
      <div className="flex items-center justify-center">
        {game_status === "notstarted"
          ? matchtime
          : game_status === "started"
          ? minute
          : "FT"}
      </div>

      <div className="w-full space-y-2 p-1">
        <div className="flex justify-between">
          <div className="flex items-center justify-center gap-2">
            <img src="/homeLogo.png" alt="Logo" className="w-4 h-4" />
            <div>{team1_name}</div>
          </div>

          {game_status !== "notstarted" && (
            <h1 className="font-semibold mr-4">{home_score}</h1>
          )}
        </div>

        <div className="flex justify-between">
          <div className="flex items-center justify-center gap-2">
            <img src="/awayLogo.png" alt="Logo" className="w-4 h-4" />
            <div>{team2_name}</div>
          </div>

          {game_status !== "notstarted" && (
            <h1 className="font-semibold mr-4">{away_score}</h1>
          )}
        </div>
      </div>

      {game_status === "notstarted" && (
        <div className="flex items-center justify-center whitespace-nowrap">
          {pitchname}
        </div>
      )}
    </div>
  );
};
