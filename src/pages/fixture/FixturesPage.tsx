import { FixturesHeader } from "@components/fixtures/FixturesHeader";
import { useQuery } from "@tanstack/react-query";
import { GetFixtures } from "src/lib/getFixtures";
import GroupFixtures from "src/lib/groupFixtures";
import { Fixture } from "types/scores";

const FixturesPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["fixtures"],
    queryFn: GetFixtures,
  });

  if (isLoading) return <div className="h-24 items-center">Loading...</div>;

  const fixturesData = GroupFixtures(data?.data);
  const fixtures = fixturesData["2024-04-18"]["Rausha Kipaji Cup"];
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
            <div className="mb-4">
              <div className="flex justify-between font-bold bg-secondary rounded-sm p-1">
                <h2 className="">Rausha Kipaji Cup -U15</h2>{" "}
                <span>Standings</span>
                {/* <h2 className="">Group A</h2> <span>Standings</span> */}
              </div>

              {fixtures.map((fixture) => (
                <FixtureCard key={fixture.id} fixture={fixture} />
              ))}
            </div>
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
  const { away_score, game_status, home_score, team1_name, team2_name } =
    fixture;

  return (
    <div className="flex gap-2 text-sm border-b-2 border-black hover:bg-secondary cursor-pointer">
      <div className="m-2">time</div>
      <div className="w-full">
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
    </div>
  );
};
