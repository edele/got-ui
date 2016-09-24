import { json } from 'd3'

class StatisticRepository {
    fetch() {
        return new Promise((done, fail) => {
            json('json/statistic.json', statistics => {
                this.statistics = statistics
                
                done(this.statistics)
            })
        })
    }
}

export default StatisticRepository
