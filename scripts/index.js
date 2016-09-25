import StatisticRepository from './StatsRepository'
import PlayersStatsVisualizer from './PlayersStatsVisualizer'
import HousesStatsVisualizer from './HousesStatsVisualizer'

const statsRepo = new StatisticRepository()

statsRepo
    .fetch()
    .then(stats => {
        const playersStatsVisualizer = new PlayersStatsVisualizer()
        playersStatsVisualizer.data = stats.playerStats

        const housesStatsVisualizer = new HousesStatsVisualizer()
        housesStatsVisualizer.data = stats.houseStats

        playersStatsVisualizer.showTo(document.getElementById('players-visualization'))
        housesStatsVisualizer.showTo(document.getElementById('houses-visualization'))
    })
