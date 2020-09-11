<template>
    <v-container>
        <h1>{{ pageTitle }}</h1>
        <br>
        <v-card
            class="mx-auto"
            max-width="500"
            outlined
            style="margin: auto"
        >
            <h2 style="text-align: center; padding: 10px">Add a new post</h2>

            <v-list-item>
                <v-row>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-text-field
                            v-model="input.title"
                            label="title"
                            required
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-text-field
                            v-model="input.authorName"
                            label="authorName"
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="12">
                        <v-textarea
                        color="teal"
                        v-model="input.description"
                        >
                        </v-textarea>
                    </v-col>
                </v-row>
            </v-list-item>
            
            <div>
                <v-card-actions>
                <v-btn class="mx-2" fab dark color="indigo" small @click="createNewPost()">
                    <v-icon dark>mdi-plus</v-icon>
                </v-btn>
                </v-card-actions>
            </div>
        </v-card>
        
        <v-container fluid>
            <br>
            <h2>All Posts</h2>
            <hr>
            <v-row dense>
                <v-col cols="12">
                    <v-card 
                        v-for="post in allPosts"
                        color="#385F73"
                        dark
                        :key="post.title"
                        style="margin-bottom: 10px"
                        class="mx-auto"
                        >
                            <v-card-title class="headline">{{ post.title }}</v-card-title>
                            <v-card-subtitle>{{ post.authorName }}</v-card-subtitle>
                               <v-card-text class="headline font-weight-bold">
                                    {{ post.description }}
                                </v-card-text>
                    </v-card>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
export default {
    name: 'BlogComponent',
    data: function () {
        return {
            pageTitle: 'Blog Posts',
            allPosts: [],
            input: {
                title: '',
                authorName: '',
                description: ''
            }
        }
    },
    methods: {
        createNewPost () {
            if (this.input.title && this.input.authorName && this.input.description) {
                this.allPosts.push(this.input)
            }
        }
    }
}
</script>