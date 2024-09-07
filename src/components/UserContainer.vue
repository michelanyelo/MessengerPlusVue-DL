<template>
    <div class="user-container">
        <RandomUser :user="user1" @mensaje-enviado="handleMensajeEnviado" />
        <ChatWindow :conversation="conversation" />
        <RandomUser :user="user2" @mensaje-enviado="handleMensajeEnviado" />
    </div>
</template>

<script>
import RandomUser from './RandomUser.vue'
import ChatWindow from './ChatWindow.vue'
import UserApi from '@/services/UserApi'

export default {
    name: 'UserContainer',
    components: {
        RandomUser,
        ChatWindow
    },
    data() {
        return {
            users: [],
            user1: null,
            user2: null,
            conversation: []
        };
    },
    async mounted() {
        await this.getData();
        // Seleccionar dos usuarios por defecto si hay suficientes
        if (this.users.length >= 2) {
            this.user1 = this.users[0];
            this.user2 = this.users[1];
        }
    },
    methods: {
        async getData() {
            const userClass = new UserApi();
            await userClass.setData();
            this.users = userClass.data.value;
        },
        handleMensajeEnviado({ userId, mensaje }) {
            // Agregar el mensaje a la conversación
            this.conversation.push({
                id: Date.now(),
                from: this.getUserNameById(userId),
                text: mensaje
            });
        },
        getUserNameById(userId) {
            const user = this.users.find(user => user.registered.date === userId);
            console.log(user)
            return user ? `${user.name.first} ${user.name.last}` : 'Desconocido';
        }
    }
};
</script>

<style scoped>
.user-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.user-container>* {
    margin: 0 10px;
}
</style>
