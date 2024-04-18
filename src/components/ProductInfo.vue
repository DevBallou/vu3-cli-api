<template>
    <!-- Image du produit -->
    <div class="product-image">
        <img :src="img" />
    </div>

    <!-- Description du produit -->
    <div class="product-description">
        <h1>
            <!-- {{ $route.params.name }} -->
            {{ title }}
            <img class="img-best-seller" src="../assets/images/gold-label-best-seller.jpg" />
        </h1>
        <p v-show="notAvailable">Momentanément indisponible</p>

        <p v-if="sale">
            <span class="sale">{{ price }} € </span>
            <span class="new-price"> {{ price - 5 }} € PROMOTION</span>
        </p>
        <p v-else>
            <span class="price">{{ price }} €</span>
        </p>

        <br />
        <strong>Ingrédients </strong>
        <div>
            <span v-for="(ingredient, index) in ingredients" :key="index">{{ ingredient + ", " }}
            </span>
        </div>
        <br />
        <div class="sauces">
            <strong>Sauces au choix</strong>
            <ul>
                <li v-for="(sauce, index) in sauces" :key="index" @mouseover="updateImage(sauce.image)"
                    :style="{ backgroundColor: sauce.color }">
                    {{ sauce.type }}
                </li>
            </ul>
        </div>
        <div>
            <strong>Valeurs nutritionnelles pour 100 grammes</strong>
            <ul>
                <li v-for="(value, name, index) in energy" :key="index">
                    {{ name }} : {{ value }}
                </li>
            </ul>
        </div>

        <!-- Bouton d'ajout au panier -->
        <button v-bind:class="{ notActiveBtn: notAvailable }" @click="addProduct()" :disabled="notAvailable">
            Ajouter à ma commande
        </button>
        <br /><br />
    </div>
</template>

<script>
export default {
    data() {
        return {
            product: "Pizza",
            price: 12,
            img: require("../assets/images/1.png"),
            sale: false,
            notAvailable: false,
            sauces: [
                {
                    id: 1001,
                    type: "Sauce Tomate",
                    color: "#db4006",
                    image: require("../assets/images/oscar.png")
                },
                {
                    id: 1002,
                    type: "Crème Fraiche",
                    color: "#e9cb8f",
                    image: require("../assets/images/EIM.jpg")
                }
            ],
            ingredients: [
                "Olives",
                "Poulet roti",
                "Bacon",
                "Poivrons",
                "Champignons",
                "Mozzarella",
                "Oeuf"
            ],
            energy: {
                Kcal: 242,
                Glucides: 27.99,
                Fibres: 1.75,
                Proteines: 9.62,
                Sel: 11
            },
        };
    },

    props: {
        bestseller: {
            type: Boolean,
        },
    },
    // props: ['name'],

    methods: {
        addProduct() {
            if (this.sale) {
                this.$emit("add-product", this.price - 5)

            } else {
                this.$emit("add-product", this.price)

            }
        },
        updateImage(newLinkImage) {
            this.img = newLinkImage;
        }
    },

    computed: {
        title() {
            return this.product + " " + this.name;
        }
    }
}
</script>

<style scoped>
.img-best-seller {
    height: 50px;
    width: auto;
}

img {
    width: 90%;
    padding: 15px;
}

button {
    background-color: #d0021b;
    border-color: #d0021b;
    color: white;
    cursor: pointer;
    font-family: sans-serif;
    line-height: 20px;
    margin: 20px auto;
    min-width: initial;
    padding: 12px;
    text-align: center;
    text-transform: uppercase;
    width: 350px;
}

button:hover {
    background-color: #b6132c;
}

.notActiveBtn {
    background-color: #f6f6f6;
    background-color: #f6f6f6;
    color: gray;
    cursor: not-allowed;
    text-decoration: line-through;
}

.notActiveBtn:hover {
    background-color: #f6f6f6;
}

.sauces li {
    list-style: none;
    padding: 5px 15px;
    margin: 10px 0px;
    width: fit-content;
    border-radius: 20px;
    color: white;
    cursor: pointer;
}

.sauces li:hover {
    color: black;
}

strong {
    font-size: 18px;
}

.sale {
    text-decoration-line: line-through;
    text-decoration-color: red;
    margin-right: 10px;
    color: gray;
}
</style>