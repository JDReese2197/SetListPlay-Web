<template>
    <head>
        <meta charset="UTF-8">
    </head>
    <body class="min-h-full font-helv">
        <div id="content" class="flex flex-col absolute inset-0 overflow-hidden">
            <div id="login-container" class="flex flex-col items-center justify-center h-full m-0">
                <div class="bg-black/50 text-white text-center p-20 mx-0 my-1 rounded-[50px]">
                    <h1 class="text-3xl mb-8 mt-0">Login</h1>
                    <button @click.once="handleLogin" id="login-button" 
                    class="leading-none mt-2.5 mb-5 mx-0 transition-colors duration-700 uppercase whitespace-normal tracking-[2px] 
                    text-white text-sm rounded-full border-0 py-5 px-12 min-w-[160px] 
                    bg-gradient-to-r from-spotify-purple-dark to-spotify-purple-light
                    hover:bg-gradient-to-r hover:from-spotify-purple-dark/70 hover:to-spotify-purple-light/70">
                        Log in with Spotify
                    </button>
                    <p class="login-desc">Please login to get access to  spotify content.</p>
                    <p class="login-desc-small">You will automatically be redirected to this page after login.</p>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
// import spotify from '@/services/spotify'

export default {
    methods: {
        handleLogin() {
            console.log('logging in to spotify')
            window.location.replace(`${process.env.VUE_APP_SPOTIFY_LOGIN}`)
        }
    }
}

</script>

<style>
</style>