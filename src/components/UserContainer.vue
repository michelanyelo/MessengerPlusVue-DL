<template>
    <div class="chat-container">
        <div>
            <h1>VueJS Chat</h1>
        </div>
        <div class="user-container" v-if="user1 && user2">
            <RandomUser :user="user1" @mensaje-enviado="handleMensajeEnviado" />
            <ChatWindow :conversation="conversation" :user1="getUserName(user1)" :user2="getUserName(user2)" />
            <RandomUser :user="user2" @mensaje-enviado="handleMensajeEnviado" />
        </div>
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
            // Agregar el mensaje a la conversación
            const fromUser = this.getUserNameById(userId);
            this.conversation.push({
                id: Date.now(),
                from: fromUser,
                text: mensaje
            });
        },
        getUserNameById(userId) {
            const user = this.users.find(user => user.registered.date === userId);
            return user ? `${user.name.first} ${user.name.last}` : 'Desconocido';
        },
        getUserName(user) {
            return `${user.name.first} ${user.name.last}`;
        }
    }
};
</script>

<style scoped>
.chat-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
}

h1 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #333;
}

.user-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
}
</style>
