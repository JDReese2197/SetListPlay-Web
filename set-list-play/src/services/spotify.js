// import helper from '@/helpers/serviceHelper'
import axios from 'axios'
const redirectUri = 'http://127.0.0.1:3000/spotify/login/callback'

// const baseURL = 'https://accounts.spotify.com'

const middleware = axios.create({
    baseURL: 'http://localhost:3000/spotify',
    timeout:10000,
});

const spotifyService = axios.create({
    baseURL: 'https://accounts.spotify.com',
    timeout:10000,
});

export default {
    // login() {
    //     localStorage.setItem('code_verifier', '')
    //     localStorage.setItem('client_id', '')
    //     let scope = 'playlist-modify-public playlist-modify-private'
    //     let clientId = '60aef5d0526045cfbca0dccd0710a0f6'
    //     let state = helper.generateRandomString(16)
    //     let codeVerifier = helper.generateRandomString(64)

    //     helper.generateCodeChallenge(codeVerifier)
    //         .then(codeChallenge => {
    //             localStorage.setItem('code_verifier', codeVerifier)
    //             localStorage.setItem('client_id', clientId)

    //             const args = {
    //                 response_type: 'code',
    //                 client_id: clientId,
    //                 scope: scope,
    //                 redirect_uri: redirectUri,
    //                 state: state,
    //                 code_challenge_method: 'S256',
    //                 code_challenge: codeChallenge
    //             }

    //             console.log('args')
    //             console.log(args)
    //             console.log(helper.toString(args))
    //             location =  baseURL + '/authorize?' + helper.toString(args)
    //         })
    // },
    login() {
        middleware.get('/login')
        .then(response => {
            console.log('login response')
            console.log(response)
        })
    },
    async fetchAuthorizationToken(code) {
        let clientId = localStorage.getItem('client_id')
        let codeVerifier = localStorage.getItem('code_verifier')

        let body = new URLSearchParams({
            grant_type: 'authorization_code',
            code,
            redirect_uri: redirectUri,
            client_id: clientId,
            code_verifier: codeVerifier
        })

        return await spotifyService.post(`/api/token`, body, { 
            headers: { 
                'Content-Type' : 'application/x-www-form-urlencoded'
            }
        })
    },
    async refreshAuthorizationToken() {
        let toReturn = { error: null, data: null }
        let body = new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: localStorage.getItem('refresh_token'),
            client_id: localStorage.getItem('client_id')
        })

        spotifyService.post(`/api/token`, body, {
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded'
            }
        })
        .then(response => {
            localStorage.setItem('access_token', response.data.access_token)

            toReturn = { error: false, data: response }
        })
        .catch(error => {
            console.log('Error: ' + error)

            toReturn = { error: true, data: error }
        })
        .finally( () => {
            return toReturn
        })
    }
}