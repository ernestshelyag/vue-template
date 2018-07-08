# vue-template
``` bash

npm i
npm start
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# preinstalled sass & pug
(npm i sass-loader node-sass pug -D)

```

### Snippet

``` bash

<template lang="pug">
    include ../assets/bemto/bemto.pug

    // ...

</template>

<script>
    export default {
        name: "..."
    }
</script>

<style lang="sass" scoped>
    @import "../sass/mixins.sass"
    
    // ...

</style>

```


