const axios = require('axios');
const getCoverPhotosSchema = require('../schemas/get-cover-photos.v1.json')
const https = require("https");

describe('GET /cover-photos', () => {
    let response;
    beforeAll(async() => {
        response = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos');
    })
    it('[GET api/v1/CoverPhotos] should return status code 200 with valid endpoint', async () => {
        expect(response.status).toBe(200);
    })

    it('[GET api/v1/CoverPhotos] should return list of cover photos', async () => {
        expect(response).toBeValidSchema(getCoverPhotosSchema)
    })

    it('[GET api/v1/CoverPhotos] should return status code 200 with valid endpoint', async () => {
        let errorResponse;
        try {
            errorResponse = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos123');
        } catch(responseError) {
            errorResponse = responseError.response
        }
        expect(errorResponse.status).toBe(404);
    })
});