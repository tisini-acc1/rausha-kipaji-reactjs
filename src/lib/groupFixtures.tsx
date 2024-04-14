import { Fixture, GroupByDate, GroupedFixtures } from "../../types/scores";

const GroupFixtures = (data: Fixture[]) => {
  const groupDataByDate = (data: Fixture[]) => {
    // filter rausha fixtures
    const raushaFixtures = data.filter(
      (fixture) => fixture.league === "Rausha Kipaji Cup"
    );

    const groupedData: GroupByDate = {};

    raushaFixtures.forEach((item) => {
      const date = item.game_date.split(" ")[0];
      if (!groupedData[date]) {
        groupedData[date] = [];
      }
      groupedData[date].push(item);
    });

    return groupedData;
  };

  const groupDataByLeague = (data: GroupByDate) => {
    const groupedData: GroupedFixtures = {};

    for (const [key, value] of Object.entries(data)) {
      if (!groupedData[key]) {
        groupedData[key] = {};
      }

      value.forEach((item) => {
        const league = item.league;

        if (!groupedData[key][league]) {
          groupedData[key][league] = [];
        }

        groupedData[key][league].push(item);
      });
    }

    return groupedData;
  };

  const groupedData = groupDataByDate(data);
  const fixtures = groupDataByLeague(groupedData);
  // console.log(fixtures);

  return fixtures;
};

export default GroupFixtures;
