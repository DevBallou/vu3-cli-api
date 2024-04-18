<template>
    <article v-for="(type, index) in types" :key="index">
        <div class="product-img">
            <img :src="image">
        </div>
        <div class="product-description">
            <h3>{{ type }}</h3>
            <p>Prix: {{ price }}</p>
            <p>{{ ingredients }}</p>
            <router-link :to="{ name: 'product-details', params: { name: type } }">
                Commander >>
            </router-link>
        </div>
    </article>
</template>

<script>

export default {
    name: 'MyProducts',
    data() {
        return {
            types: ["Pince à linge", "Corde", "Panier à linge", "Bassine", "Lessiveuse"],
            price: 12,
            image: require("../assets/images/1.png"),
            ingredients: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        };
    },

}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Original+Surfer&display=swap");

a {
    background: #c00;
    padding: 5px;
    color: white;
    border-radius: 10px;
    text-decoration: none;
}

a:hover {
    background: #8c0217;
}

article {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 40%;
    border: 1px solid black;
    padding: 10px;
    text-align: center;
    margin-bottom: 30px;
}
</style>