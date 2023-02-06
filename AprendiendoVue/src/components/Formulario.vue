<template>
    <div class="general">
        <AppSlider texto="Formulario" btn="false"/>
        <div class="center">
            <section id="content">
                <h2 class="subheader">FORMULARIO</h2>

                <form class="mid-form" @submit.prevent="mostrarUsuario()">
                        <div class="form-group">
                            <label for="nombre">Nombre</label>
                            <input type="text" name="nombre" v-model="user.name" />
                            
                           <!-- <div v-if="!v$.user.name.required">
                                Este campo es requerido!!!!!!!
                            </div> -->
                        </div>

                        <div class="form-group">
                            <label for="apellidos">Apellidos</label>
                            <input type="text" name="apellidos" v-model="user.surnames" />
                        </div>

                        <div class="form-group">
                            <label for="bio">Biografia</label>
                            <textarea name="bio" v-model="user.bio" ></textarea>
                        </div>

                        <div class="form-group radibuttons">
                            <input type="radio" name="genero" value="hombre" checked v-model="user.gender"/> Hombre 
                            <input type="radio" name="genero" value="mujer" v-model="user.gender"/> Mujer 
                            <input type="radio" name="genero" value="otro" v-model="user.gender"/> Otro
                        </div>

                        <div class="clearfix"></div>

                        <input type="submit" value="Enviar" class="btn btn-success" />

                   </form>

            </section>
            <AppSidebar />
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
import AppSlider from './AppSlider.vue';
import AppSidebar from './AppSidebar.vue';
import {required, minLength} from 'vuelidate/lib/validators';
//import { useVuelidate } from '@vuelidate/core';

export default {
    name: 'AppFormulario',
    components: {
        AppSlider,
        AppSidebar
  }, 
  //PARA VUEVALIDATOR
  /*setup(){
    return { v$: useVuelidate()};
  },*/
  data(){
    return{
        user: {
            name: '',
            surnames: '',
            bio: '',
            gender: ''
        }
    }
  },
  validations:{
        nombre: {
            required,
            minLength: minLength(5)
        },
        apellidos: {
            required,
            minLength: minLength(5)
        },
        bio: {
            required,
            minLength: minLength(10)
        }
  },
  methods: {
    mostrarUsuario(){
        console.log(this.user);

    }
  }
}
</script>