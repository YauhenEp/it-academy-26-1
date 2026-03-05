class Base {
    constructor(page) {
        this.page = page;
    }

    async navigate(url, endpoint) {
        await this.page.goto(`${url}${endpoint ? endpoint : ''}`)
    }
}

export { Base }