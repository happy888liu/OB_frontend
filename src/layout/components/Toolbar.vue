<template>
    <v-menu offset-y>
        <template v-slot:activator="{ on }">
            <v-avatar color="indigo" v-on="on">
                <v-icon>mdi-account-circle</v-icon>
                <v-icon>mdi-menu-down</v-icon>
            </v-avatar>
        </template>
        <v-card>
            <v-list dense>
                <v-subheader>详细信息</v-subheader>
                <v-list-item-group color="primary">
                    <v-list-item
                            v-for="(item, i) in items"
                            :key="i"
                            :href="item.href"
                            :to="item.to"
                    >
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-card>
    </v-menu>
</template>

<script>
    export default {
        name: "Toolbar",
        data: () => ({
            items: [
                {text: '登录页面', icon: 'mdi-clock', to: 'login'},
                {text: 'github', icon: 'mdi-github-circle', href: 'https://github.com'},
                {text: '百度', icon: 'mdi-flag', href: 'https://www.baidu.com'},
            ]
        }),
    }
</script>

<style scoped>

</style>