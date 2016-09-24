import StatisticRepository from './StatsRepository'
import PlayersStatsVisualizer from './PlayersStatsVisualizer'

const statsRepo = new StatisticRepository()

statsRepo
    .fetch()
    .then(stats => {
        const playersStatsVisualizer = new PlayersStatsVisualizer()
        playersStatsVisualizer.data = stats.playerStats

        const el = document.getElementById('visualization');
        playersStatsVisualizer.showTo(el)
    })
