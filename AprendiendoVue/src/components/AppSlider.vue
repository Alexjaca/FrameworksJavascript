<template>
        <div id="slider" :class="{
                'slider-big': btn == 'true',
                'slider-small': btn == 'false'
        }">
                <h1>{{ texto }}</h1>
                <a v-if="btn == 'true'" href="#" class="btn-white" @click="redirigirBlog()">Ir al blog</a>
        </div>
</template>

<script>
export default {
        name: 'AppSlider',
        props: ['texto', 'btn'],
        methods: {
                redirigirBlog() {
                        this.$router.push('/blog');
                }

        }
}
</script>
