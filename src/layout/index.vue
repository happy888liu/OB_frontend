<template>
    <v-app>
        <!--  左侧栏      -->
        <Siderbar ref="sider"/>
        <v-app-bar app color="indigo" dark>
            <v-app-bar-nav-icon @click.stop="toggleSidebar"/>
            <v-spacer/>
            <Toolbar/>
        </v-app-bar>

        <v-main>
            <router-view :key="key"/>
        </v-main>
    </v-app>
</template>

<script>
    import Toolbar from "./components/Toolbar";
    import Siderbar from "./components/Siderbar";
    export default {
        components:{
            Toolbar,
            Siderbar
        },
        data: () => ({

        }),
        methods:{
            toggleSidebar() {
                this.$refs.sider.toggleSidebar();
            }
        },
        computed:{
            key(){
                return this.$router.path
            }
        },
    }
</script>