<template>
    <b-navbar :variant="variant" :class="classes" type="dark" toggleable="lg">
        <b-navbar-brand to="/">
            <h6 class="mb-0"><fa icon="box-open" /> Tera's Vault</h6>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item to="/" >Home</b-nav-item>
                <b-nav-item href="https://terasurfer-project01-prod.auth.us-east-1.amazoncognito.com/login?client_id=1ao4dn0g5g8oikrro38k0pkdi5&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=http://localhost:8080/login-success/">Login</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class Navbar extends Vue {

    get classes() {
        if(this.$route.path !== '/') {
            return 'shadow-sm';
        } else return '';
    }
    get variant() {
        if(this.$route.path !== '/') {
            return 'primary';
        } else return 'transparent';
    }

    created() {
        document.title = 'Tera\'s Vault';
    }
}
</script>