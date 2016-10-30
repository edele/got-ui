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
            const housesPlays = []

            houses.forEach(house => {
                housesPlays.push(`<tr>
                    <td>${house.name}</td>
                    <td>${house.gamesCount}</td>
					<td>`+(house.winsCount > 0 ?`(${house.winsCount} ${pluralize(house.winsCount, 'победа', 'победы', 'побед')})`:``)+`</td>
                <tr>`)
            })

            neighbors.forEach(neighbor => {
                neighborsPlays.push(`<tr>
                    <td>${neighbor.name}</td>
                    <td>${neighbor.gamesCountWithPair}</td>
					<td>`+(neighbor.winsCountWithPair > 0 ?`(${neighbor.winsCountWithPair} ${pluralize(neighbor.winsCountWithPair, 'победа', 'победы', 'побед')})`:``)+`</td>
                <tr>`)
            })

            html += `
                <div class=visualization-block>
                    <div class="ratio-player clearfix">
                        <div class=ratio-name>${name}</div>
                        <div class=ratio-stats>
                            ${winStat.winsCount} ${pluralize(winStat.winsCount, 'победа', 'победы', 'побед')}
                            из ${winStat.gamesCount} ${pluralize(winStat.gamesCount, 'игры', 'игр', 'игр')}
                            <div class=ratio-player-bar style=width:${winStat.winsPercent}%></div>
                        </div>
                    </div>
                    <div class=clearfix>
                        <div class="player-neighbor stat-block">
                            <div class=stat-block-header>Соседствовал с</div>
                            <table class=table>
                                ${neighborsPlays.join('')}
                            </table>
                        </div>
                        <div class="player-houses stat-block">
                            <div class=stat-block-header>Играл за</div>
                            <table class=table>
                                ${housesPlays.join('')}
                            </table>
                        </div>
                    </div>
                    <div class=stat-block>
                        <div class=stat-block-header>Победы соседа</div>
                        <div>${Math.round(player.neighborWinStat.winsPercent)}%</div>
                    </div>
                </div>
            `
        })
        
        el.innerHTML = html
    }
}

export default PlayersStatsVisualizer
