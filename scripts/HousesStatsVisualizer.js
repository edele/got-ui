import pluralize from './utils/pluralize'
import objectEach from 'doremi/object/each'

class HousesStatsVisualizer {
    constructor() {
        this.data = []
    }

    showTo(el) {
        let html = '<div class=visualization-block><table>';

        objectEach(this.data, (stats, name) => {
            html += `
				<tr>
					<td class="ratio-gerb">
						<img src="gerbs/${name}.png"/>
					</td>
					<td>
						<div class="ratio-house clearfix">
							<div class="ratio-name">
									${name}
							</div>
							<div class="ratio-stats">
									${stats.winsCount} ${pluralize(stats.winsCount, 'победа', 'победы', 'побед')}
									из ${stats.gamesCount} ${pluralize(stats.gamesCount, 'игры', 'игр', 'игр')}
								<div class=ratio-house-bar style=width:${stats.winsPercent}%></div>
							</div>
						</div>
					</td>
            `
        })
        
        html += '</table></div>'
        
        el.innerHTML = html
    }
}

export default HousesStatsVisualizer
