<template lang="pug">
    include ../assets/bemto/bemto.pug

    +b.HEADER.header
        +e.wrp.wrp
            router-link(to="/")
                +e.logo-block
                    +e.IMG.logo(src="../assets/img/logo.png")
                    +e.H1.title.font
                        span Vue
                        | template
            +e.cont
                router-link(to="/")
                    +e.A.link main
                router-link(to="/testPage")
                    +e.A.link test page

</template>

<script>
    export default {
        name: "header-block"
    }
</script>

<style lang="sass" scoped>
    @import "../sass/mixins.sass"

    .header
        display: block
        border-bottom: solid 1px rgba($font-col, 0.2)
        padding: 5px 0
        &__wrp
            display: flex
            align-items: center
            justify-content: space-between
        &__logo-block
            display: flex
            align-items: center
        &__logo
            width: 50px
            height: 50px
        &__title
            font-size: 30px
            color: $font-col
            margin-left: 10px
            span
                color: $main-col
        &__link
            color: $font-col
            text-transform: uppercase
            font-weight: 200
            margin-left: 30px
            &:hover
                color: $main-col

</style>