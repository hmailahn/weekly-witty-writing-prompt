import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_GET_ALL_STORIES } from "../utils/queries";
import StoryList from "../components/StoryList";
import Prompts from "../components/Prompts";

// Home should show Prompt and user Stories
// need pages set up for Stories,

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_GET_ALL_STORIES);
  const stories = data?.getAllStories || [];
  console.log(stories);

return (
    <main>
    <div className="flex-row justify-space-between">
    <Prompts />
      <div className="col-12 mb-3">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <StoryList stories={stories} title="Read the stories from this week's prompt!" />
        )}
      </div>
    </div>
  </main>
  );
};


export default Home;
