import pluralize from './utils/pluralize'
import objectEach from 'doremi/object/each'

class HousesStatsVisualizer {
    constructor() {
        this.data = []
    }

    showTo(el) {
        let html = '<div class=clearfix>';

        objectEach(this.data, (stats, name) => {
            html += `
                <div class='house-stat clearfix'>
                    <img class=house-stat__gerb src="gerbs/${name}.png"/>
                    <div class="house-stat__text">
                        <div class=house-stat__name>${name}</div>
                        <span class=house-stat__wins>${stats.winsCount}</span>
                        <span class=house-stat__total>/${stats.gamesCount}</span>
                    </div>
                </div>
            `
        })
        
        html += '</div>'
        
        el.innerHTML = html
    }
}

export default HousesStatsVisualizer
