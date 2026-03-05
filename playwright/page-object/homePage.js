import { Base } from './base'
import { Header } from './components/header'

class HomePage extends Base {
    constructor(page) {
        super(page)
        this.header = new Header(this.page)
    } 
}

export { HomePage };