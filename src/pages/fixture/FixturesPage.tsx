import { FixturesHeader } from "@components/fixtures/FixturesHeader";

const FixturesPage = () => {
  return (
    <main className="min-h-screen bg-primary max-w-[900px] mx-auto ">
      <FixturesHeader />
      <section className="flex p-2 space-y-1">
        <div className="flex-1">
          <nav className="flex gap-x-2 text-white">
            <div className="border p-1">18 Thurs</div>
            <div className="border p-1">19 Fri</div>
          </nav>

          <div className="text-white">
            <div className="mb-4">
              <div className="flex justify-between font-bold bg-black rounded-sm p-1">
                <h2 className="">Group A</h2> <span>Standings</span>
              </div>

              <FixtureCard />
              <FixtureCard />
              <FixtureCard />
              <FixtureCard />
            </div>

            <div className="mb-4">
              <div className="flex justify-between font-bold p-1">
                <h2 className="">Group A</h2> <span>Standings</span>
              </div>

              <FixtureCard />
              <FixtureCard />
              <FixtureCard />
              <FixtureCard />
            </div>
          </div>
        </div>

        <div className="w-[1/3]">Top scorers</div>
      </section>
    </main>
  );
};

export default FixturesPage;

const FixtureCard = () => {
  return (
    <div className="flex gap-2 text-sm border-b hover:bg-orange cursor-pointer">
      <div className="m-2">time</div>
      <div className="w-full">
        <div className="flex justify-between">
          <div className="flex items-center justify-center gap-2">
            <img src="/homeLogo.png" alt="Logo" className="w-4 h-4" />
            <div>Home Team</div>
          </div>

          <h1 className="font-semibold mr-4">0</h1>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center justify-center gap-2">
            <img src="/awayLogo.png" alt="Logo" className="w-4 h-4" />
            <div>Away Team</div>
          </div>

          <h1 className="font-semibold mr-4">0</h1>
        </div>
      </div>
    </div>
  );
};
