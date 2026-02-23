const { sendHttpRequest } = require('../helpers/sendHTTPRequest');
const postCoverPhotosSchema = require('../schemas/post-cover-photos.v1.json')
const postCoverPhotosSchema400 = require('../schemas/post-cover-photos-400.json')


describe.skip('GET /cover-photos', () => {
    let response;
    let errorResponse;
    beforeAll(async() => {
        const conf = {
            method: 'POST',
            url: 'https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos',
            data: {
                "id": 1000,
                "idBook": 1000,
                "url": "Helloworld"
            }
        }
        response = await sendHttpRequest(conf)
    })

    it('[POST api/v1/CoverPhotos] should return status code 200 with valid data', async () => {
        expect(response.status).toBe(200);
    })

    it('[POST api/v1/CoverPhotos] should return created book', async () => {
        expect(response).toBeValidSchema(postCoverPhotosSchema)
        
    })

    it('[POST api/v1/CoverPhotos] should return status code 400 without data', async () => {
        const conf = {
            method: 'POST',
            url:'https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos',
        }
        errorResponse = await sendHttpRequest(conf)
        console.log(errorResponse)
        expect(errorResponse.status).toBe(400);
    })

    it('[POST api/v1/CoverPhotos] should return list of cover photos', async () => {
        expect(errorResponse).toBeValidSchema(postCoverPhotosSchema400)
    })
});