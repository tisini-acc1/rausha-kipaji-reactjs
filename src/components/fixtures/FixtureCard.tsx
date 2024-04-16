import { Fixture } from "types/scores";

interface FixtureCardProps {
  fixture: Fixture;
}

export const FixtureCard: React.FC<FixtureCardProps> = ({ fixture }) => {
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
