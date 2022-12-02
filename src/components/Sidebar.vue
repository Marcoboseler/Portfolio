<style>

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
    
    background-color: #F1F3F5;
}

/* PARENT ELEMENTS */
#emblem {
    width: auto;
    height: 180px;
    background-color: rgba(44, 105, 165, 0.95);
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
    <div id="emblem" class="">

    </div>

    <div id="pageLinks" class="flex flex-col items-center gap-2">
        <a href="" class="btn btn--link">About</a>
        <a href="" class="btn btn--link">Skills</a>
        <a href="" class="btn btn--link">Blog</a>
        <a href="" class="btn btn--link">Gallery</a>
        <a href="" class="btn btn--link">Contact</a>
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