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
                    neighborsPlays.push(`<tr>
                        <td style=padding-right:10px>${name}</td>
                        <td>${neighbors[name].gamesCountWithPair}</td>
                    <tr>`)
                }
            }

            debugger
            html += `
                <div class=ratio>
                    <b style=margin-right:20px>${name}</b>
                    ${winStat.winsCount} ${pluralize(winStat.winsCount, 'победа', 'победы', 'побед')}
                    из ${winStat.gamesCount} ${pluralize(winStat.gamesCount, 'игры', 'игр', 'игр')}
                    <div class=ratio-bar style=width:${winStat.winsPercent}%></div>
                </div>
                <div>
                    Игры с соседями: <br>
                    <div class=neighbors>
                        <table>
                            ${neighborsPlays.join('')}
                        </table>
                    </div>
                </div>
                <br><br>
            `
        })
        
        el.innerHTML = html
    }
}

export default PlayersStatsVisualizer
