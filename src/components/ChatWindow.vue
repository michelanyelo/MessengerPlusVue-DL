<template>
    <div class="chat-window">
        <div v-for="msg in conversation" :key="msg.id" :class="['message', msg.from === user1 ? 'left' : 'right']">
            <div class="message-header">
                <p class="message-date">{{ new Date(msg.id).toLocaleString() }}</p>
                <p class="message-from">{{ msg.from }}</p>
            </div>
            <p class="message-text">{{ msg.text }}</p>
        </div>
    </div>
</template>



<script>
export default {
    name: 'ChatWindow',
    props: {
        conversation: Array,
        user1: String,
        user2: String
    }
};
</script>

<style scoped>
.chat-window {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 0 10px;
    height: 400px;
    width: 50vw;
    overflow-y: auto;
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
}

/* Estilo general para los mensajes */
.message {
    margin: 10px 0;
    max-width: 60%;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    position: relative;
}

/* Estilos específicos de la cabecera del mensaje */
.message-header {
    display: flex;
    flex-direction: column;
    /* Alinea la fecha arriba del nombre */
    font-size: 0.85em;
    color: #666;
    margin-bottom: 5px;
}

/* Estilos para el texto del mensaje */
.message-text {
    font-size: 1em;
    line-height: 1.5;
}

/* Alinear mensajes de la izquierda */
.left {
    align-self: flex-start;
    background-color: #e0f7fa;
    text-align: left;
}

/* Alinear mensajes de la derecha */
.right {
    align-self: flex-end;
    background-color: #c8e6c9;
    text-align: right;
}

/* Estilos adicionales para la fecha y el nombre */
.message-from {
    font-weight: bold;
    margin-top: 5px;
    /* Agrega un pequeño espacio entre la fecha y el nombre */
}

.message-date {
    font-style: italic;
    font-size: 0.75em;
    color: #999;
    margin-bottom: 2px;
    /* Agrega espacio entre la fecha y el nombre */
}
</style>
