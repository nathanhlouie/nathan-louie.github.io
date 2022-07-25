<template>
  <Layout>
    <Introduction />

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
  posts: allPost(sortBy: "id", order: ASC) {
    edges {
      node {
        id
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
import Introduction from "~/components/Introduction.vue";
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    Introduction,
    PostCard,
  },
  metaInfo: { title: "Home" },
};
</script>
