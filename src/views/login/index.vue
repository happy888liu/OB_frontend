<template>
    <v-app id="login_page">
        <v-content class="backg">
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <v-card class="elevation-12">
                            <v-toolbar color="#009688" dark>
                                <v-spacer/>
                                <v-toolbar-title>登录</v-toolbar-title>
                                <v-spacer/>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                            label="用户名"
                                            name="login"
                                            prepend-icon="mdi-account"
                                            type="text"
                                    />

                                    <v-text-field
                                            id="password"
                                            label="密码"
                                            name="password"
                                            prepend-icon="mdi-lock"
                                            :append-icon="isShow ? 'mdi-eye': 'mdi-eye-off'"
                                            @click:append="isShow = !isShow"
                                            :type="isShow ? 'text' :'password'"
                                    />
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer/>
                                <v-btn color="#B2DFDB">登录</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        data(){
            return{
                isShow:false,
            }
        }
    }
</script>
<style scoped>
    .backg{
        position: absolute;
        width: 100%;
        height: 100%;
        background: url("../../static/random.jpeg") no-repeat center center;
        background-size: 100% 100%;
    }
</style>