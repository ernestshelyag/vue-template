<template lang="pug">
    include ../assets/bemto/bemto.pug

    +b.main.wrp
        +e.H1.title.h1 main page

</template>

<script>
    export default {
        name: "mainPage"
    }
</script>

<style lang="sass" scoped>
    @import "../sass/mixins.sass"

    .main
        &__title
            margin-top: 20px

</style>