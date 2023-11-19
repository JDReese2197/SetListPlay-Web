<template>
    <body>
        <div id="content">
            <div id="login-container">
                <div class="login">
                    <h1>Logging you in</h1>
                    <p class="login-desc">We are currently logging you in.  Please wait a moment.</p>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
// import spotify from '@/services/spotify'

export default {
    data() {
        return {}
    },
    // beforeMount() {
    //     let searchParams = new URLSearchParams(window.location.search)
    //     let code = searchParams.get('code')

    //     spotify.fetchAuthorizationToken(code)
    //     .then(response => {
    //         console.log(response)
    //         if(!response) {
    //             console.log('no response returned from function')
    //         }
    //         else if(response.error || response.error !== null) {
    //             console.log(`Error fetching Authorization Token: ${response.data}`)
    //             this.$router.go(-1)
    //         }
    //         else {
    //             console.log('carrying on')
    //             this.$router.push({name: 'Home'})
    //         }
    //     })
    //     .then(data => {
    //         localStorage.setItem('access_token', data.access_token)
    //         localStorage.setItem('refresh_token', data.refresh_token)
    //     })
    //     .catch(error => {
    //         console.log(`Error: ${error}`)
    //     })
    // },
}
</script>

<style>
    html, body {
        min-height: 100%;
    }

    body {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    h1 {
        font-size: 2em;
        margin-bottom: 12px;
        margin-top: 0;
    }

    #content {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
            flex-direction: column;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        overflow: hidden;
    }

    #login-container {
        display: -ms-flexbox;
        display: flex;
        height: 100%;
        -ms-flex-direction: column;
            flex-direction: column;
        -ms-flex-align: center;
            align-items: center;
        margin: 0 auto;
        -ms-flex-pack: center;
            justify-content: center;
    }

    #login-container .login {
        background-color: rgba(0,0,0,.5);
        color: #ffffff;
        text-align: center;
        padding: 70px;
    }

    #login-container .login .big-btn {
        margin: 10px 0 20px 0;
    }

    #login-container .login p {
        margin: 5px 0;
        font-size: 14px;
    }
</style>