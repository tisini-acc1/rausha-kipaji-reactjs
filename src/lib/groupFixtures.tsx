import { Fixture, GroupedFixtures } from "../../types/scores";

const GroupFixtures = (data: Fixture[]) => {
  const groupData = (data: Fixture[]) => {
    const groupedData: GroupedFixtures = {};

    data.forEach((fixture) => {
      const { game_date, category, groupname } = fixture;
      const date = game_date.split(" ")[0];

      if (!groupedData[date]) {
        groupedData[date] = {};
      }

      if (!groupedData[date][category]) {
        groupedData[date][category] = {};
      }

      if (!groupedData[date][category][groupname]) {
        groupedData[date][category][groupname] = [];
      }

      groupedData[date][category][groupname].push(fixture);
    });

    return groupedData;
  };

  const groupedData = groupData(data);
  // console.log(groupedData);

  return groupedData;
};

export default GroupFixtures;

// const GroupFixtures = (data: Fixture[]) => {
//   const groupDataByDate = (data: Fixture[]) => {
//     const groupedData: GroupByDate = {};

//     data.forEach((item) => {
//       const date = item.game_date.split(" ")[0];
//       if (!groupedData[date]) {
//         groupedData[date] = [];
//       }
//       groupedData[date].push(item);
//     });

//     return groupedData;
//   };

//   const groupDataByCategory = (data: GroupByDate) => {
//     const groupedData: GroupedFixtures = {};

//     for (const [key, value] of Object.entries(data)) {
//       if (!groupedData[key]) {
//         groupedData[key] = {};
//       }

//       value.forEach((item) => {
//         const category = item.category;

//         if (!groupedData[key][category]) {
//           groupedData[key][category] = [];
//         }

//         groupedData[key][category].push(item);
//       });
//     }

//     return groupedData;
//   };

//   const groupedData = groupDataByDate(data);
//   console.log(groupedData);
//   const fixtures = groupDataByCategory(groupedData);
//   console.log(fixtures);

//   return fixtures;
// };

// export default GroupFixtures;
