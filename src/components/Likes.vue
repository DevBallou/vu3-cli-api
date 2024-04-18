<template>
    <div id="section-likes">
        <div class="div1">{{ nbrLikes }}</div>
        <div class="div2" @click="addLikes()">J'aime</div>
        <div class="div3">{{ info }}</div>
    </div>
</template>

<script>
import useLikes from "../use/use-likes.vue";
// import useDislikes from "../use/use-dislikes.vue";
export default {
    name: "MyLikes",

    setup() {
        const { nbrLikes, addLikes, message, info } = useLikes();
        return { nbrLikes, addLikes, message, info }
    }
};
</script>

<style scoped>
.div1 {
    background-image: url("../assets/images/heart.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    color: black;
    font-size: 1em;
    font-weight: bold;
    width: 60px;
    height: 50px;
    align-content: center;
}

.div2 {
    background-color: rgb(71, 71, 255);
    padding: 2px 4px;
    margin: 2px;
    border-radius: 20px;
    width: fit-content;
    color: white;
    cursor: pointer;
    font-size: 20px;
}

.div3 {
    color: black;
    font-size: 12px;
    margin: auto 8px;
}

#section-likes {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: row;
    font-size: 24px;
}
</style>