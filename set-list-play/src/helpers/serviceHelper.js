export default {
    generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        const values = crypto.getRandomValues(new Uint8Array(length))
        return values.reduce((acc, x) => acc + characters[x % characters.length], "")
    },
    
    toString(object) {
        let toReturn = ""
    
        for(const property in object) {
            if(toReturn != "") toReturn += "&"
            if(object[property] && object[property] != "") {
              toReturn += property.toString() + '=' + object[property].toString()
            }
        }

        console.log(toReturn)
    
        return toReturn
    },

    async generateCodeChallenge(codeVerifier) {

        function base64encode(string) {
          return btoa(String.fromCharCode.apply(null, new Uint8Array(string)))
            .replace(/=/g, '-')
            .replace(/\+/g, '_')
            .replace(/\//, '');
        }
      
        const encoder = new TextEncoder();
        const data = encoder.encode(codeVerifier);
        const digest = await window.crypto.subtle.digest('SHA-256', data);
        return base64encode(digest);
      }
}