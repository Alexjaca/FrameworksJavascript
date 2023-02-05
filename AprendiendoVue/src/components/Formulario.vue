<template>
    <div class="general">
        <AppSlider texto="Formulario" btn="false"/>
        <div class="center">
            <section id="content">
                <h2 class="subheader">FORMULARIO</h2>

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
    name: 'AppFormulario',
    components: {
        AppSlider,
        AppSidebar
  }
}
</script>