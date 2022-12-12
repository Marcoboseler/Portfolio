<style lang="scss">

html {
    font-size: 18px;
}

#sidebar {
    max-width: 130px;
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    overflow-x: hidden;
    
    background-color: var(--myGray);
    box-shadow: 0px 0px 15px rgba($color: #000000, $alpha: 0.2)
}

/* PARENT ELEMENTS */
#emblem {
    font-family: 'Jura', sans-serif;
    position: relative;
    display: flex;
    height: 180px;
    background-color: var(--myGray);
    // background: linear-gradient(to bottom, rgba(33, 158, 188, 0.8), var(--myGray));
}

.ml5 {
    color: #023047;
    font-size: 36px;
    width: 130px;
    height: 36px;
    align-self: center;
    transform: translateY(-20%);
}

.ml5 .text-wrapper {
    
    position: relative;
    text-align: center;
    line-height: 1em;
}

.ml5 .line {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: .11rem;
    width: 85%;
    background-color: #023047;
    transform-origin: 0.5 0;
}

.ml5 .letters {
    display: block;
    opacity: 0;
}

#lowerEmblem {
    position: absolute;
    bottom: 3.4rem;
    color: rgba(0, 0, 0, 0.3);
    font-size: 0.5rem;
    font-weight: 600;
    animation: fadein 5s;

    @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }}
}

#pageLinks {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;

    font-size: 1rem
}

#socialLinks {
    width: 100%;
    position: absolute;
    top: 71%;
}

/* CHILD ELEMENTS */
.btn {
    width: 100%;
 
    padding: 0.3rem 0px;
    padding-right: 0.5rem;
}

.btn--link:hover {
    background-color: rgba(44, 105, 165, 0.6);
}

.btn--link:active {
    background-color: rgba(44, 105, 165, 0.7);
    border-left: 0.2rem solid crimson;
}

</style>

<template>

<aside id="sidebar" class="flex flex-col">
    <router-link to="/">
        <div id="emblem" class="flex justify-center">
            <h1 class="ml5">
                <span class="text-wrapper">
                    <span class="letters letters-right">Louis</span>
                    <span class="line line2"></span>
                </span>
            </h1>
            
            <div id="lowerEmblem">
                Web developer
            </div>
        </div>
    </router-link>

    <div id="pageLinks" class="flex flex-col items-center gap-2">
        <router-link to="/about" class="btn btn--link">About</router-link>
        <router-link to="/skills" class="btn btn--link">Skills</router-link>
        <router-link to="/blog" class="btn btn--link">Blog</router-link>
        <router-link to="/gallery" class="btn btn--link">Gallery</router-link>
    </div>

    <div id="socialLinks" class="flex justify-center gap-2">
        <a href=""><img src="../assets/icons/icon_linkedin.png" width="24"></a>
        <a href=""><img src="../assets/icons/icon_github.png" width="24"></a>
        <a href=""><img src="../assets/icons/icon_insta.png" width="24"></a>
    </div>
</aside>

</template>


<script setup>



</script>