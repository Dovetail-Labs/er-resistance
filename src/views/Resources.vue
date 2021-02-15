<template>
  <div class="container">
    <section>
      <aside>
        <router-link to="menu" class="btn">Back to Emojify Lab</router-link>
      </aside>
      <div></div>
      <main>
        <h1>System Requirements & Help</h1>
        <h2>Camera Permissions</h2>
        <p>On Chrome(Desktop)</p>
        <p>If you've already blocked the camera or microphone permissions you need to enable them again via settings:</p>
        <ol>
          <li>At the top right, click three vertical dots, then settings(or file menu, Chrome -> preferences)</li>
          <li>Under Privacy and security, click Site settings</li>
          <li>Click Camera and then Microphone: “Ask before accessing” can be on or off</li>
          <li>Review your blocked and allowed sites</li>
          <li>To allow a site that you already blocked: Under Block select the site's name to expand the Permissions and change the camera and/or microphone permission to "Allow"</li>
        </ol>
        <p>On Safari(Desktop)</p>
        <ol>
          <li>Open Safari Preferences</li>
          <li>Navigate to Websites</li>
          <li>Go to Camera and Microphone tabs</li>
          <li>Change access to Allow</li>
          <li>Restart Safari</li>
        </ol>
        <hr>
        <h1>Privacy Policy for Dovetail Labs</h1>
        <p>At Emojify, accessible from emojify.info, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Emojify and how we use it.</p>
        <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
        <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Emojify. This policy is not applicable to any information collected offline or via channels other than this website.  
        <h2>Consent</h2>
        <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
        <h2>Information we collect</h2>
        <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
        <p> you may choose to provide.</p>
        <h2>How we use your information</h2>
        <p>We use the information we collect in various ways, including to:</p>
        <ul>
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
          <li>Send you emails</li>
          <li>Find and prevent fraud</li>
        </ul>
        <h2>Log Files</h2>
        <p>Emojify will only collect the base level of data to know how many users have engaged our site - using a standard procedure of using log files via Google Analytics. These files log visitors when they visit websites. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
        <h2>Third Party Privacy Policies</h2>
        <p>Emojify's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>
        <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</p>
        <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
        <p>Under the CCPA, among other rights, California consumers have the right to:</p>
        <p>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</p>
        <p>Request that a business delete any personal data about the consumer that a business has collected.</p>
        <p>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</p>
        <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>

        <h2>GDPR Data Protection Rights</h2>
        <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
        <p>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</p>
        <p>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</p>
        <p>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</p>
        <p>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</p>
        <p>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</p>
        <p>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</p>
        <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>

        <h2>Children's Information</h2>
        <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
        <p>Emojify does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>

      </main>
    </section>
  </div>

</template>

<script>
import Header from "../components/Header.vue";
import Modal from "../components/Modal.vue";
import FinishedGame from "../components/FinishedGame.vue";
import json from "../copy/quiz.json";
import copy from "../copy/global.json";
import RightArrow from "@/assets/images/right-arrow.svg";

import IconFB from "@/assets/images/icon-fb.svg";
import IconTW from "@/assets/images/icon-tw.svg";
import IconIG from "@/assets/images/icon-ig.svg";
import IconEM from "@/assets/images/icon-em.svg";


export default {
  name: "Activity1",
  metaInfo: {
    title: 'Activity 1'
  },
  data() {
    return {
      quiz: json,
      copy: copy,
      questionIndex: 0,
      step: 0,
      answer: "",
      showAnswer: false,
      correct: false
    }
  },
  components: {
    Header,
    Modal,
    FinishedGame,
    RightArrow,
    IconFB,
    IconTW,
    IconIG,
    IconEM
  },
  methods: {
    next: function(answer) {
      console.log(answer);
      console.log(this.quiz.questions[this.questionIndex].answer)
      if (answer === this.quiz.questions[this.questionIndex].answer) {
        this.correct = true;
        this.showAnswer = true;
      } else {
        this.correct = false;
        this.showAnswer = true;
      }
      setTimeout(function () {
          this.questionIndex++;
          this.showAnswer = false;
      }.bind(this), 1000);
    },
    
    moveToStep(step) {
      this.step = step;
    },

    getCopy() {
      return
    }

  }

};
</script>

<style scoped lang="scss">
section {
  margin: 1em;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 3rem;

  main {
    padding-bottom: 10em;
    p,li {
      width: 80%;
      line-height: 1.6em;
    }

    p {
      font-size: 1em;
    }
  }

  aside {
    padding-top: 2em;
    position: fixed;
    a {
      text-decoration: underline;
    }
  }
}
</style>
