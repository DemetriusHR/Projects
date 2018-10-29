import React from 'react';

import ParagrafoWrapper from '../../../Containers/News/NewsFile/Containers/Paragrafo/Paragrafo.Style';
import ImageContent from '../../../Containers/News/NewsFile/Containers/ImageContent';
import Divider from '../../../Containers/News/NewsFile/Containers/Divider';
import LinkContent from '../../../Containers/News/NewsFile/Containers/LinkContent';
import Highlight from '../../../Containers/News/NewsFile/Containers/Highlight';
import Citation from '../../../Containers/News/NewsFile/Containers/Citation';
import Note from '../../../Containers/News/NewsFile/Containers/Note';
import ContentWrapper from '../../../Containers/Comments/Content/Content.Style';
import Header from '../../../Containers/Comments/Content/Header';
import ImageWrapper from '../../../Containers/News/NewsFile/Containers/ImageContent/ImageContent.Style';

const News03 = () => (
  <ParagrafoWrapper>
    <ParagrafoWrapper className="first italic">
      <span className="bold">FINAL EDIT</span>
      {'?—?weeks after this article was published, Facebook'}
      <a
        href="https://code.facebook.com/posts/300798627056246/relicensing-react-jest-flow-and-immutable-js/"
        className="underline"
      >
        {'changed their licensing model'}
      </a>
      {'for React et al. to MIT.'}
      <span className="bold">Open source activism works!</span>
    </ParagrafoWrapper>

    <ParagrafoWrapper className="italic">
      {'['}
      <span className="bold">EDIT?—?My argument is a cautionary one</span>
      {
        ', I’ve made some edits in that direction. I am not a lawyer, but I argue that?—?as a startup?—?if I’d want to keep my doors open to any future outcome, offer, exit, proposal, FB’s OSS licenses may pose an obstacle under some circumstances.]'
      }
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      <span className="bold">UPDATE 22nd August 15.10 BST</span>
      {
        '?—?Here’s an update that discusses concepts, licenses, OSS communities, etc. It is a compilation of my thoughts following the massive amount of feedback I’ve received.'
      }
      <span className="bold">
        {
          'Many things don’t add up, and Facebook has a lot of questions to answer.'
        }
      </span>
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      {
        'Make sure you read this article next. That way you’ll get the full picture of where we stand.'
      }
    </ParagrafoWrapper>

    <LinkContent
      link="https://medium.com/@raulk/further-notes-and-questions-arising-from-facebooks-bsd-3-strong-patet-retaliation-license-c6386e8e1d60"
      title="Further notes and questions arising from “Facebook’s BSD-3 + strong patent retaliation” license"
      subtitle="This is a living document and I will keep updating it as necessary"
      linkSmall="medium.com"
      img="https://cdn-images-1.medium.com/fit/c/160/160/1*4SfgB9FbfcZC5LNMnRevrQ.png"
      altImg="In Site Medium"
    />

    <Divider />

    <ParagrafoWrapper className="italic">
      <span className="bold">Note 1:</span>
      {' Updated on August 19th to add clarifications where needed.'}
    </ParagrafoWrapper>

    <ParagrafoWrapper className="italic">
      <span className="bold">Note 2: </span>
      {
        'August 20th 13.00 BST— please don’t turn this into a flamewar. Open Source Software has a >30 year history, and Facebook appears to be leveraging it as an instrument for their private benefit.'
      }
    </ParagrafoWrapper>

    <ParagrafoWrapper className="italic">
      <span className="bold">Note 3: </span>
      {
        'August 20th 19.00 BST?—?I’ve received comments from individuals associated with the React universe. Contrary to them, I have no vested interest in one frontend framework or another. I am a backend engineer, not a frontend guy. As a result, I’m neutral and unbiased in this sense. I am not attacking the technology?—?I’m just providing my view on Facebook’s stance and its potential impact.'
      }
    </ParagrafoWrapper>

    <ParagrafoWrapper className="italic">
      <span className="bold">Note 4: </span>
      {
        'August 20th 21.20 BST?—?I’ve compiled a list of ~35 companies along with their most popular Open Source projects (75+ in total), grouped by the licenses they use. The conclusion is that Facebook is nearly alone in the industry in the use of this license. Here is the article.'
      }
    </ParagrafoWrapper>

    <LinkContent
      link="https://medium.com/@raulk/list-of-companies-and-popular-projects-by-the-open-source-licenses-they-use-35a53eaf1c80"
      title="List of companies and popular projects by the Open Source licenses they use"
      subtitle="Facebook is nearly alone in their usage of BSD-3 + strong patent retaliation"
      linkSmall="medium.com"
      img="https://cdn-images-1.medium.com/fit/c/160/160/1*HfgbA916f7Wq83QK0ywk9A.png"
      altImg="In Site Medium"
    />

    <Divider />

    <ParagrafoWrapper>
      <span className="bold">
        {
          'What’s currently happening in the Open Source community is disheartening.'
        }
      </span>
      {'Especially when you realise that many startups and businesses'}
      <span className="italic">(including Facebook)</span>
      {
        ' exist thanks to Open Source; as they wouldn’t be viable if they had to pay prohibitive license fees of proprietary software upfront.'
      }
    </ParagrafoWrapper>

    <Highlight text="Open Source is about creating communities to build better software together. It should never be used as a marketplace to exchange people’s rights?—?like Facebook is intending." />

    <ParagrafoWrapper>
      {
        'Facebook is pushing a licensing model called “BSD + patents” in all their projects, including the wildly popular React.'
      }
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      {
        '“BSD + patents” essentially means that the code is open (for everyone to see and use), but it’s copyrighted by Facebook. The BSD license grants you a copyright usage license. Additionally, they grant you a patent license as long as you’re nice to them by'
      }
      <span className="bold">
        {'never suing Facebook for patent infringement.'}
      </span>
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      {'The instant you sue Facebook,'}
      <span className="bold">your patent rights for React</span>
      {
        '?—?and any other Facebook ‘open source’ technology you happen to use)?—?are automatically revoked.'
      }
    </ParagrafoWrapper>

    <ParagrafoWrapper>Adios, bye bye, they’re gone!</ParagrafoWrapper>

    <ImageContent
      img="https://cdn-images-1.medium.com/max/800/1*crzf_h-aHXU-g3J0W6Ryig.png"
      alt="1"
      description={
        // prettier-ignore
        <span> {/* eslint-disable-line */}
          <a
            href="https://github.com/facebook/react/blob/b8ba8c83f318b84e42933f6928f231dc0918f864/PATENTS"
            className="underline"
          >
            {
              'https://github.com/facebook/react/blob/b8ba8c83f318b84e42933f6928f231dc0918f864/PATENTS'
            }
          </a>
        </span>
      }
      height="65"
    />

    <ParagrafoWrapper>
      {
        'This issue was brought to public attention by the Apache Software Foundation.'
      }
    </ParagrafoWrapper>

    <ParagrafoWrapper className="italic">
      {'['}
      <span className="bold">UPDATE:</span>
      {
        ' To go deeper into the license model, patent right grants, what strong patent retaliation vs. weak patent retaliation means, ASLv2, Mozilla Public License, MIT, OSS communities, read the following article]'
      }
    </ParagrafoWrapper>

    <LinkContent
      link="https://medium.com/@raulk/further-notes-and-questions-arising-from-facebooks-bsd-3-strong-patet-retaliation-license-c6386e8e1d60"
      title="Further notes and questions arising from “Facebook’s BSD-3 + strong patent retaliation” license"
      subtitle="This is a living document and I will keep updating it as necessary"
      linkSmall="medium.com"
      img="https://cdn-images-1.medium.com/fit/c/160/160/1*4SfgB9FbfcZC5LNMnRevrQ.png"
      altImg="In Site Medium"
    />

    <ParagrafoWrapper className="third-title">
      {'This restriction is boundless, and fierce'}
    </ParagrafoWrapper>

    <Divider />

    <ParagrafoWrapper className="italic bold">
      {
        'It doesn’t matter whether the intellectual property is related to the domain you’re using React for, or not.'
      }
    </ParagrafoWrapper>

    <ParagrafoWrapper className="bold">
      {
        'If you use React, you cannot go against Facebook for any patent they hold. Full period.'
      }
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      <span className="bold">
        <span className="italic">Update Sept 18th 2017</span>
        {'?—?Actually, it’s worse.'}
      </span>
      {'You cannot go against Facebook for any patent'}
      <span className="bold">
        {
          'they wish to hold, either, e.g. if they file a patent claim that steps on your work.'
        }
      </span>
    </ParagrafoWrapper>

    <Citation citation="In other words: quid pro quo?—?if you use my software, you give me immunity." />

    <ParagrafoWrapper>
      {'Facebook, is that what you think Open Source is about?'}
    </ParagrafoWrapper>

    <ParagrafoWrapper className="italic">
      <span className="bold">[UPDATE:</span>
      {
        ' It is normal for a license with patent grant to include weak patent retaliation, i.e. if you use React and you sue FB for a patent over React, you lose any patents granted to you for React. Note the scope: it is always React. FB’s license is different (stronger).'
      }
      <a
        href="https://medium.com/@raulk/further-notes-and-questions-arising-from-facebooks-bsd-3-strong-patent-retaliation-license-c6386e8e1d60"
        className="underline"
      >
        {'Read more here.'}
      </a>
      {']'}
    </ParagrafoWrapper>

    <Divider />

    <ParagrafoWrapper>
      <div className="second-title">Fridgebook Inc.</div>
      {
        'For the sake of illustration, say you’re a fridge company “Fridgebook Inc.” who markets'
      }
      <span className="italic">intelligent fridges</span>
      {
        '. Your fridges have a screen that runs your proprietary application, and you use React for the UI.'
      }
    </ParagrafoWrapper>

    <ImageContent
      img="https://cdn-images-1.medium.com/max/800/1*vfurq6EY120rZCwkaVtsCg.png"
      alt="1"
      width="55"
    />

    <ParagrafoWrapper>
      {'Overnight, you hear that'}
      <span className="bold">
        {'Facebook decides to move into the fridge industry'}
      </span>
      {
        ', and they’ve announced the worldwide launch of their new product: “FBfridge”, in just 1 week.'
      }
    </ParagrafoWrapper>

    <Citation citation="In the hypothetical case that Facebook blatantly infringes some of your patents with ‘FBfridge’, what can you do?" />

    <ParagrafoWrapper>
      <span className="bold">Well, you cannot sue them immediately.</span>
      <span className="italic">
        {'You’re using React on the customer-facing app, remember?'}
      </span>
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      {'If you sue them before migrating to something else (like'}
      <a href="https://vuejs.org/" className="underline">
        {'vue.js'}
      </a>
      {
        '), you will immediately lose the patent grant for React, and suddenly you’re in breach yourself,'
      }
      <span className="bold">
        {
          'fighting against a potential lawsuit for illegal use of software, from an almost-$500-billion company, all by yourself.'
        }
      </span>
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      {'And obviously, you don’t want to interrupt customer service.'}
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      {
        'So if you want to sue them, or at least hold any leverage for doing so,'
      }
      <span className="bold">
        {
          'you will need to find a solution migrate away from React in record time.'
        }
      </span>
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      {
        'That’s quite a pickle you’re in, right? It’s almost an extortionary situation.'
      }
      <span className="bold">
        {'The solution? Not using React in the first place'}
      </span>
      {', and retaining your liberty to assert your rights.'}
    </ParagrafoWrapper>

    <Note
      note={
        // prettier-ignore
        <span>{/* eslint-disable-line */}
          <span className="bold">NOTE:</span>
          {
            ' I am not an proponent nor an opponent to patents myself. I don’t have a clear stance on the issue. I’m just analysing the give-and-take balance here.'
          }
        </span>
      }
    />

    <ParagrafoWrapper>
      <div className="second-title">Facebook’s explanation</div>
      {
        'The last time I looked, the philosophy of Open Source revolved around communities where talented people contribute their grain of sand to?—?together?—?build better software and push tech even further.'
      }
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      {
        'That’s the spirit of the Apache Software Foundation, the Linux Foundation, etc. who are'
      }
      <span className="bold">
        {'key references in the Open Source sphere.'}
      </span>
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      <div className="third-title">
        {'So, why bring patents into Open Source?'}
      </div>
      {
        'Facebook has released an official explanation, which I’ll summarise for you in a few words:'
      }
    </ParagrafoWrapper>

    <Note note="Facebook receives a large number of meritless patent claims. They waste lots of resources fighting them. So they decided to capitalise on the success of their Open Source projects (like React) to introduce a trojan horse to deter users from filing?—?theoretically meritless?—?patent claims against them. They do not reciprocate this restriction." />

    <ParagrafoWrapper>
      <span className="bold">But here is the important part.</span>
      {'They claim that every other company that releases Open Source software'}
      <span className="bold italic">should do the same.</span>
    </ParagrafoWrapper>

    <ParagrafoWrapper className="italic">
      {'['}
      <span className="bold">UPDATE:</span>
      <a
        href="https://medium.com/@raulk/list-of-companies-and-popular-projects-by-the-open-source-licenses-they-use-35a53eaf1c80"
        className="underline"
      >
        {'Here I analyse'}
      </a>
      {
        'what other large companies adopt this license model. Hint: not many, just 2.]'
      }
    </ParagrafoWrapper>

    <LinkContent
      link="https://medium.com/@raulk/list-of-companies-and-popular-projects-by-the-open-source-licenses-they-use-35a53eaf1c80"
      title="An analysis of the licenses used by 75+ Open Source projects across 35 companies"
      subtitle="Facebook is nearly alone in their usage of BSD-3 + strong patent retaliation"
      linkSmall="medium.com"
      img="https://cdn-images-1.medium.com/fit/c/160/160/1*HfgbA916f7Wq83QK0ywk9A.png"
      altImg="In Site Medium"
    />

    <ParagrafoWrapper className="bold">
      {
        'Unfortunately, this is not going to work, and would eventually lead to a closed-source industry again, for several factors:'
      }
    </ParagrafoWrapper>

    <ol>
      <li>
        {
          'It requires consensus across the largest players in the market, who hold'
        }
        <span className="bold">
          {'real arsenals of patents as'}
          <span className="italic">leverage</span>
          {' against competitors'}
        </span>
        {'(see image below). Suddenly those arsenals would be valued at $0.'}
      </li>
      <li>
        {'Arriving to that consensus is highly improbable. As long as'}
        <span className="bold italic">one rogue company</span>
        {
          ' doesn’t join, the rest will need to keep “their guards/patent arsenals up”.'
        }
      </li>
      <li>
        {
          'If all giants agreed to open source under the “BSD + patents” scheme,'
        }
        <span className="bold">
          {'cross-adoption would grind to a halt. Why?'}
        </span>
        {
          'If Google released Project X under “BSD + Patents”, and Amazon really liked it, rather than adopting it and losing their right to ever sue Google for patents,'
        }
        <span className="bold">
          {'they would go off and build it on their own.'}
        </span>
      </li>
      <li>
        {'That would mean that'}
        <span className="bold">communities will not form</span>
        {
          ' around these products. Communities are the fuel and the incentive for open sourcing products.'
        }
        <span className="bold">
          {
            'If there is no chance of igniting a community, there is no reason to open source.'
          }
        </span>
      </li>
      <li>
        {
          'Eventually, as the above situation happens over and over again, the giants will stop seeing value in open sourcing their products, and'
        }
        <span className="bold">
          {'the industry would eventually fall into a closed-source model.'}
        </span>
      </li>
    </ol>

    <ImageContent
      img="https://cdn-images-1.medium.com/max/800/1*VL9qHHrYQ_HMiShoNO4qeg.png"
      alt="1"
      description={
        // prettier-ignore
        <span>{/* eslint-disable-line */}
          {'(2012)'}
          <a
            href="http://www.droid-life.com/2012/01/24/web-of-tech-patent-lawsuits-infographic/"
            className="italic"
          >
            {
              'http://www.droid-life.com/2012/01/24/web-of-tech-patent-lawsuits-infographic/'
            }
          </a>
        </span>
      }
      height="80"
      width="60"
    />

    <ParagrafoWrapper>
      <div className="second-title">
        {'Facebook’s unethical use of Open Source philosophy'}
      </div>
      {
        'Patents protect ideas and inventions. In most cases, patent assertion cases are not black or white?—?win or lose.'
      }
      <span className="bold">
        {'Infringement evaluation is complex and costly.'}
      </span>
      {
        'A lawsuit can cost hundreds of thousands or millions to file and pursue. You might have a 85% confidence that FB violated a patent of yours, but to even pursue it it’s going to cost you a lot of money.'
      }
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      {
        'If on top of that, you will need to invest to migrate away onto a different frontend framework first,'
      }
      <span className="bold">
        {
          'and make sure that all your customers are using your new product version ('
        }
        <span className="italic">
          {
            'what if you’re using React Native? your users may not upgrade the apps at once!'
          }
        </span>
        {')'}
      </span>
      {
        ', before you can even file the lawsuit, do you think that’s an honest, ethical usage of open source philosophy?'
      }
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      <div className="third-title">Bottom line:</div>
    </ParagrafoWrapper>

    <Note
      note={
        // prettier-ignore
        <span>{/* eslint-disable-line */}
          {
            'Open Source is not a “quid pro quo” trade. Open Source is about creating communities to build better software together.'
          }
          <span className="bold">
            {'It should never be used as a marketplace to exchange rights.'}
          </span>
        </span>
      }
    />

    <ParagrafoWrapper>
      {
        'In fact, Facebook itself is built on the pillars of Open Source software with permissive licenses.'
      }
    </ParagrafoWrapper>

    <Divider />

    <ParagrafoWrapper className="italic">
      <span className="bold">Update 5:</span>
      {
        '21st August 11:20 BST?—?here’s another thought that crossed my mind. It clearly illustrates the unfairness of Facebook’s stance, and its lack of respect for the OSS community at large.'
      }
    </ParagrafoWrapper>

    <ContentWrapper style={{ paddingBottom: '0' }}>
      <div className="container">
        <Header
          imgUser="https://pbs.twimg.com/profile_images/995341435938492416/skh3DCtE_bigger.jpg"
          name="Raúl Kripalani"
          nickname="raulvk"
          date="21/08/2017 07:13"
        />
        <span className="comment">
          <br />
          {'FB is based on OSS. '}
          <br />
          {
            'Would Zuck have used the LAMP stack back in 2004, if it entailed renouncing to his rights to patent claims? color blue'
          }
          <span className="hashtag">#js</span>
          <span className="hashtag">#react</span>
        </span>
      </div>
    </ContentWrapper>

    <ParagrafoWrapper>
      <ImageWrapper>
        <span className="description-image">
          <a
            href="https://twitter.com/raulvk/status/899575205848395776"
            className="underline"
          >
            {'https://twitter.com/raulvk/status/899575205848395776'}
          </a>
        </span>
      </ImageWrapper>
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      <div className="third-title">What’s your guess?</div>
    </ParagrafoWrapper>

    <Divider />

    <ParagrafoWrapper>
      <div className="second-title">
        {'Why you may want to avoid React if you’re a startup'}
      </div>
      {
        'If you’re building a startup, I’m assuming you?—?and your investors?—?are hoping to land a million-dollar worth exit at some point, right?'
      }
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      {
        'You want to keep your door open to all acquirers, especially the large ones: Apple, Microsoft, Google, Amazon, etc.'
      }
    </ParagrafoWrapper>

    <ParagrafoWrapper className="bold">
      {
        'These companies likely hold patent arsenals against Facebook?—?and even if they didn’t?—?they don’t want to surrender their rights to sue Facebook if the time came.'
      }
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      {'If your product is built on React,'}
      <span className="bold">acquiring you means losing these rights</span>
      {', and this is something they might not be prepared to do.'}
    </ParagrafoWrapper>

    <Note
      note={
        // prettier-ignore
        <span>{/* eslint-disable-line */}
          {
            'Basically, some potential buyers might not be interested in you, if buying you means they have to'
          }
          <span className="bold">surrender their rights</span>
          {' to ever sue Facebook for patent infringement.'}
        </span>
      }
    />
    <ParagrafoWrapper>
      {'So if you want to keep your options open…'}
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      <div className="third-title">
        {'You may want to migrate away from React'}
      </div>
      {'I particularly like'}
      <a href="https://github.com/developit/preact" className="underline">
        {'Preact'}
      </a>
      {
        ', but I’m not sure if Facebook holds any software patents on the Virtual DOM or the React APIs.'
      }
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      {
        'If they did, Preact could be in violation of those patents, so have a look at'
      }
      <a href="https://vuejs.org/" className="underline">
        {'vue.js'}
      </a>
      {','}
      <a href="https://cycle.js.org/" className="underline">
        {'cycle.js'}
      </a>
      {', too.'}
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      {'I hope at some point the community can clarify where Preact and'}
      <a href="https://github.com/infernojs/inferno" className="underline">
        {'Inferno'}
      </a>
      {
        '(another light-weight alternative to React) stand in terms of intellectual property.'
      }
    </ParagrafoWrapper>

    <Divider />

    <ParagrafoWrapper>
      <div className="second-title">Continue reading the follow-ups</div>
      <span className="bold">22nd August 2017:</span>
      {
        'I consolidated my responses to feedback in a new post. It is a bit more technical and I cover licensing, OSS development, communities, contributions, etc. I also state some questions that I believe Facebook should answer.'
      }
      <span className="bold">
        {'I highly encourage you to read this post. Click here:'}
      </span>
    </ParagrafoWrapper>

    <LinkContent
      link="https://medium.com/@raulk/further-notes-and-questions-arising-from-facebooks-bsd-3-strong-patet-retaliation-license-c6386e8e1d60"
      title="Further notes and questions arising from “Facebook’s BSD-3 + strong patent retaliation” license"
      subtitle="This is a living document and I will keep updating it as necessary"
      linkSmall="medium.com"
      img="https://cdn-images-1.medium.com/fit/c/160/160/1*4SfgB9FbfcZC5LNMnRevrQ.png"
      altImg="In Site Medium"
    />

    <ParagrafoWrapper>
      {
        'Additionally, I also analysed the licenses of 75+ OSS projects from 35 corporations. Facebook is practically alone in their choice. Here’s the article:'
      }
    </ParagrafoWrapper>

    <LinkContent
      link="https://medium.com/@raulk/list-of-companies-and-popular-projects-by-the-open-source-licenses-they-use-35a53eaf1c80"
      title="An analysis of the licenses used by 75+ Open Source projects across 35 companies"
      subtitle="Facebook is nearly alone in their usage of BSD-3 + strong patent retaliation"
      linkSmall="medium.com"
      img="https://cdn-images-1.medium.com/fit/c/160/160/1*HfgbA916f7Wq83QK0ywk9A.png"
      altImg="In Site Medium"
    />

    <Divider />
  </ParagrafoWrapper>
);

export default News03;
