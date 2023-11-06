<template>
    <div>
        <nav>
            <transition-group name="fade" tag="div">
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item" role="presentation" v-for="(tab, index) in tabs" :key="index"
                        :class="{ active: index === activeTab }">
                        <!-- <button class="nav-link" @click="activeTab = index">{{ tab.label }}</button> -->
                        <router-link :to="tab.to">{{ tab.label }}</router-link>
                    </li>
                </ul>
            </transition-group>
        </nav>
        <transition name="fade" mode="out-in">
            <div class="tab-content">
                <slot :name="tabs[activeTab].name"></slot>
            </div>
        </transition>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    props: {
        tabs: Array,
    },
    setup(props) {
        const activeTab = ref(0);

        return {
            activeTab,
        };
    },
};
</script>

<style>
li.active button {
    font-weight: bold;

}

li:hover .dropdown {
    display: block;
    /* Show on hover */
}

.tab-content {
    margin-top: 20px;
    transition: opacity 0.5s;
    opacity: 1;
}

/* Define fade transition effect */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}</style>