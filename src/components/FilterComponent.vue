<template>
    <v-container>
        <h1> {{ title }} </h1>
            <v-text-field
                label="Search a title"
                solo
                v-model="searchInput"
            ></v-text-field>


            <div>
                <div v-for="post in allPosts" :key="post.id">
                    <h1>{{ post.title }}</h1>
                </div>
            </div>
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
    name: 'FilterComponent',
    data: function () {
        return {
            title: 'Filter Component',
            searchInput: '',
            allPosts: []
        }
    },
    mounted: async function () {
        // get list of all posts
        try {
            const url = `https://jsonplaceholder.typicode.com/users/1/posts`
            const json = await axios.get(url)
            this.allPosts = json.data
        } catch (error) {
            console.log(error)
        }
    },
    computed: {
       filteredPosts () {
           let filterText = new RegExp(this.searchInput, 'i')
           return this.filteredPosts.filter(el => el.title.match(filterText))
       } 
    }
}
</script>>