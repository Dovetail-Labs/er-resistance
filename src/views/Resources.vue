<template>
  <div class="container">
    <section>
      <aside>
        <router-link to="menu" class="button">Back to emotion recognition system</router-link>
        <p class="credits">
          <a href="https://dovetaillabs.com/"><img class="logo dt" src="@/assets/images/logo-dovetail.png"></a>
          <img class="logo nesta" src="@/assets/images/logo-nesta.png">
        </p>
      </aside>
      <div></div>
      <main>
        <h1 id="about">About This Project</h1>
        <p>This project was created by a group of social scientists, citizen scientists, and designers. We want to open up conversations about emotion recognition systems: from the science behind the technology to their social impacts--and everything else in between. Our aim is to promote public understanding of these technologies and citizen involvement in their development and use. </p>
        <p>We are interested in gathering information about people’s experiences of emotion recognition systems and your thoughts on their practical applications in order to further people-centered learning on the topic. This is a participatory knowledge-building exercise -- your perspective matters, and we want to hear your experiences, reflections, reactions and concerns. </p>
        <p>Please don’t hesitate to get in touch if you want to discuss these topics with us in more detail. You can contact us at <a href="mailto:emojifyproject@gmail.com">emojifyproject@gmail.com</a>. </p>

        <hr>

        <h1 id="help">Camera Permissions</h1>
        <p>If you've already blocked the camera or microphone permissions you need to enable them again by changing your browser settings.</p>
        <p><strong>On Chrome (desktop):</strong></p>
        <ol>
          <li>At the top right of the browser, click on the three vertical dots, then “Settings” (or go to the Chrome top bar, click on “Chrome,” then “Preferences”).</li>
          <li>Under “Privacy and security,” click “Site Settings.”</li>
          <li>Click on “Camera” and then “Microphone.” “Ask before accessing” can be on or off.</li>
          <li>Review your blocked and allowed sites.</li>
          <li>To allow a site that you’ve blocked: under “Block,” select the site's name to expand the permissions and change the camera and/or microphone permission to "Allow."</li>        </ol>
        <p><strong>On Safari (desktop):</strong></p>
        <ol>
          <li>Open Safari Preferences</li>
          <li>Navigate to "Websites."</li>
          <li>Go to "Camera" and "Microphone" tabs.</li>
          <li>Change access to "Allow."</li>
          <li>Restart Safari.</li>
        </ol>

        <hr>

        <Collapsible :isOpen="false" class="research">
          <div slot="trigger">
            <div class="customTrigger">
              <h1>Privacy Policy<Triangle class="toggleOpen" /> </h1>
            </div>
          </div>

          <div slot="closedTrigger">
            <div class="customTrigger">
              <h1 id="privacy">Privacy Policy<Triangle class="toggleClosed" /> </h1>
            </div>
          </div>

          <!-- content -->
          <div>
            <p>Emojify ('Emojify', 'we' or 'us') is a scientific project, which aims to bring public understanding and awareness in the development of the emotion recognition systems and their social impact, for this purpose we conduct voluntary surveys. One of our main priorities is the privacy of our visitors and we are committed to protecting it through our compliance with this Privacy Policy (also the "Policy").</p>

            <p>This Policy describes the types of information that we may collect from you and about you upon your visit and use the website emojify.info (the "Website"). It also provides our practices for collecting, processing, maintaining, protecting and disclosing that information. This Policy is not applicable to any information collected offline or via channels other than the Website.</p>

            <p>Please read this Policy carefully to understand our policies and practices regarding your personal information and how we will treat and protect it.</p>

            <p>BY USING THIS WEBSITE, YOU REPRESENT AND WARRANT THAT YOU HAVE READ AND UNDERSTOOD, AND AGREE TO THE TERMS OF THIS POLICY. IF YOU DO NOT UNDERSTAND OR DO NOT AGREE TO BE BOUND BY THIS POLICY, YOU MAY NOT USE THE WEBSITE.</p>


            <h3>Information that we collect.</h3>
            <p>Generally the information that we collect from individual users is:</p>
            <ol>
              <li><strong><u>"Contact Data"</u></strong> - personally identifiable information about the end user, such as end user's email address or name or any other related information. We do not request and solicit this type of data from users, we would collect such information only if it has been provided by a user. Whenever possible and practicable, we will make sure that the personal information is anonymized and/or completely deleted.</li>
              <li><strong><u>"Traffic data"</u></strong> - information that browsers automatically make available, including: IP address; domain servers; date and time of your visit; details of transactions you carry out through this Website, browser type, computer type, operation system type, etc. Traffic data is anonymous information which does not personally identify you.</li>
            </ol>


            <h3>How we collect your information.</h3>
            <p>Emojify collects information about you when you interact with us and when we provide our services to you. We do not receive personal and non-personally identifiable information about you from third parties.</p>


            <h3>Why we collect your information. </h3>
            <p>We collect your information based on your explicit consent you have provided for the processing of your data and for the purpose of providing you with our services.</p>


            <h3>How We Use Your Information.</h3>
            <p>We will use the information collected from you to:</p>
            <ul>
              <li>Provide you with our services, operate, and maintain our Website;</li>
              <li>Improve, personalize, and expand our Website and services;</li>
              <li>Understand and analyze how you use our Website;</li>
              <li>Develop new products, services, features, and functionality;</li>
            </ul>


            <h3>How long we keep your information. </h3>
            <p>We will retain your information for as long as you use our Website and services. You have the right to request that your personal information is permanently removed from our system and database at any time. Such request will be accommodated within 45 days.</p>


            <h3>Right to access and control your data.</h3>
            <p>We provide you with many choices about the collection, use and sharing of your data. We will provide you with access to your personal information that we store and allow you to:</p>

            <ol>
              <li>Delete your data - you can request that we erase or delete all or some of your personal data (e.g., if it is no longer necessary to provide Services to you);</li>

              <li>Change or correct your data - you have the option to edit some of your personal data through your account. You can also ask us to change, update or fix your data in certain cases, particularly if it is inaccurate;</li>

              <li>Object to, or limit or restrict, use of data - you can ask us to stop using all or some of your personal data (e.g., if we have no legal right to keep using it) or to limit our use of it (e.g., if your personal data is inaccurate or unlawfully held);</li>

              <li>Right to access and/or take your data - you can ask us for a copy of your personal data and can ask for a copy of personal data you provided in machine readable form.</li>
            </ol>


            <h3>Disclosure of personal information.</h3>
            <p>Apart from Airtable and Plausible, whose services we use to collect and analyze the results from our survey, we will not share your information with any third parties. </p>
            <p>However, we reserve the right to disclose your personal information to third parties if required by a court order, law or legal process, including responding to any government or regulatory request. We may also disclose your personal information if we believe disclosure is necessary or appropriate to protect the rights, property, or safety of Emojify and/or our users or others.</p>


            <h3>Cookies and tracking technologies. </h3>
            <p>Emojify does not use cookies or tracking technologies to collect personal data from its users.</p> 

            <h3>Security of your personal information.</h3>
            <p>Emojify is committed to ensuring that the information you provide to us is secure from accidental loss and from unauthorized access, use, alteration and disclosure. We have implemented suitable physical, electronic and organizational measures to safeguard and secure information and protect it from misuse, interference, loss and unauthorised access, modification and disclosure. </p>

            <ul>
              <li>All information you provide to us is stored on our secure servers behind firewalls.</li>
              <li>We restrict access to personal information to employees, contractors and agents who are bound by confidentiality obligations and may be subject to discipline, including termination and legal action, if they fail to meet the obligations for data confidentiality and integrity;</li>
              <li>Areas of our website that collect personal data use encryption or other types of pseudonymization;</li>
              <li>In the event of a physical or technical incident, Emojify will be able to restore the availability and access to personal data in a timely manner;</li>
            </ul>

            <p>The security and safety of your personal information is also your own responsibility. We advise you to keep your account log-in details confidential and not to share them with anyone in order to prevent unauthorized access to you account and personal information. </p>


            <h3>Access to your personal information.</h3>
            <p>We will provide you with access to your personal information that we store and allow you to correct, amend or delete inaccurate information. You may also send us an e-mail at <a href="mailto:emojifyproject@gmail.com">emojifyproject@gmail.com</a> to request access to, correct or delete any personal information that you have provided to us. We may not accommodate a request to change information if we believe the change would violate any law or legal requirement or cause the information to be incorrect.</p>
            <p>California Civil Code Section § 1798.83 permits the users of this Website that are California residents to request certain information regarding our disclosure of personal information to third parties for their direct marketing purposes. To make such a request, please send an e-mail to <a href="mailto:emojifyproject@gmail.com">emojifyproject@gmail.com</a> or write us at: [mail address].</p>


            <h3>Users under age of 13</h3>
            <p>Our Website is not intended for use by children under the age of 13. We do not knowingly collect personal information from person under 13. If you are under 13, you should not use or provide any information on our Website or provide any information about yourself to us. If we learn we have collected or received personal information from a user under 13, we will immediately delete that information.</p>


            <h3>Changes to this Privacy Policy</h3>
            <p>Please be aware that we may change this Privacy Policy from time to time in our sole discretion. We will keep you informed of any amendments that we make to this Policy. All modifications will be effective immediately upon our posting them on the Website. Please check back from time to time to review our Policy.</p>


            <h3>Contact information</h3>
            <p>If you have any questions, comments, complaints or concerns regarding this Policy, you can contact us anytime at the following address: <a href="mailto:emojifyproject@gmail.com">emojifyproject@gmail.com</a>. We take complaints very seriously and will respond shortly after receiving written notice of your complaint.</p>

            <p>Last updated: April 30, 2021</p>
          </div>
        </Collapsible>        

        <hr>

        <h1 id="resources">Resources</h1>
        <Collapsible :isOpen="false" class="media">
          <div slot="trigger">
            <div class="customTrigger">
              <h2>Media<Triangle class="toggleOpen" /></h2>
            </div>
          </div>

          <div slot="closedTrigger">
            <div class="customTrigger">
              <h2>Media<Triangle class="toggleClosed" /></h2>
            </div>
          </div>

          <div>
            <h3>News Articles & Opinion Pieces</h3>
            <p>Chan, Milly (16 February 2021) "This AI reads children's emotions as they learn" <em>CNN Business</em>.</p>
            <p><a href="https://www.cnn.com/2021/02/16/tech/emotion-recognition-ai-education-spc-intl-hnk/index.html" target="_blank" rel="noopener">In Hong Kong, this AI reads children's emotions as they learn - CNN</a></p>
            <p>Pasquale, Frank. (19 October 2020) &ldquo;More Than a Feeling - Emotion detection doesn&rsquo;t work, but it will try to change your behavior anyway&rdquo;. <em>Real Life Magazine</em><a href="https://reallifemag.com/more-than-a-feeling/" target="_blank" rel="noopener"><span>https://reallifemag.com/more-than-a-feeling/</span></a></p>
            <p>Heckman, Christoffer. (8 January 2020) "AI can now read emotions-should it?" <em>The Conservation</em><a href="https://theconversation.com/ai-can-now-read-emotions-should-it-128988" target="_blank" rel="noopener"><span>https://theconversation.com/ai-can-now-read-emotions-should-it-128988</span></a></p>
            <p>Kelton, Leo (12 December 2019) "Emotion-detecting tech should be restricted by law-AI Now", <em>BBC News</em>.<a href="https://www.bbc.co.uk/news/technology-50761116" target="_blank" rel="noopener"><span>https://www.bbc.co.uk/news/technology-50761116</span></a></p>
            <p>Purdy, Mark, Zealley John &amp; Omaro Maseli. (18 November 2019) "The Risks of Using AI to Interpret Human Emotions" <em>Harvard Business Review</em>.<a href="https://hbr.org/2019/11/the-risks-of-using-ai-to-interpret-human-emotions" target="_blank" rel="noopener"><span>https://hbr.org/2019/11/the-risks-of-using-ai-to-interpret-human-emotions</span></a></p>
            <p>Lewis, Tim (17 August 2019) "AI can read your emotions. Should it?" <em>The Guardian</em><a href="https://www.theguardian.com/technology/2019/aug/17/emotion-ai-artificial-intelligence-mood-realeyes-amazon-facebook-emotient" target="_blank" rel="noopener"><span>AI can read your emotions. Should it? | Artificial intelligence (AI) | The Guardian</span></a></p>
            <p>Simonite, Tom (8 August 2019) "Amazon Says It Can Detect Fear on Your Face". You Scared?. <em>Wired</em><a href="https://www.wired.com/story/amazon-detect-fear-face-you-scared/" target="_blank" rel="noopener"><span>https://www.wired.com/story/amazon-detect-fear-face-you-scared/</span></a></p>
            <p>Vincent, James (25 July 2019) AI "Emotion Recognition" Can't Be Trusted". <em>The Verge</em><a href="https://www.theverge.com/2019/7/25/8929793/emotion-recognition-analysis-ai-machine-learning-facial-expression-review" target="_blank" rel="noopener"><span>https://www.theverge.com/2019/7/25/8929793/emotion-recognition-analysis-ai-machine-learning-facial-expression-review</span></a></p>
            <p>Telford, Taylor (21 July 2019) "&lsquo;Emotion Detection&rsquo; AI is a $20 billion dollar industry. New research says it can&rsquo;t do what it claims&rdquo;.<a href="https://www.washingtonpost.com/business/2019/07/31/emotion-detection-ai-is-billion-industry-new-research-says-it-cant-do-what-it-claims/" target="_blank" rel="noopener"><span>https://www.washingtonpost.com/business/2019/07/31/emotion-detection-ai-is-billion-industry-new-research-says-it-cant-do-what-it-claims/</span></a></p>
            <p>Schwartz, Oscar. (6 March 2019) "Don't look now: why you should be worried about machines reading your emotions." The Guardian. <a href="https://www.theguardian.com/technology/2019/mar/06/facial-recognition-software-emotional-science" target="_blank" rel="noopener"><span>Don&rsquo;t look now: why you should be worried about machines reading your emotions | Facial recognition | The Guardian</span></a></p>
            <p>Rhue, Lauren (3 January 2019) "Emotion-reading tech fails the racial bias test" <em>The Conversation</em>.<a href="https://theconversation.com/emotion-reading-tech-fails-the-racial-bias-test-108404" target="_blank" rel="noopener"><span>https://theconversation.com/emotion-reading-tech-fails-the-racial-bias-test-108404</span></a></p>
            <h3>Podcasts and Video</h3>
            <p>Cox, Graeme &amp; Charles Nduka. (11 January 2021) &ldquo;Measuring subjective emotional experiences with Professor Karen Quigley&rdquo; on <em>Emotion Lab by Emteq Labs</em></p>
            <p><a href="https://www.emteqlabs.com/emotion-lab/" target="_blank" rel="noopener">Emotion Lab - emteq labs | Measure what matters during immersive experiences</a></p>
            <p>Strong, Jennifer (14 October 2020) &ldquo;AI Reads Human Emotions. Should it?&rdquo; on In Machines We Trust-&nbsp; <em>MIT Technology Review</em></p>
            <p><a href="https://www.technologyreview.com/2020/10/14/1010474/ai-reads-human-emotions-should-it/" target="_blank" rel="noopener">AI Reads Human Emotions. Should it? | MIT Technology Review</a></p>
            <p>Strong, Jennifer (24 September 2020) &ldquo;How close is AI to decoding our emotions?&rdquo; on In Machines We Trust- <em>MIT Technology Review</em></p>
            <p><a href="https://www.technologyreview.com/2020/09/24/1008876/how-close-is-ai-to-decoding-our-emotions/" target="_blank" rel="noopener">How close is AI to decoding our emotions? | MIT Technology Review</a></p>
            <p>Klein, Ezra (6 July 2020) &ldquo;Can artificial intelligence be emotionally intelligent‪?&rdquo; on The Ezra Klein Show- <em>Vox Conversations</em></p>
            <p><a href="https://podcasts.apple.com/gy/podcast/can-artificial-intelligence-be-emotionally-intelligent/id1081584611?i=1000482804600" target="_blank" rel="noopener">&lrm;Vox Conversations: Can artificial intelligence be emotionally intelligent? on Apple Podcasts</a></p>
            <p>Flow with Lisa F. Barrett, &ldquo;How emotions are made- a cinematic lecture&rdquo;. 14 April 2020.<a href="https://www.youtube.com/watch?v=0rbyC5m557I" target="_blank" rel="noopener"><span>How Emotions are Made (Cinematic Lecture) - YouTube</span></a></p>
            <p>Klein, Ezra (16 October 2019)&ldquo;We don&rsquo;t just feel emotions. We make them‪&rdquo; on The Ezra Klein Show -<em> Vox Conversations</em></p>
            <p><a href="https://podcasts.apple.com/ca/podcast/we-dont-just-feel-emotions-we-make-them/id1081584611?i=1000453839760" target="_blank" rel="noopener">&lrm;Vox Conversations: We don&rsquo;t just feel emotions. We make them. on Apple Podcasts</a></p>
          </div>
        </Collapsible>

        <Collapsible :isOpen="false" class="art">
          <div slot="trigger">
            <div class="customTrigger">
              <h2>Interactive and Arts-Based Projects<Triangle class="toggleOpen" /></h2>
            </div>
          </div>

          <div slot="closedTrigger">
            <div class="customTrigger">
              <h2>Interactive and Arts-Based Projects<Triangle class="toggleClosed" /></h2>
            </div>
          </div>

          <div>
            <p>Stealing Ur Feelings - by Noah Levenson, with support from Mozilla</p>
            <p><a href="https://stealingurfeelin.gs/" target="_blank" rel="noopener">https://stealingurfeelin.gs/</a></p>
            <p>How Normal Am I? &ndash; by Tijmen Schep, with support from the European Union</p>
            <p><a href="https://www.hownormalami.eu/" target="_blank" rel="noopener">https://www.hownormalami.eu/</a></p>
            <p>ImageNet Roulette, by Trevor Paglan, part of the &lsquo;Training Humans&rsquo; exhibition in collaboration with Kate Crawford</p>
            <p><a href="https://www.theverge.com/tldr/2019/9/16/20869538/imagenet-roulette-ai-classifier-web-tool-object-image-recognition" target="_blank" rel="noopener">https://www.theverge.com/tldr/2019/9/16/20869538/imagenet-roulette-ai-classifier-web-tool-object-image-recognition</a></p>
          </div>
        </Collapsible>

        <Collapsible :isOpen="false" class="reports">
          <div slot="trigger">
            <div class="customTrigger">
              <h2>Reports<Triangle class="toggleOpen" /></h2>
            </div>
          </div>

          <div slot="closedTrigger">
            <div class="customTrigger">
              <h2>Reports<Triangle class="toggleClosed" /></h2>
            </div>
          </div>

          <div>
            <p><em>Article 19</em> (January 2021) &ldquo;Emotional Entanglement: China&rsquo;s emotion recognition market and its implications for human rights&rdquo;<a href="https://www.article19.org/wp-content/uploads/2021/01/ER-Tech-China-Report.pdf" target="_blank" rel="noopener"><span>https://www.article19.org/wp-content/uploads/2021/01/ER-Tech-China-Report.pdf</span></a></p>
            <p>Greene, Gretchen. (30 July 2020) &ldquo;The Ethics of AI and Emotional Intelligence&rdquo;. <em>Partnership on AI.</em><a href="https://www.partnershiponai.org/the-ethics-of-ai-and-emotional-intelligence/" target="_blank" rel="noopener"><span>The Ethics of AI and Emotional Intelligence - The Partnership on AI</span></a></p>
            <p>Crawford, Kate, Roel Dobbe, Theodora Dryer, Genevieve Fried, Ben Green, Elizabeth Kaziunas, Amba Kak, Varoon Mathur, Erin McElroy, Andrea Nill S&aacute;nchez, Deborah Raji, Joy Lisi Rankin, Rashida Richardson, Jason Schultz, Sarah Myers West, and Meredith Whittaker. (4 December 2019) &ldquo;AI Now 2019 Report&rdquo;&nbsp; <em>AI Now Institute</em><a href="https://ainowinstitute.org/AI_Now_2019_Report.html" target="_blank" rel="noopener"><span>https://ainowinstitute.org/AI_Now_2019_Report.html</span></a>.</p>
            <p>Snow, Jacob (28 July 2018) &ldquo;Amazon&rsquo;s Face Recognition Falsely Matched 28 Members of Congress With Mugshots&rdquo; <em>American Civil Liberties Union</em><a href="https://www.aclu.org/blog/privacy-technology/surveillance-technologies/amazons-face-recognition-falsely-matched-28" target="_blank" rel="noopener"><span>https://www.aclu.org/blog/privacy-technology/surveillance-technologies/amazons-face-recognition-falsely-matched-28</span></a></p>
          </div>
        </Collapsible>

        <Collapsible :isOpen="false" class="research">
          <div slot="trigger">
            <div class="customTrigger">
              <h2>Research and Advocacy Organizations<Triangle class="toggleOpen" /></h2>
            </div>
          </div>

          <div slot="closedTrigger">
            <div class="customTrigger">
              <h2>Research and Advocacy Organizations<Triangle class="toggleClosed" /></h2>
            </div>
          </div>

          <div>
            <p><a href="https://www.adalovelaceinstitute.org/" target="_blank" rel="noopener"><span>Ada Lovelace</span></a></p>
            <p><a href="https://ainowinstitute.org/" target="_blank" rel="noopener">AI Now</a></p>
            <p><a href="https://www.turing.ac.uk/" target="_blank" rel="noopener">The Alan Turing Institute</a></p>
            <p><a href="https://datasociety.net/" target="_blank" rel="noopener">Data and Society</a></p>
            <p><a href="https://montrealethics.ai/" target="_blank" rel="noopener">Montreal AI Ethics</a></p>
            <p><a href="https://www.accessnow.org/" target="_blank" rel="noopener">Access Now</a></p>
            <p><a href="https://www.article19.org/" target="_blank" rel="noopener">Article 19</a></p>
            <p><a href="https://dovetaillabs.com/" target="_blank" rel="noopener">Dovetail Labs</a></p>
            <p>Leverhulme Centre for the Future of Intelligence</p>
            <p><a href="https://www.cser.ac.uk/" target="_blank" rel="noopener">Centre for the Study of Existential Risk</a></p>
          </div>
        </Collapsible>

        <Collapsible :isOpen="false" class="activism">
          <div slot="trigger">
            <div class="customTrigger">
              <h2>Facial Recognition Technology Activism<Triangle class="toggleOpen" /></h2>
            </div>
          </div>

          <div slot="closedTrigger">
            <div class="customTrigger">
              <h2>Facial Recognition Technology Activism<Triangle class="toggleClosed" /></h2>
            </div>
          </div>

          <div>
            <p>American Civil Liberties Union&nbsp; -<a href="https://www.aclu.org/letter/coalition-letter-calling-federal-moratorium-face-recognition" target="_blank" rel="noopener"><span>Coalition Letter Calling for a Federal Moratorium on Facial Recognition</span></a></p>
            <p>Amnesty International -<a href="https://www.amnesty.org/en/latest/news/2021/01/ban-dangerous-facial-recognition-technology-that-amplifies-racist-policing/" target="_blank" rel="noopener"><span>Ban dangerous facial recognition technology that amplifies racist policing | Amnesty International</span></a></p>
            <p>Big Brother Watch &ndash;<a href="https://bigbrotherwatch.org.uk/campaigns/stop-facial-recognition/" target="_blank" rel="noopener"><span>Stop Facial Recognition</span></a></p>
            <p>Canadian Civil Liberties Association -<a href="https://ccla.org/facial-recognition/" target="_blank" rel="noopener"><span>Facial Recognition - CCLA</span></a></p>
            <p>Council of Europe-<a href="https://www.coe.int/en/web/portal/-/facial-recognition-strict-regulation-is-needed-to-prevent-human-rights-violations-" target="_blank" rel="noopener"><span>Facial recognition: strict regulation is needed to prevent human rights violations -(co.)</span></a></p>
            <p>Liberty UK &ndash;<a href="https://www.libertyhumanrights.org.uk/campaign/resist-facial-recognition/" target="_blank" rel="noopener"><span>Resist Facial Recognition Petition</span></a></p>
            <p>Open Media -<a href="https://action.openmedia.org/page/63866/action/1?locale=en-US" target="_blank" rel="noopener"><span>Ban Facial Recognition (openmedia.org)</span></a></p>
            <p>Reclaim Your Face - <a href="https://reclaimyourface.eu/" target="_blank" rel="noopener">A European Citizens' Initiative (ECI) to ban biometric mass surveillance</a></p>
            <p>US Congress &ndash;<a href="https://drive.google.com/file/d/1gkTcjFtieMQdsQ01dmDa49B6HY9ZyKr8/view" target="_blank" rel="noopener"><span>Bill Text- Facial Recognition and Biometric Technology Moratorium Act of 2020</span></a></p>
          </div>
        </Collapsible>

        <Collapsible :isOpen="false" class="academic">
          <div slot="trigger">
            <div class="customTrigger">
              <h2>Academic Articles<Triangle class="toggleOpen" /></h2>
            </div>
          </div>

          <div slot="closedTrigger">
            <div class="customTrigger">
              <h2>Academic Articles<Triangle class="toggleClosed" /></h2>
            </div>
          </div>

          <div>
            <h3>Perspectives on Human Emotions from the Humanities, Social Sciences and Psychology</h3>
            <p><span>Beatty, Andrew. (2013) "Current emotion research in anthropology: Reporting the field." </span><em>Emotion Review</em><span> 5, no. 4: 414-422.</span><a href="https://doi.org/10.1177%2F1754073913490045" target="_blank" rel="noopener"><span>https://doi.org/10.1177/1754073913490045</span></a></p>
            <p><span>Beatty, Andrew. (2019). </span><em>Emotional Worlds</em><span>. Cambridge University Press</span><a href="https://doi.org/10.1017/9781139108096" target="_blank" rel="noopener"><span>https://doi.org/10.1017/9781139108096</span></a></p>
            <p>De Leersnyder, Jozefien, Boiger, Michael, &amp; Mesquita, Batja. (2013). Cultural regulation of emotion: Individual, relational, and structural sources. <em>Frontiers in Psychology</em>, 4, 55.<a href="https://doi.org/10.3389/fpsyg.2013.00055" target="_blank" rel="noopener"><span>https://doi.org/10.3389/fpsyg.2013.00055</span></a></p>
            <p>Ekman, P., &amp; Cordaro, D. (2011). What is meant by calling emotions basic. <em>Emotion review</em>, 3(4), 364-370.<a href="https://doi.org/10.1177%2F1754073911410740" target="_blank" rel="noopener"><span>https://doi.org/10.1177/1754073911410740</span></a></p>
            <p>Geertz, Clifford (1973), "Thick Description: Toward an Interpretive Theory of Culture", <em>The Interpretation of Cultures: Selected Essays</em>, New York: Basic Books.<a href="https://philpapers.org/archive/GEETTD.pdf" target="_blank" rel="noopener"><span>GEETTD.pdf (philpapers.org)</span></a></p>
            <p><span>Gendron, M., Hoemann, K., Crittenden, A.N. </span><em>et al.</em><span> (2020) Emotion Perception in Hadza Hunter-Gatherers. </span><em>Sci Rep</em><strong>10, </strong><span>3867.</span><a href="https://doi.org/10.1038/s41598-020-60257-2" target="_blank" rel="noopener"><span>https://doi.org/10.1038/s41598-020-60257-2</span></a></p>
            <p>Lutz, C. A. (1988). <em>Unnatural emotions: Everyday sentiments on a micronesian atoll and their challenge to western theory</em>. Chicago, IL: University of Chicago Press.<a href="https://books.google.ca/books?printsec=frontcover&amp;vid=LCCN88000329&amp;redir_esc=y#v=onepage&amp;q&amp;f=false" target="_blank" rel="noopener"><span>Unnatural Emotions- Google Livres</span></a></p>
            <p><span>Niedenthal, Paula M., and Fran&ccedil;ois Ric. (2017) </span><em>Psychology of emotion</em><span>. Psychology Press.</span><a href="https://www.routledge.com/Psychology-of-Emotion/Niedenthal-Ric/p/book/9781848725126" target="_blank" rel="noopener"><span>Psychology of Emotion - 2nd Edition - Paula M. Niedenthal - Fran&ccedil;ois (routledge.com)</span></a></p>
            <p>Nussbaum, M. (2001). <em>Upheavals of thought: The intelligence of emotions</em>. Cambridge, UK: Cambridge University Press.<a href="https://books.google.ca/books?hl=fr&amp;lr=&amp;id=Mji-Ah10AesC&amp;oi=fnd&amp;pg=PA1&amp;dq=Nussbaum,+M.+(2001).+Upheavals+of+thought:+The+intelligence+of+emotions&amp;ots=MwtkxzWvD1&amp;sig=fv_mw9n_H71rmOD_H4Zk0xiPZK8#v=onepage&amp;q=Nussbaum%2C%20M.%20(2001).%20Upheavals%20of%20thought%3A%20The%20intelligence%20of%20emotions&amp;f=false" target="_blank" rel="noopener"><span>Upheavals of Thought - Google Livres</span></a></p>
            <p><span>White, Daniel (2019) &ldquo;Japan&rsquo;s Emerging Emotional Tech.&rdquo; With Patrick W. Galbraith. </span><em>Anthropology News</em><span>. Vol. 60, Issue 1 (January/February).</span><a href="http://www.anthropology-news.org/index.php/2019/01/25/japans-emerging-emotional-tech/" target="_blank" rel="noopener"><span>Japan&rsquo;s Emerging Emotional Tech | Anthropology News (anthropology-news.org)</span></a></p>
            <p>Widen, Sherri C., Anita M. Christy, Kristen Hewett, and James A. Russell. (2011) "Do proposed facial expressions of contempt, shame, embarrassment, and compassion communicate the predicted emotion?." <em>Cognition &amp; Emotion </em>25, no. 5: 898-906. <span>DOI: </span><a href="https://doi.org/10.1080/02699931.2010.508270" target="_blank" rel="noopener"><span>10.1080/02699931.2010.508270</span></a></p>

            <h3>Scholarly Surveys of Emotional Recognition Systems and Scientific Assessments</h3>
            <p>Barrett, Lisa Feldman, Ralph Adolphs, Stacy Marsella, Aleix M. Martinez, and Seth D. Pollak. "Emotional expressions reconsidered: Challenges to inferring emotion from human facial movements." Psychological science in the public interest 20, no. 1 (2019): 1-68.<a href="https://journals.sagepub.com/doi/10.1177/1529100619832930" target="_blank" rel="noopener"><span>https://journals.sagepub.com/doi/10.1177/1529100619832930</span></a></p>
            <p><span>Drozdowski, Pawel &amp; Rathgeb, Christian &amp; Dantcheva, Antitza &amp; Damer, Naser &amp; Busch, Christoph. (2020). &ldquo;Demographic Bias in Biometrics: A Survey on an Emerging Challenge&rdquo;. </span><em>IEEE Transactions on Technology and Society</em><span>.</span><a href="https://arxiv.org/pdf/2003.02488.pdf" target="_blank" rel="noopener"><span>https://arxiv.org/pdf/2003.02488.pdf</span></a></p>
            <p><span>Dupr&eacute; D, Krumhuber EG, K&uuml;ster D, McKeown GJ (2020) A performance comparison of eight commercially available automatic classifiers for facial affect recognition. PLOS ONE 15(4): e0231968. </span><a href="https://doi.org/10.1371/journal.pone.0231968" target="_blank" rel="noopener"><span>https://doi.org/10.1371/journal.pone.0231968</span></a></p>
            <p>Guo, Anhong, Ece Kamar, Jennifer Wortman Vaughan, Hanna Wallach, and Meredith Ringel Morris. "Toward fairness in AI for people with disabilities SBG@ a research roadmap." <em>ACM SIGACCESS Accessibility and Computing</em> 125 (2020): 1-1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>Sharma, G., &amp; Dhall, A. (2021). A survey on automatic multimodal emotion recognition in the wild. In G. Phillips-Wren, A. Esposito, &amp; L. C. Jain (Eds.), <em>Advances in Data Science: Methodologies and Applications</em> (pp. 35-64). (Intelligent Systems Reference Library; Vol. 189). Springer.<a href="https://doi.org/10.1007/978-3-030-51870-7_3" target="_blank" rel="noopener"><span>https://doi.org/10.1007/978-3-030-51870-7_3</span></a></p>
            <p><span>Shu, L., Xie, J., Yang, M., Li, Z., Li, Z., Liao, D., Xu, X., et al. (2018). A Review of Emotion Recognition Using Physiological Signals. </span><em>Sensors</em><span>, </span><em>18</em><span>(7), 2074. MDPI AG.</span><a href="http://dx.doi.org/10.3390/s18072074" target="_blank" rel="noopener"><span>http://dx.doi.org/10.3390/s18072074</span></a></p>
            <p>Stark, Luke <em>Ordering Emotion: Histories of Computing and Human Feelings from Cybernetics to AI</em>. MIT Press,<a href="https://starkcontrast.co/book" target="_blank" rel="noopener"> https://starkcontrast.co/book</a>(forthcoming)</p>
            
            <h3>Expert Views on Emotion-Detection AI</h3>
            <p>McStay, Andrew. "Emotional AI, soft biometrics and the surveillance of emotional life: An unusual consensus on privacy." <em>Big Data &amp; Society</em> 7, no. 1 (2020): 2053951720904386.</p>
            <p><a href="https://journals.sagepub.com/doi/full/10.1177/2053951720904386" target="_blank" rel="noopener">https://journals.sagepub.com/doi/full/10.1177/2053951720904386</a></p>
            <p><span>Stark, L., &amp; Hoey, J. (8 October 2020). The Ethics of Emotion in AI Systems.</span><a href="https://doi.org/10.31219/osf.io/9ad4u" target="_blank" rel="noopener"><span>https://doi.org/10.31219/osf.io/9ad4u</span></a></p>
            <p><span>Wright, James (1 September 2020) &ldquo;Suspect AI: Vibraimage, Emotion Recognition Technology and Algorithmic Opacity&rdquo;</span><a href="https://arxiv.org/abs/2009.00502" target="_blank" rel="noopener"><span>[2009.00502] Suspect AI (arxiv.org)</span></a></p>
          </div>
        </Collapsible>

        <Collapsible :isOpen="false" class="uses">
          <div slot="trigger">
            <div class="customTrigger">
              <h2>Current Uses of Emotion Recognition Technology<Triangle class="toggleOpen" /></h2>
            </div>
          </div>

          <div slot="closedTrigger">
            <div class="customTrigger">
              <h2>Current Uses of Emotion Recognition Technology<Triangle class="toggleClosed" /></h2>
            </div>
          </div>

          <div>
            <h3>Hiring</h3>
            <p><span>Raghavan, Manish, Solon Barocas, Jon Kleinberg, and Karen Levy. "Mitigating bias in algorithmic hiring: Evaluating claims and practices." In </span><em>Proceedings of the 2020 conference on fairness, accountability, and transparency</em><span>, pp. 469-481. 2020.</span><a href="https://arxiv.org/abs/1906.09208" target="_blank" rel="noopener"><span>[1906.09208] Mitigating Bias in Algorithmic Hiring: Evaluating Claims and Practices (arxiv.org)</span></a></p>
            <p>van den Broek, E., Sergeeva, A., &amp; Huysman, M. (2020). Hiring algorithms: An ethnography of fairness in practice. In <em>ICIS 2019 Proceedings: 40th International Conference on Information Systems, ICIS 2019 </em>(pp. 1-9). (40th International Conference on Information Systems, ICIS 2019). Association for Information Systems. <a href="https://aisel.aisnet.org/icis2019/future_of_work/future_work/6/" target="_blank" rel="noopener"><span>https://aisel.aisnet.org/icis2019/future_of_work/future_work/6/</span></a></p>
            <h3>Education</h3>
            <p>Kwet, Michael, and Paul Prinsloo. "The &lsquo;smart&rsquo; classroom: a new frontier in the age of the smart university." <em>Teaching in Higher Education</em> 25, no. 4 (2020): 510-526.DOI: <a href="https://doi.org/10.1080/13562517.2020.1734922" target="_blank" rel="noopener"><span>10.1080/13562517.2020.1734922</span></a></p>
            <p>McStay, Andrew (2020) Emotional AI and EdTech: serving the public good?, Learning, Media and Technology, 45:3, 270-283, DOI: <a href="https://doi.org/10.1080/17439884.2020.1686016" target="_blank" rel="noopener"><span>10.1080/17439884.2020.1686016</span></a></p>
            <h3>Law Enforcement, Security, Immigration</h3>
            <p><span>Hayward, Keith J., and Matthijs M. Maas. "Artificial intelligence and crime: A primer for criminologists." </span><em>Crime, Media, Culture</em><span> (2020): 1741659020917434. </span>doi:<a href="https://doi.org/10.1177/1741659020917434" target="_blank" rel="noopener"><span>10.1177/1741659020917434</span></a></p>
            <p>Gillbert, Ben (21 February 2020) &ldquo;Amazon sells facial recognition software to police all over the US, but has no idea how many departments are using it&rdquo; <em>Business Insider</em></p>
            <p><a href="https://www.businessinsider.fr/us/amazon-rekognition-police-use-unknown-2020-2" target="_blank" rel="noopener">https://www.businessinsider.fr/us/amazon-rekognition-police-use-unknown-2020-2</a></p>
            <p><span>Valentino-DeVries, Jennifer (12 January 2020) &ldquo;How the Police Use Facial Recognition, and Where It Falls Short&rdquo; </span><em>The New York Times</em><span>&nbsp; </span><a href="https://www.nytimes.com/2020/01/12/technology/facial-recognition-police.html" target="_blank" rel="noopener">https://www.nytimes.com/2020/01/12/technology/facial-recognition-police.html</a></p>
            <p>Lomas, Natasha. (5 February 2021) &ldquo;Orwellian AI lie detector project challenged in EU court&rdquo; <em>TechCrunch</em> https://techcrunch.com/2021/02/05/orwellian-ai-lie-detector-project-challenged-in-eu-court/</p>
          </div>
        </Collapsible>

        <Collapsible :isOpen="false" class="bias">
          <div slot="trigger">
            <div class="customTrigger">
              <h2>Examining Bias in Databases<Triangle class="toggleOpen" /></h2>
            </div>
          </div>

          <div slot="closedTrigger">
            <div class="customTrigger">
              <h2>Examining Bias in Databases<Triangle class="toggleClosed" /></h2>
            </div>
          </div>

          <div>
            <p><span>Dulhanty, Chris. "Issues in Computer Vision Data Collection: Bias, Consent, and Label Taxonomy." Master's thesis, University of Waterloo, 2020.</span><a href="https://uwspace.uwaterloo.ca/handle/10012/16414" target="_blank" rel="noopener"><span>Issues in Computer Vision Data Collection: Bias, Consent, and Label Taxonomy (uwaterloo.ca)</span></a></p>
            <p><span>Krithika, L. B., and Lakshmi Priya GG. "Student emotion recognition system (SERS) for e-learning improvement based on learner concentration metric." </span><em>Procedia Computer Science</em><span> 85 (2016): 767-776.</span><a href="https://doi.org/10.1016/j.procs.2016.05.264" target="_blank" rel="noopener"><span>https://doi.org/10.1016/j.procs.2016.05.264</span></a></p>
            <p><span>Kyriakou, Kyriakos, Styliani Kleanthous, Jahna Otterbacher, and George A. Papadopoulos.&nbsp; (2020) "Emotion-based Stereotypes in Image Analysis Services." In </span><em>Adjunct Publication of the 28th ACM Conference on User Modeling, Adaptation and Personalization</em><span>, pp. 252-259.</span><a href="https://doi.org/10.1145/3386392.3399567" target="_blank" rel="noopener"><span>https://doi.org/10.1145/3386392.3399567</span></a></p>
            <p>Rhue, Lauren, (9 November, 2018).Racial Influence on Automated Perceptions of Emotions<a href="https://ssrn.com/abstract=3281765" target="_blank" rel="noopener"><span>https://ssrn.com/abstract=3281765</span></a> or<a href="https://dx.doi.org/10.2139/ssrn.3281765" target="_blank" rel="noopener"><span>http://dx.doi.org/10.2139/ssrn.3281765</span></a></p>
            <p>Xu T., White J., Kalkan S., Gunes H. (2020) Investigating Bias and Fairness in Facial Expression Recognition. In: Bartoli A., Fusiello A. (eds) Computer Vision &ndash; ECCV 2020 Workshops. ECCV 2020. Lecture Notes in Computer Science, vol 12540. Springer, Cham<span>.</span><a href="https://doi.org/10.1007/978-3-030-65414-6_35" target="_blank" rel="noopener"><span>https://doi.org/10.1007/978-3-030-65414-6_35</span></a></p>
          </div>
        </Collapsible>

        <Collapsible :isOpen="false" class="facial">
          <div slot="trigger">
            <div class="customTrigger">
              <h2>Facial Recognition Technology<Triangle class="toggleOpen" /></h2>
            </div>
          </div>

          <div slot="closedTrigger">
            <div class="customTrigger">
              <h2>Facial Recognition Technology<Triangle class="toggleClosed" /></h2>
            </div>
          </div>

          <div>
            <p>Buolamwini, Joy, Timnit Gebru, Dr. Helen Raynham, Deborah Raji, and Ethan Zuckerman &ldquo;How well do IBM, Microsoft, and Face++ AI services guess the gender of a face?&rdquo; &ndash; MIT Media Lab<a href="http://gendershades.org/" target="_blank" rel="noopener"><span>http://gendershades.org/</span></a></p>
            <p>Garvie, Claire, Alavro Bedoya &amp; Jonathan Frankle. (18 October 2016) &ldquo;The Perpetual Line-Up: Unregulated Police Face Recognition in America&rdquo;<a href="https://www.perpetuallineup.org/" target="_blank" rel="noopener"><span>https://www.perpetuallineup.org/</span></a></p>
            <p>Hao, Karen (5 February 2021) &ldquo;This is how we lost control of our faces&rdquo; MIT Technology Review<a href="https://www.technologyreview.com/2021/02/05/1017388/ai-deep-learning-facial-recognition-data-history/" target="_blank" rel="noopener"><span>https://www.technologyreview.com/2021/02/05/1017388/ai-deep-learning-facial-recognition-data-history/</span></a></p>
            <p><span>Raji, Inioluwa Deborah, and Genevieve Fried. "About Face: A Survey of Facial Recognition Evaluation." </span><em>arXiv preprint arXiv:2102.00813</em><span> (2021).</span><a href="https://arxiv.org/pdf/2102.00813.pdf" target="_blank" rel="noopener">https://arxiv.org/pdf/2102.00813.pdf</a></p>
            <p>Roussi, Antoaneta (18 November 2020) &ldquo;Resisting the rise of facial recognition&rdquo; <em>Nature</em><a href="https://www.nature.com/articles/d41586-020-03188-2" target="_blank" rel="noopener"><span>https://www.nature.com/articles/d41586-020-03188-2</span></a></p>
          </div>
        </Collapsible>

        <Collapsible :isOpen="false" class="citizen">
          <div slot="trigger">
            <div class="customTrigger">
              <h2>Citizen Science and Advancing Social Change<Triangle class="toggleOpen" /></h2>
            </div>
          </div>

          <div slot="closedTrigger">
            <div class="customTrigger">
              <h2>Citizen Science and Advancing Social Change<Triangle class="toggleClosed" /></h2>
            </div>
          </div>

          <div>
            <p>ECSA (2020) ECSA&rsquo;s characteristics of citizen science. European Citizen Science Association.​<a href="https://ecsa.citizen-science.net/blog/characteristics-citizen-science" target="_blank" rel="noopener"><span>https://ecsa.citizen-science.net/blog/characteristics-citizen-science</span></a></p>
            <p>Haklay, M. (2013) &ldquo;Citizen science and volunteered geographic information&rdquo;.&nbsp; <em>Crowdsourcing geographic knowledge</em>. Springer, Dordrecht 2013; 105&ndash;122.<a href="https://doi.org/10.1007/978-94-007-4587-2_7" target="_blank" rel="noopener"><span>https://doi.org/10.1007/978-94-007-4587-2_7</span></a></p>
            <p>Mueller, M., Tippins, D., and Bryan, L. (2012). &ldquo;The future of citizen science&rdquo;. ​<em>Democracy and Education</em>​. Vol. 20: 1, pp.1-12.<a href="https://democracyeducationjournal.org/home/vol20/iss1/2/" target="_blank" rel="noopener"><span>"The Future of Citizen Science" by Michael P. Mueller, Deborah Tippins et al. (democracyeducationjournal.org)</span></a></p>
            <p>Open Systems (12 June 2019) &ldquo;Citizen Science for Social Change&rdquo; <em>Cultural Research and Innovation Lab.</em><a href="http://lab.cccb.org/en/citizen-science-for-social-change/" target="_blank" rel="noopener"><span>Citizen Science for Social Change | CCCB LAB</span></a></p>
            <p>Perelló. J. (2019) Citizen Social Science: Participatory research, collective experiments, civic actions and social change. <em>The Potential of Citizen Science: A Masterclass</em>. Syddansk University.</p>
            <p><span>Tauginienė, L., Butkevičienė, E., Vohland, K. </span><em>et al.</em><span> Citizen science in the social sciences and humanities: the power of interdisciplinarity. </span><em>Palgrave Commun</em><strong>6, </strong><span>89 (2020).</span><a href="https://doi.org/10.1057/s41599-020-0471-y" target="_blank" rel="noopener"><span>https://doi.org/10.1057/s41599-020-0471-y</span></a></p>
            <p>Vicens J, Perelló J, Duch J (2018) Citizen Social Lab: A digital platform for human behavior and experimentation within a citizen science framework. PLoS ONE 13(12)<a href="https://doi.org/10.1371/journal.pone.0207219" target="_blank" rel="noopener"><span>https://doi.org/10.1371/journal.pone.0207219</span></a></p>
            <p>Ceccaroni, L., Bibby, J., Roger, E., Flemons, P., Michael, K., Fagan, L. and Oliver, J.L., 2019. Opportunities and Risks for Citizen Science in the Age of Artificial Intelligence. <em>Citizen Science: Theory and Practice</em>, 4(1), p.29.&nbsp;</p>
            <p><a href="https://theoryandpractice.citizenscienceassociation.org/articles/10.5334/cstp.241/" target="_blank" rel="noopener">https://theoryandpractice.citizenscienceassociation.org/articles/10.5334/cstp.241/</a></p>
          </div>
        </Collapsible>
        
        <hr>

        <h1 id="team">Team</h1>
        <h4>Alexa Hagerty, PhD, Principal Investigator, Project Social Science Lead </h4>
        <p>Alexa is an anthropologist researching the societal impacts of technology at the University of Cambridge, Leverhulme Centre for the Future of Intelligence and Centre for the Study of Existential Risk. She is co-founder of <a target="_blank" href="https://dovetaillabs.com/">Dovetail Labs</a> and holds a PhD in anthropology from Stanford University. Her work focuses on how participatory, collaborative, arts-based and ethnographic methods can be used to make societies and technologies more just and equitable.</p>

        <h4>Igor (Gary) Rubinov, PhD, Project Director</h4>
        <p>Gary is co-founder of <a target="_blank" href="https://dovetaillabs.com/">Dovetail Labs</a> and Senior Project Manager at <a target="_blank" href="https://www.publicequitygroup.org/irubinov">Public Equity Group</a>. He has published on development, environment and migration, always training attention on the ingenuity and perseverance of people facing adversity. He holds a PhD in Anthropology from Princeton University, an MA in International Development & Social Change from Clark University, and a BA in Anthropology from Cornell University. </p>

        <h4>Alexandra Albert, PhD Project Citizen Science Lead</h4>
        <p>Alex is a social researcher based in the Extreme Citizen Science (ExCiteS) research group in the Geography Department at University College London (UCL). She is currently a postdoctoral researcher on the Medical Research Council-funded ActEarly UK Preventative Research Partnership, examining citizen science and co-production in health. She has a PhD from University of Manchester in citizen social science. Her research interests include citizen science, participatory inventive methods, public sociology, and inclusive development.</p>

        <h4>Veda Sutedjo Tay, Story Artist and Character Animator</h4>
        <p>Based in Singapore, Veda is a <a target="_blank" href="https://vedasutedjo.wixsite.com/adeveda">freelance animator</a> with strong storytelling abilities. She graduated from Nanyang Technological University in 2020 with a Bachelor's Degree in Character Animation with Honours and Minor in Creative Writing. On top of creative storytelling and writing, her skills include illustrations, character animation and video editing. She is currently a Producer in a local animation company, and is aiming to pursue her ambitions of becoming a Narrative Director or Head of Story in the Animation Industry. </p>

        <h4>Nethra Samarawickrema, PhD, Voiceover</h4>
        <p>Nethra is an anthropologist, mediator, and writer. She is the Director of Ethnography and Design at Dovetail Labs and a lecturer at Stanford University's Hasso Plattner Institute of Design (d.School). Her work combines ethnography, design thinking and empathetic listening to support individuals and organizations to build collaborative relationships. She teaches empathetic listening at a range of workplaces, including the tech sector, non-profit and activist organizations. She provides coaching and consulting through <a target="_blank" href="https://www.listenuplab.com/">Listen Up</a>, a lab that brings empathy and creativity to train people to have difficult conversations by listening for what matters. </p>

        <h4>John Lee, Scriptwriter </h4>
        <p>John is an author, user experience writer, and teacher. He received his MFA from the University of Michigan and subsequently taught narrative design, podcast scripting, and the art of oral presentation at Stanford University. As a UX storyteller, he is particularly interested in helping broader audiences engage with complex, research-based ideas. He has also been a writing consultant at SRI International and the Stanford Storytelling Project. He received the Carol Houck Smith Fiction Fellowship at the University of Wisconsin, a John Steinbeck creative writing fellowship at San Jose State University, and writing residency awards from Yaddo, the Djerassi Resident Artists Program, and the Headlands Center for the Arts.</p>
        
        <h4>Joe McCraw, Technical Consultant</h4>
        <p>Joe is a Software Developer currently working for Mobile Programming LLC on the CBS apps for iOS/AppleTV.  He provides Technical Consulting for Dovetail Labs on projects related to technological ethics in AI/ML technologies.  Developed AIBias.com to explore projects related to bias in AI.  He also founded ShowBlender LLC and created the Augmented Reality Wifi Diagnostic app for iOS.  Joe holds a BA in Cultural Anthropology from UC Santa Cruz.</p>

        <h4>Livia Garofalo, Visual Anthropology Consultant</h4>
        <p>Livia is a medical and psychological anthropologist currently completing her doctorate at Northwestern University, where she is also earning a master’s in public health from the Feinberg School of Medicine. Her research focuses on trauma, public health and AI in medicine. She draws on visual anthropology, multimodal methods, and visual arts. Her design work can be found at <a href="https://www.tugboatdesigns.com" target="_blank">Tugboat</a></p>

        <h4>Alexandrine Royer, Project researcher</h4>
        <p>Alexandrine is the Educational Programme Manager at the Montreal AI Ethics Institute and the author of the Short Anthropological Guide to the Study of Ethical AI. She is currently pursuing an MPhil in Social Anthropology at the University of Cambridge, and her research is centered on affective computing, augmented reality, and digital platform labour.</p>
                 
        <h4>Juweek Adolphe (UX/UI design) </h4>
        <p><a target="_blank" href="https://www.juweek.online/">juweek.online</a></p>

        <h4>Sean Catangui (Web Development)</h4>
        <p><a target="_blank" href="https://catangui.com">catangui.com</a></p>
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
import Triangle from "@/assets/images/triangle.svg";
import Collapsible from "vue-collapsible-component";
import 'vue-collapsible-component/lib/vue-collapsible.css';

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
    Triangle,
    Collapsible
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

    .toggleClosed {
      margin-left: 0.5rem;
      height: 0.5em;
      transform: translateY(-50%);
    }

    .toggleOpen {
      margin-left: 0.5rem;
      height: 0.5em;
      transform: translateY(-50%) rotate(180deg);
    }
    
    h1, h2, h3, h4, p,li {
      width: 80%;
      line-height: 1.6em;
    }

    p {
      font-size: 1em;
      margin-bottom: 1em;
    }

    hr {
      border: 1px solid black;
      margin: 3rem 0;
      max-width: 80%;
    }
  }

  aside {
    padding-top: 2rem;
    position: fixed;
    a {
      display: block;
      width: 50%;
      font-size: 0.8rem;
      line-height: 1.6em;
    }

    p.credits {
      margin-top: 1.5em;
      font-size: 0.8rem;

      .dt {
        display: block;
        max-height: 1.5em;
        margin-bottom: 1em;
      }

      .nesta {
        display: block;
        max-height: 5em;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  section {
    display: block;

    aside {
      p.credits {
        .dt {
          display: inline-block;
          margin: 0;
        }

        .nesta {
          display: inline-block;
          margin-left: 1.5em;
          max-height: 3em;
        }
      }
    }

    main {
      padding-top: 10rem;
    }

    aside {
      a {
        width: calc(100% - 1em);
        box-sizing: border-box;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  section {
    display: block;

    main {
      h4 {
        line-height: 1.6em;
      }

      hr, p, li {
        max-width: 100%;
        width: 100%;
      }
    }
  }
}

</style>
