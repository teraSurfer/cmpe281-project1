import Amplify, * as AmplifyModules from 'aws-amplify';
const {AmplifyPlugin} =  require('aws-amplify-vue');
import Vue from 'vue';

const awsMobile = {
    Auth: {
        mandatorySignIn: true,
        region: 'us-east-1',
        userPoolId: 'us-east-1_4DFJ5WK84',
        userPoolWebClientId: '1ao4dn0g5g8oikrro38k0pkdi5'
    }
}

Amplify.configure(awsMobile);

Vue.use(AmplifyPlugin, AmplifyModules);