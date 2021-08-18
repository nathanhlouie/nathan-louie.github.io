<template>
  <Layout>
    <Author :show-title="true" />

    <div class="posts">
      <PostCard
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allPost(sortBy: "title", order: ASC) {
    edges {
      node {
        title
        description
        cover_image (width: 770, height: 380)
        path
      }
    }
  }
}
</page-query>

<script>
import Author from "~/components/Author.vue";
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    Author,
    PostCard,
  },
  metaInfo: { title: "Home" },
};
</script>
