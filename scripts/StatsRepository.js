import { json } from 'd3'
import objectEach from 'doremi/object/each'

class StatisticRepository {
    fetch() {
        return new Promise((done, fail) => {
            json('json/statistic.json', statistics => {
                this.statistics = this.parse(statistics)
                
                done(this.statistics)
            })
        })
    }

    parse(stats) {
        stats.playerStats = stats.playerStats.map(player => {
            let houses = []
            let neighbors = []

            objectEach(player.houses, (house, name) => {
                houses.push({ name, ...house });
            })

            objectEach(player.neighbors, (neighbor, name) => {
                neighbors.push({ name, ...neighbor });
            })

            houses.sort((a, b) => b.gamesCount - a.gamesCount);
            neighbors.sort((a, b) => b.gamesCountWithPair - a.gamesCountWithPair);

            return { ...player, houses, neighbors }
        })

        return stats;
    }
}

export default StatisticRepository
