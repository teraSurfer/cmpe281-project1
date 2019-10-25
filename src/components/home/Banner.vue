<template>
       <section class="banner">
            <header class="viewport-header">
            <div class="image-wrap">
                <video playsInline autoPlay muted loop>
                    <source src="@/assets/banner-video.mp4" type="video/mp4">
                </video>
            </div>
            <div class="banner-overlay"></div>
            <div class="banner-content text-light">
                <div class="text-center">
                    <h2 class="banner-title display-1"><fa icon="box-open" /> Tera's Vault</h2>
                    <h3>Easy cloud storage service for everyone.</h3>
                    <b-btn size="lg" to="/login" variant="outline-light" class="mt-4"> <b>Get Started</b> <fa icon="chevron-right" /></b-btn>
                </div>
            </div>
            <div class="banner-footer w-100 text-white text-center border-top border-light">
                <b-link href="https://terasurfer.com/projects" target="blank" class="mr-2 text-white">
                    <b-img width="130" height="25" src="@/assets/tera.png" alt="terasurfer.com"></b-img>
                </b-link>
                <p class="mb-1 small">
                   &copy; {{new Date().getFullYear()}}
                </p>
                <b-link href="https://github.com/terasurfer" target="blank"><fa color="white" :icon="['fab', 'github']" /></b-link>
                <b-link href="" target="blank" class="ml-2"><fa :icon="['fab', 'youtube']" color="white" /></b-link> 
                <b-link href="https://twitter.com/achalaesh" target="blank" class="ml-2"><fa :icon="['fab', 'twitter']" color="white" /></b-link> 
            </div>
            </header>
        </section>
</template>

<style lang="scss">
.banner {
    margin-top: 3rem;
}
.viewport-header {
    height: 85vh;
    text-align: center;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    color: $projectAccent;
}
.image-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: -99;
    background-size: cover;
}
.banner-overlay {
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    background: $deepDark;
    background-image: url('../../assets/banner.jpg') no-repeat;
    opacity: .5;
}
    .banner-content{
        display: block;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .banner-footer{
        display: block;
        position: absolute;
        top: 90vh;
    }
    .banner-title{
        font-size: 5em;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }
</style>