import { FixturesHeader } from "@components/fixtures/FixturesHeader";
import Spinner from "@components/spinner/Spinner";
import { useQuery } from "@tanstack/react-query";
import { GetFixtures } from "src/lib/getFixtures";
import GroupFixtures from "src/lib/groupFixtures";
import { Fixture } from "types/scores";

const FixturesPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["fixtures"],
    queryFn: GetFixtures,
  });

  if (isLoading) return <Spinner />;

  const fixturesData = GroupFixtures(data?.data);
  const fixtures = fixturesData["2024-04-18"]["U15 Boys"];

  // console.log(fixtures);

  return (
    <main className="min-h-screen bg-primary max-w-[900px] mx-auto ">
      <FixturesHeader />
      <section className="flex flex-col md:flex-row p-2 space-y-1">
        <div className="flex-1">
          <nav className="grid grid-cols-4 gap-x-2 mb-2 bg-black text-white">
            <div className="border p-1 flex items-center">
              <p>U15</p>
            </div>
            <div className="border p-1">U17</div>
            <div className="border p-1">U19</div>
            <div className="border p-1">U20</div>
          </nav>

          <div className="text-white">
            {Object.entries(fixtures).map(([groupName, groupFixtures]) => (
              <div className="mb-4" key={groupName}>
                <div className="flex justify-between text-sm font-semibold bg-secondary rounded-sm p-2">
                  <h2 className="">
                    {groupFixtures[0].category} - {groupName}
                  </h2>
                  <span className="text-slate-300 text-xs">Standings</span>
                </div>
                {groupFixtures.map((fixture) => (
                  <FixtureCard key={fixture.id} fixture={fixture} />
                ))}
              </div>
            ))}
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
    field_id,
  } = fixture;

  return (
    <div className="flex gap-2 text-xs p-1 border-b-2 border-black hover:bg-[#15321c] cursor-pointer">
      <div className="flex items-center justify-center">{matchtime}</div>

      <div className="w-full space-y-2 p-1">
        <div className="flex justify-between">
          <div className="flex items-center justify-center gap-2">
            <img src="/homeLogo.png" alt="Logo" className="w-4 h-4" />
            <div>{team1_name}</div>
          </div>

          {game_status === "started" && (
            <h1 className="font-semibold mr-4">{home_score}</h1>
          )}
        </div>

        <div className="flex justify-between">
          <div className="flex items-center justify-center gap-2">
            <img src="/awayLogo.png" alt="Logo" className="w-4 h-4" />
            <div>{team2_name}</div>
          </div>

          {game_status === "started" && (
            <h1 className="font-semibold mr-4">{away_score}</h1>
          )}
        </div>
      </div>

      {game_status === "notstarted" && (
        <div className="flex items-center justify-center whitespace-nowrap">
          field {field_id}
        </div>
      )}
    </div>
  );
};
