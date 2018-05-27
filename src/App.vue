<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
@font-face {
    font-family:"fzse";
    src: url('./assets/fzse.ttf');
}
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
}

li {
    list-style: none;
}

button:focus,input:focus {
    outline: none;
}

#app {
    position: absolute;
    width: 100vw;
    height: 100vh;
    height: 100%;
    margin: 0 auto;
    padding: 0;
    overflow: hidden;
}
</style>
