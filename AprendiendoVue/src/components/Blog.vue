<template>
    <div class="general">
        <AppSlider texto="Blog" btn="false"/>
        <div class="center">
            <section id="content">
                <h2 class="subheader">BLOG</h2>

            </section>
            <AppSidebar />
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
import AppSlider from './AppSlider.vue';
import AppSidebar from './AppSidebar.vue';

export default {
    name: 'AppBlog',
    components: {
        AppSlider,
        AppSidebar
  }
}
</script>