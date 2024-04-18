<script>
import { computed, ref } from 'vue';
export default function useLikes() {
    const nbrLikes = ref(7);
    const message = ref("aimes cette page");

    const info = computed(() => {
        return nbrLikes.value + " " + message.value;
    });

    function addLikes() {
        nbrLikes.value++;
    }

    return { nbrLikes, addLikes, message, info };
}
</script>