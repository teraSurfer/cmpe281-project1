<template>
    <b-card class="register-card shadow border-0" header-bg-variant="white" header-class="border-0">
        <template v-slot:header>
            <h5 class="mb-0 text-center">AWS Vault - Register</h5>
        </template>
            <b-form @submit="attemptRegister">
                <b-form-group id="name" label="Username:" label-for="name">
                    <b-input id="name" v-model="user.name" type="text" required></b-input>
                </b-form-group>
                <b-form-group id="firstName" label="First Name:" label-for="firstName">
                    <b-input id="firstName" v-model="user.firstName" type="text" required></b-input>
                </b-form-group>
                <b-form-group id="lastName" label="Last Name:" label-for="lastName">
                    <b-input id="lastName" v-model="user.lastName" type="text" required></b-input>
                </b-form-group>
                <b-form-group id="email" label="Email Address:" label-for="email">
                    <b-input id="email" v-model="user.email" type="text" required></b-input>
                </b-form-group>
                <b-form-group id="password" label="Password:" label-for="password">
                    <b-input id="password" v-model="user.password" type="password" required></b-input>
                </b-form-group>
                <b-form-group id="confirmPassword" label="Confirm Password:" label-for="confirmPassword">
                    <b-input id="confirmPassword" v-model="confirmPassword" type="password" required></b-input>
                </b-form-group>
                <b-btn type="submit" variant="accent rounded-pill" :disabled="isDisabled" block>
                    <fa v-if="isDisabled" icon="circle-notch" spin />
                     {{(isDisabled ? 'Loading' : 'Register')}}
                </b-btn>
                <b-link to="/login" class="small text-muted float-right mt-2">Already have an account?</b-link>
            </b-form>
        </b-card>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import {Auth} from 'aws-amplify';
import {IUser} from '@/interfaces/IUser';

@Component({})
export default class RegisterForm extends Vue {
    user: IUser = {
        email: '',
        password: '',
        name: '',
        firstName: '',
        lastName: ''
    };
    isDisabled = false;

    confirmPassword = '';

    async attemptRegister(event: any) {
        event.preventDefault();
        this.isDisabled=true;
        try{
            if(this.user.email !== '' && this.user.password !== '' && this.user.name !== '') {
                console.log(this.user);
                const newUser = await Auth.signUp({
                    attributes: {
                        name: this.user.name,
                        'custom:firstName': this.user.firstName,
                        'custom:lastName': this.user.lastName
                    },
                    username: this.user.email,
                    password: this.user.password
                });
                console.log(newUser);
                this.$router.push('/register/confirmation-code');
            } else {
                console.log('ahoo');
            }
        } catch(err) {
            console.log(err);
        }
    }
}
</script>

<style lang="scss" >
.register-card{
    width: 350px;
}
</style>