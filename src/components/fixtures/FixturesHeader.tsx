type HeaderProps = {
  selectedDate: string;
  dates: string[];
  setDates: (d: string) => void;
};

export const FixturesHeader = ({
  selectedDate,
  dates,
  setDates,
}: HeaderProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "short" });
    return `${day} ${dayOfWeek}`;
  };

  return (
    <div className="bg-tisini bg-center h-32 sticky top-0">
      <nav className="flex md:gap-4 gap-2 absolute bottom-1">
        {dates.map((date, index) => (
          <button
            key={index}
            className={`px-4 border rounded-md hover:bg-green-600 font-semibold whitespace-nowrap ${
              selectedDate === date ? "bg-green-600" : "bg-orange"
            }`}
            onClick={() => setDates(date)}
          >
            {formatDate(date)}
          </button>
        ))}
      </nav>
    </div>
  );
};
