<template>
    <div id="intro">
        <p>Bienvenue !</p>
        <p>PROMOTION SUR LA 4 LAMP</p>
        <p>NOUVEAUTE - LAMP INGELEC</p>
        <p>JEU CONCOURS</p>
        <Likes />
    </div>
    <div id="product-menu">
        <MyProducts />
    </div>
</template>

<script>
import Likes from "../components/Likes.vue";
export default ({
    name: "MyHome",
    data() {
        return {};
    },

    components: {
        Likes
    },

    methods: {},

    computed: {},
});
</script>

<style scoped>
#intro {
    background-image: url(../assets/images/logo1.jpg);
    background-position: bottom;
    background-size: cover;
    color: #7D133D;
    font-size: 2em;
    font-weight: bold;
    height: 300px;
    padding: 3%;
    text-shadow: gray 0.1em 0.1em 0.2em;
    width: 100%;
}

#product-menu {
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>