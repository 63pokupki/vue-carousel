import Vuex from 'vuex'
import { Posts, State } from "@/types/types";
import axios from "axios";
import Vue from 'vue';

Vue.use(Vuex)

export const store = new Vuex.Store ({
    state: (): State => ({
        posts: [],
        page: 1,
        limit: 10
    }),

    mutations: {
        setPosts(state: any, newPosts: Posts): void {
            state.posts = newPosts
        }
    },

    getters: {
        getPosts: (state: any): Posts => state.posts
    },

    actions: {
        async fetchPosts({state, commit}: any){
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
                    params: {
                        _page: state.page,   
                        _limit: state.limit   
                    }
                })

                commit('setPosts', response.data)
            } catch (e) {
                alert('Ошибочка')
            }
        }
    }
})
