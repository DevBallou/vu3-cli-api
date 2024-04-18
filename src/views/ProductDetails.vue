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
            <ProductInfo :bestseller="bestsellerProduct" @add-product="addCart($event)" />
        </div>
    </div>
</template>

<script>
import ProductInfo from "../components/ProductInfo.vue"
export default {
    data() {
        return {
            totalPrice: 0,
            nbrProduct: 0,
            promo: "",
            bestsellerProduct: true,
        };
    },

    components: {
        ProductInfo
    },

    methods: {
        addCart(price) {
            this.nbrProduct += 1;
            this.totalPrice = price * this.nbrProduct;
        }
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");

#section-product-details {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
}

.cart {
    margin: 40px 40px auto auto;
}

table {
    border-collapse: collapse;
}

table,
th,
td {
    border: 1px solid black;
    text-align: right;
    padding: 0 10px;
    text-wrap: nowrap;
}

table thead th {
    text-align: center;
}

td {
    width: 170px;
}

td.code-promo {
    padding: 0;
}

.product-section {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

/* Transition */
.bounce-enter-active {
    animation: bounce-in 0.5s;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.25);
    }

    100% {
        transform: scale(1);
    }
}
</style>