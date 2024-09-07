<template>
    <div id="user" v-if="users">
        <div v-for="user in users" :key="user.id">
            <img :src="user.picture" :alt="user.firstname">
            <p>{{ user.firstname }} {{ user.lastname }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RandomUser',
    props: {
        users: Array
    }
};
</script>

<style scoped></style>
