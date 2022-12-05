
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');


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
}
/* EMBLEM */
.wrapper {
    font-size: 2rem;
    height: 2em;;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    mix-blend-mode:darken;
    
    span {
        --color: #F1F3F5;
        font-family: Impact, 'Anton', Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-weight: 700;
        font-style: italic;
        display: block;
        position: absolute;
        top: 1.5em;
        color: var(--color);
        letter-spacing: -.005em;

        &::before, &::after {
            content: attr(data-text);
            display: block;
            position: relative;
            padding: 0 .1em;
            z-index: 1;
        }

        &::before {
            position: absolute;
            -webkit-text-stroke: .07em black;
            z-index: 0;
        }

        &:first-child {
            transform: translate(-.255em, -.25em);
        }

        &:last-child {
            --color: #F1F3F5;
            transform: translate(.255em, .25em);
        }
    }
}

/* PARENT ELEMENTS */
#emblem {
    position: relative;
    width: auto;
    height: 180px;
    background-color: var(--myYellow);
}

#lowerEmblem {
    position: absolute;
    bottom: 2.8rem;
    font-family: 'kanit', sans-serif;
    color: rgba(0, 0, 0, 0.7);
    font-size: 0.7rem;
    font-weight: 100;
    
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
    <div id="emblem" class="flex justify-center">
        <div class="wrapper">
            <span data-text="Marco"></span>
            <span data-text="Louis"></span>
        </div>
        <div id="lowerEmblem">
            Web developer
        </div>
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