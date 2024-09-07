<template>
    <div id="user">
        <div v-for="user in usersList" :key="user.id">
            <img :src="user.picture" :alt="user.firstname">
            <p>{{ user.firstname }} {{ user.lastname }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RandomUser',
    props: {
        users: {
            type: Array,
            required: true
        }
    },
    computed: {
        usersList() {
            return this.users.map(user => ({
                firstname: user.name.first,
                lastname: user.name.last,
                email: user.email,
                picture: user.picture.large,
                id: user.login.uuid
            }));
        }
    }
};
</script>

<style scoped></style>
