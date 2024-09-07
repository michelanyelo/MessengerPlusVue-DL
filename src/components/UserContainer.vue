<template>
    <div>
        <RandomUser :user="user1" @mensaje-enviado="handleMensajeEnviado" />
        <RandomUser :user="user2" @mensaje-enviado="handleMensajeEnviado" />
    </div>
</template>

<script>
import RandomUser from './RandomUser.vue'
import UserApi from '@/services/UserApi'

export default {
    name: 'UserContainer',
    components: {
        RandomUser
    },
    data() {
        return {
            users: [],
            user1: null,
            user2: null
        };
    },
    async mounted() {
        await this.getData();
        // Seleccionar dos usuarios por defecto si hay suficientes
        this.user1 = this.users[0];
        this.user2 = this.users[1];
    },
    methods: {
        async getData() {
            const userClass = new UserApi();
            await userClass.setData();
            this.users = userClass.data.value;
        },
        handleMensajeEnviado({ userId, mensaje }) {
            console.log(`Mensaje para el usuario ${userId}: ${mensaje}`);
            // Manejar el mensaje enviado aquí
        }
    }
};
</script>

<style scoped></style>
