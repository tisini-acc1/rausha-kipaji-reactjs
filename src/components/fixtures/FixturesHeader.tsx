type HeaderProps = {
  dates: string[];
  setDates: (d: string) => void;
};

export const FixturesHeader = ({ dates, setDates }: HeaderProps) => {
  return (
    <div className="bg-tisini bg-center h-32 sticky top-0">
      <nav className="flex md:gap-4 gap-2 absolute bottom-1">
        <button
          className="px-4 border rounded-md bg-orange hover:bg-green-600 font-semibold whitespace-nowrap"
          onClick={() => setDates(dates[0])}
        >
          18 Thu
        </button>
        <button
          className="px-4 border rounded-md bg-orange hover:bg-green-600 font-semibold whitespace-nowrap"
          onClick={() => setDates(dates[1])}
        >
          19 Fri
        </button>
        <button
          className="px-4 border rounded-md bg-orange hover:bg-green-600 font-semibold whitespace-nowrap"
          onClick={() => setDates(dates[2])}
        >
          20 Sat
        </button>
        <button
          className="px-4 border rounded-md bg-orange hover:bg-green-600 font-semibold whitespace-nowrap"
          onClick={() => setDates(dates[3])}
        >
          21 Sun
        </button>
      </nav>
    </div>
  );
};
