<template>
    <div class="panelist">
        <div class="panelist__img-container">
            <g-image 
                v-if="img"
                :src="img" 
                :alt="`Picture of ${name}`" />
            <div 
                v-else 
                class="panelist__img-fallback"/>
        </div>
        <a 
            :href="website"
            class="panelist__name"
        >{{ name }}</a>
    </div>
</template>

<script>
export default {
    name: 'Panelist',
    props: {
        name: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: false,
            default: '',
        },
        website: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss">
@import '../styles/variables.scss';
.panelist {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

    &:not(:last-child) { margin-right: 1rem; }
    
    &__img-container {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        overflow: hidden;
        margin-bottom: 1rem;
        position: relative;

        img {
            position: absolute;
            top: 0;
            left: 0;
            object-fit: cover;
            height: 100%;
            width: 100%;
        }
    }

    &__img-fallback {
        background: $light-grey;
        height: 100%;
        width: 100%;
        margin-bottom: 1rem;
    }

    &__name {
        color: $primary-green;
        cursor: pointer;

        &:hover {
            color: white;
        }

        &::after {
            content: '';
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
        }
    }
}
</style>
