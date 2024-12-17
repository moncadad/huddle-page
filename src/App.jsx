import React from "react";
import "./App.css";
import FeatureBlock from "./components/FeatureBlock/FeatureBlock";
import Hero from "./components/Hero/Hero";
import growTogImg from "./assets/images/illustration-grow-together.svg";
import flowConvImg from "./assets/images/illustration-flowing-conversation.svg";
import yourUserImg from "./assets/images/illustration-your-users.svg";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";

function App() {
  return (
    <div className="container">
      <main className="main__wrapper">
        <Hero />
        <div className="features__wrapper">
          <FeatureBlock
            className="inner__wrapper"
            name="Grow Together"
            text="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form."
            image={growTogImg}
          />
          <FeatureBlock
            className="inner__wrapper inner__wrapper-alt"
            name="Flowing Conversations"
            text="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow. "
            image={flowConvImg}
          />
          <FeatureBlock
            className="inner__wrapper"
            name="Your Users"
            text="It takes no time at all to integrate Huddle with your app's    authentication solution. This means, once signed in to your app, your users  can start chatting immediately."
            image={yourUserImg}
          />
        </div>
        <GetStarted />
      </main>
      <Footer />
    </div>
  );
}

export default App;
