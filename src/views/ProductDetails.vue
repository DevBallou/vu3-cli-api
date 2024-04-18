<template>
    <div id="section-product-details">
        <!-- Section Panier -->
        <div class="cart">
            <table>
                <thead>
                    <tr>
                        <th colspan="2">Votre commande</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nombre de Pizza</td>
                        <td>x {{ nbrProduct }}</td>
                    </tr>
                    <tr>
                        <td>Code Promo</td>
                        <td class="code-promo">
                            <input v-model="promo" placeholder="Ajouter un code promo" />
                        </td>
                    </tr>
                    <tr>
                        <td>Total à payer</td>

                        <td>
                            <transition name="bounce">
                                <div v-if="promo === 'royale'">
                                    (-5€)
                                    <span class="sale">{{ totalPrice }} €</span>
                                    {{ totalPrice - 5 }} €
                                </div>
                                <div v-else>{{ totalPrice }} €</div>
                            </transition>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- Section Produit -->
        <div class="product-section">
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
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            product: "Pizza",
            price: 12,
            img: require("../assets/images/EIM.jpg"),
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
                    image: require("../assets/images/1.png")
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
            totalPrice: 0,
            nbrProduct: 0,
            promo: ""
        };
    },

    props: ['name'],

    methods: {
        addProduct() {
            if (this.sale) {
                this.nbrProduct += 1;
                this.totalPrice += this.price - 5;
            } else {
                this.nbrProduct += 1;
                this.totalPrice += this.price;
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
};
</script>

<style scoped></style>