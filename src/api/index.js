import {GenericRestClient} from 'simplerestclients'

class apiService extends GenericRestClient {
    constructor() {
        super('http://59ac59a6552fb200117f26ef.mockapi.io/api/');
        this._appId = "TESTE"        
    }

    _getHeaders(options) {
        let headers = super._getHeaders(options);
        headers['X-AppId'] = this._appId;
        return headers;
    }

    getTours() {
        return this.performApiGet('excursion');
    }
}

export default new apiService()