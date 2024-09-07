<template>
    <div class="chat-window">
        <div v-for="msg in conversation" :key="msg.id" class="message">
            <strong>{{ msg.from }}:</strong> {{ msg.text }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChatWindow',
    props: {
        conversation: Array
    }
};
</script>

<style scoped>
.chat-window {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    height: 400px;
    width: 50vw;
    overflow-y: auto;
    background-color: #f9f9f9;
}

.message {
    margin-bottom: 10px;
}
</style>
