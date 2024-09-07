<template>
    <div class="chat-window">
        <div v-for="msg in conversation" :key="msg.id" :class="['message', msg.from === user1 ? 'left' : 'right']">
            <strong>{{ msg.from }}:</strong> {{ msg.text }}
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
    height: 400px;
    width: 50vw;
    overflow-y: auto;
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
}

.message {
    margin: 10px 0;
    max-width: 60%;
    padding: 10px;
    border-radius: 10px;
}

.left {
    align-self: flex-start;
    background-color: #e0f7fa;
    text-align: left;
}

.right {
    align-self: flex-end;
    background-color: #c8e6c9;
    text-align: right;
}
</style>
