<template>
 <section id="content">
                <h2 class="subheader">Últimos artículos</h2>

                <!--Listado articulos-->
                <div id="articles">
                    <article class="article-item" id="article-template">
                        <div class="image-wrap">
                            <img src="https://res.cloudinary.com/teepublic/image/private/s--BBuvlHSz--/c_crop,x_10,y_10/c_fit,w_664/c_crop,g_north_west,h_1038,w_1038,x_-189,y_-286/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-300,y_-397/b_rgb:000000/c_limit,f_jpg,h_630,q_90,w_630/v1602507655/production/designs/14951662_0.jpg" alt="Vue" />
                        </div>
    
                        <h2>Articulo de prueba</h2>
                        <span class="date">
                            Hace 5 minutos
                        </span>
                        <a href="#">Leer más</a>

                        <div class="clearfix"></div>
                    </article>

                    <!--AÑADIR ARTICULOS VIA JS-->

                </div>
                
            </section>
</template>

<script>
export default{
    name: 'AppLastArticles'
}
</script>