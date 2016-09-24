import { json } from 'd3'
import pluralize from './utils/pluralize'


class PlayersStatsVisualizer {
    constructor() {
        this.data = []
    }

    showTo(el) {
        let html = '';

        this.data.forEach(player => {
            const name = player.player
            const { winStat, houses, neighbors, neighborWinStat } = player
            const neighborsPlays = []

            for (let name in neighbors) {
                if (neighbors.hasOwnProperty(name)) {
                    neighborsPlays.push(`${name}: ${neighbors[name].gamesCountWithPair}`)
                }
            }

            debugger
            html += `
                <div><b>${name}</b></div>
                <div class=ratio>
                    ${winStat.winsCount} ${pluralize(winStat.winsCount, 'победа', 'победы', 'побед')}
                    из ${winStat.gamesCount} ${pluralize(winStat.gamesCount, 'игры', 'игр', 'игр')}
                    <div class=ratio-bar style=width:${winStat.winsPercent}%></div>
                </div>
                <div>
                    Игры с соседями: <br>
                    ${neighborsPlays.join(', ')}
                </div>
                <br><br>
            `
        })
        
        el.innerHTML = html
    }
}

export default PlayersStatsVisualizer
