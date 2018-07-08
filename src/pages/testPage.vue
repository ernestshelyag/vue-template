<template lang="pug">
    include ../assets/bemto/bemto.pug

    +b.test.wrp
        +e.H1.title.h1 test page


</template>

<script>
    export default {
        name: "testPage"
    }
</script>

<style lang="sass">
    @import "../sass/mixins.sass"

    .test
        &__title
            margin-top: 20px

</style>


