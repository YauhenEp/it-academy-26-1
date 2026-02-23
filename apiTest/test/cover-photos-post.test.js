const axios = require('axios');
const postCoverPhotosSchema = require('../schemas/post-cover-photos.v1.json')

describe.skip('GET /cover-photos', () => {
    let response;
    beforeAll(async() => {
        try {
            response = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos', {
                "id": 1000,
                "idBook": 1000,
                "url": "Helloworld"
            });
        } catch (error) {
            response = error.response
        }
        console.log(response)
    })
    it('[POST api/v1/CoverPhotos] should return status code 200 with valid endpoint', async () => {
        expect(response.status).toBe(200);
    })

    it('[POST api/v1/CoverPhotos] should return list of cover photos', async () => {
        expect(response).toBeValidSchema(postCoverPhotosSchema)
    })
});