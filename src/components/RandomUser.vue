<template>
    <div v-if="user">
        <div class="user-container">
            <img :src="user.picture.large" :alt="`${user.firstname} ${user.lastname}`">
            <p>{{ user.firstname }} {{ user.lastname }}</p>
            <textarea v-model="message" placeholder="Escribe tu mensaje" rows="10"></textarea>
            <button @click="enviarMensaje">Enviar</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RandomUser',
    props: {
        user: Object
    },
    data() {
        return {
            message: ''
        };
    },
    methods: {
        enviarMensaje() {
            if (this.message.trim() !== '') {
                // Emitir el mensaje al componente padre o manejarlo aquí
                this.$emit('mensaje-enviado', { userId: this.user.id, mensaje: this.message });
                // Limpiar el mensaje
                this.message = '';
            } else {
                alert('El mensaje no puede estar vacío');
            }
        }
    }
};
</script>

<style scoped>
.user-container {
    margin-bottom: 20px;
}

img {
    width: 100%;
}

textarea {
    width: 100%;
    margin: 10px 0;
}

button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    width: 100%;
}

button:hover {
    background-color: #0056b3;
}
</style>
