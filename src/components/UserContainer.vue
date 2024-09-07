<template>
    <div>
        <RandomUser :users="usersList" />
    </div>
</template>

<script>
import RandomUser from './RandomUser.vue';
import UserApi from '@/services/UserApi';

export default {
    name: 'UserContainer',
    components: {
        RandomUser
    },
    data() {
        return {
            users: []
        };
    },
    async mounted() {
        await this.getData();
    },
    methods: {
        async getData() {
            const userClass = new UserApi();
            await userClass.setData();
            this.users = userClass.data.value;
        }
    },
    computed: {
        usersList() {
            if (!this.users) return [];
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
