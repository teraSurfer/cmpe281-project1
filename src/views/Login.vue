<template>
    <b-container class="d-flex mt-4 justify-content-center align-items-center">
        <b-card class="login-card shadow border-0" title="AWS Vault - Login">
            <b-form @submit="attemptLogin">
                <b-form-group id="email" label="Email Address:" label-for="email">
                    <b-input id="email" v-model="email" type="text"></b-input>
                </b-form-group>
                <b-form-group id="password" label="Password:" label-for="password">
                    <b-input id="password" v-model="password" type="text"></b-input>
                </b-form-group>
                <b-btn type="submit" variant="accent" block>Login</b-btn>
                <b-link to="/register" class="small text-muted float-right mt-2">Dont't have an account?</b-link>
            </b-form>
        </b-card>
    </b-container>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import {Auth} from 'aws-amplify';

@Component({})
export default class Login extends Vue {


    attemptLogin(event: any) {
        event.preventDefault();

    }
}
</script>

<style lang="scss" scoped>
.login-card{
    width: 350px;
}
</style>