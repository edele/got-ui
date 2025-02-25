import objectEach from "doremi/object/each";

class StatisticRepository {
  fetch() {
    return fetch("json/statistic.json")
      .then((x) => x.json())
      .then((statistics) => {
        this.statistics = this.parse(statistics);

        return this.statistics;
      });
  }

  parse(stats) {
    return {
      playerStats: this.parsePlayerStats(stats),
      houseStats: this.parseHouseStats(stats),
    };
  }

  parsePlayerStats(stats) {
    return stats.playerStats.map((player) => {
      let houses = [];
      let neighbors = [];

      objectEach(player.houses, (house, name) => {
        houses.push({ name, ...house });
      });

      objectEach(player.neighbors, (neighbor, name) => {
        neighbors.push({ name, ...neighbor });
      });

      houses.sort((a, b) => b.gamesCount - a.gamesCount);
      neighbors.sort((a, b) => b.gamesCountWithPair - a.gamesCountWithPair);

      return { ...player, houses, neighbors };
    });
  }

  parseHouseStats(stats) {
    let houseStats = [];

    objectEach(stats.houseStats, (data, name) => houseStats.push({ name, ...data }));
    houseStats.sort((a, b) => b.winsCount - a.winsCount);

    return houseStats;
  }
}

export default StatisticRepository;
