import React from 'react';

import ParagrafoWrapper from '../../../Containers/News/NewsFile/Containers/Paragrafo/Paragrafo.Style';
import ImageContent from '../../../Containers/News/NewsFile/Containers/ImageContent';
import LinkContent from '../../../Containers/News/NewsFile/Containers/LinkContent';
import Divider from '../../../Containers/News/NewsFile/Containers/Divider';

const News01 = () => (
  <ParagrafoWrapper>
    <ParagrafoWrapper className="first">
      {'As Javascript remains the most'}
      <a
        href="https://insights.stackoverflow.com/survey/2018/#technology"
        className="underline"
      >
        {'popular and widely used'}
      </a>
      {'programming language in 2018, so grows the ecosystem around it.'}
    </ParagrafoWrapper>

    <ImageContent
      img="https://cdn-images-1.medium.com/max/800/1*ABNOknjk6gnMIRnyjT_m4Q.png"
      alt="graphic"
      width="53"
    />

    <ParagrafoWrapper>
      {'Still, Javascript’s small “standard library” is'}
      <a
        href="https://www.infoworld.com/article/3048833/open-source-tools/brendan-eich-javascript-standard-library-will-stay-small.html"
        className="underline"
      >
        {'expected to stay this way'}
      </a>
      {
        '. To fill the gap, many popular utility libraries have grown on GitHub in the past few years. Here is a short list of useful and highly maintained libraries.'
      }
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      {'Tip: Most if not all of the libraries on the list can be combined with'}
      <a href="https://bitsrc.io/" className="underline bold">
        {'Bit’s component platform'}
      </a>
      {
        ', so that you can make any functionality individually available to discover, use and even develop from any project using it.'
      }
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      {'Using Bit, which is'}
      <a href="https://github.com/teambit/bit">also on GitHub</a>
      {
        ', you can seamlessly isolate components from any of these libraries (no refactoring) and install them in other projects using NPM, develop them from any project using Bit, update changes, collaborate and stay in sync. Feel free to jump in.'
      }
    </ParagrafoWrapper>

    <LinkContent
      link="https://bitsrc.io/"
      title="Bit - Share and build with code components"
      subtitle="Bit helps you share, discover and use code components between projects and applications to build new features and…"
      linkSmall="bitsrc.io"
      img="https://cdn-images-1.medium.com/fit/c/160/160/0*utKdZfYTomkVlWUb."
      altImg="In Site bitsrc"
    />

    <ParagrafoWrapper>
      <div className="second-title">1. Underscore & Lodash (dah)</div>
      {
        'Most of you probably already know them. Underscore was built to provide utility functions for common tasks in Javascript. Lodash, NPM’s most'
      }
      <a href="https://www.npmjs.com/package/lodash" className="underline">
        {'downloaded'}
      </a>
      {'and most'}
      <a href="https://www.npmjs.com/browse/depended" className="underline">
        {'dependent-upon'}
      </a>
      {'package,'}
      <a
        href="https://stackoverflow.com/questions/13789618/differences-between-lodash-and-underscore?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa"
        className="underline"
      >
        {'was built'}
      </a>
      {
        'to provide more consistent cross-environment iteration support for arrays, strings, objects, and'
      }
      <span className="coding">arguments</span>
      {
        ' objects. It has since became a superset of Underscore, and both are maintained by the same core contributors. Should definitely be in your stack.'
      }
    </ParagrafoWrapper>

    <LinkContent
      link="https://github.com/lodash/lodash"
      title="lodash/lodash"
      subtitle="lodash - A modern JavaScript utility library delivering modularity, performance, & extras."
      linkSmall="github.com"
      img="https://cdn-images-1.medium.com/fit/c/160/160/0*rOEmiojfKimufKNl."
      altImg="In Github"
    />

    <LinkContent
      link="https://github.com/jashkenas/underscore"
      title="jashkenas/underscore"
      subtitle="underscore - JavaScript's utility _ belt"
      linkSmall="github.com"
      img="https://cdn-images-1.medium.com/fit/c/160/160/0*IRS50_6Tt9wSmWT8."
      altImg="In Github"
    />

    <LinkContent
      link="https://bitsrc.io/lodash/lodash"
      title="lodash. Javascript components by lodash."
      subtitle="Non-Official and community generated collection of the Lodash JS utility library functionalities made individually…"
      linkSmall="bitsrc.io"
      img="https://cdn-images-1.medium.com/fit/c/160/160/0*utKdZfYTomkVlWUb."
      altImg="In Site bitsrc"
    />

    <ImageContent
      img="https://cdn-images-1.medium.com/max/800/1*GarWhFac4rivkILUe6WW7A.png"
      alt="components by lodash"
      description={
        // prettier-ignore
        <span> {/* eslint-disable-line */}
          {'Lodash components made'}
          <a href="https://bitsrc.io/lodash/lodash" className="underline">
            {'individually available using Bit'}
          </a>
        </span>
      }
      height="73"
      width="90"
    />

    <ParagrafoWrapper>
      <div className="second-title">2. Ramda</div>
      {
        'At over 12K stars, this JS utility library is designed for functional programming, making it easy to create functional pipelines that don’t mutate user data. Immutability and side-effect free functions are at the heart of its design philosophy. All functions are automatically curried, and passed parameters are arranged accordingly for ease of use.'
      }
    </ParagrafoWrapper>

    <LinkContent
      link="https://github.com/ramda/ramda"
      title="ramda/ramda"
      subtitle="ramda - :ram: Practical functional Javascript"
      linkSmall="github.com"
      img="https://cdn-images-1.medium.com/fit/c/160/160/0*TVJtgcG8JqxzcH1u."
      altImg="In Github"
    />

    <ParagrafoWrapper>
      <ul>
        <li>
          {'Also check out:'}
          <a
            href="https://github.com/facebook/immutable-js/"
            className="underline"
          >
            {'immutable.js'}
          </a>
        </li>
      </ul>
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      <div className="second-title">3. MathJS</div>
      {
        'At 6K stars, Math.js is an extensive math library for JavaScript and Node.js, which is compatible with JavaScript’s built-in Math library. The library contains a flexible expression parser, is able to perform symbolic computation, and comes with a large set of built-in functions and constants. You can even extend it yourself.'
      }
    </ParagrafoWrapper>

    <LinkContent
      link="https://github.com/josdejong/mathjs"
      title="josdejong/mathjs"
      subtitle="mathjs - An extensive math library for JavaScript and Node.js"
      linkSmall="github.com"
      img="https://cdn-images-1.medium.com/fit/c/160/160/0*YXBNMWBs4BKSkD_L."
      altImg="In Github"
    />

    <ParagrafoWrapper>
      <div className="second-title">4. Moment</div>
      {
        'At nearly 40K stars, moment.js is a JavaScript date and time manipulation library for parsing, validating, manipulating, and formatting dates. Moment was designed to work both in the browser and in Node.js. As of v 2.10.0 the code is written in ECMAScript 6 modules.'
      }
    </ParagrafoWrapper>

    <LinkContent
      link="https://github.com/moment/moment/"
      title="moment/moment"
      subtitle="moment - Parse, validate, manipulate, and display dates in javascript."
      linkSmall="github.com"
      img="https://cdn-images-1.medium.com/fit/c/160/160/0*hh0f15mtntWlDVtM."
      altImg="In Github"
    />

    <ParagrafoWrapper>
      <ul>
        <li>
          {'Also check out:'}
          <a href="https://github.com/date-fns/date-fns" className="underline">
            {'Date-fns'}
          </a>
          {'(10K stars) &'}
          <a href="https://github.com/datejs/Datejs" className="underline">
            {'DateJS.'}
          </a>
        </li>
      </ul>
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      <div className="second-title">5. Sugar</div>
      {
        'At 3.5K stars, Sugar is a Javascript utility library for working with native objects. Custom builds and modularized npm packages let you use only what you need (can also be combined with'
      }
      <a href="https://bitsrc.io/">Bit</a>
      {
        '), and users can define methods or use plugins to handle specialized use cases. Worth checking out.'
      }
    </ParagrafoWrapper>

    <LinkContent
      link="https://github.com/andrewplummer/Sugar"
      title="andrewplummer/Sugar"
      subtitle="Sugar - A Javascript library for working with native objects."
      linkSmall="github.com"
      img="https://cdn-images-1.medium.com/fit/c/160/160/0*FWHzUM-tyY2OgMAS."
      altImg="In Github"
    />

    <ImageContent
      img="https://cdn-images-1.medium.com/max/800/1*opTXAh1ohEAVpBM4WffuMQ.png"
      alt="3"
      description="sugar.js in action"
      height="55"
      width="80"
    />

    <ParagrafoWrapper>
      <div className="second-title">6. Lazy</div>
      {
        'At 5K stars, lazy.js is a functional utility library for JavaScript with a lazy engine that “strives to do as little work as possible” while still being flexible enough. The library has no external dependencies, and here’s'
      }
      <a
        href="http://danieltao.com/lazy.js/demos/events/"
        className="underline"
      >
        {'a live demo'}
      </a>
      {'of testing Dome events as a sequence. Here are the'}
      <a href="http://danieltao.com/lazy.js/docs/" className="underline">
        {'API docs'}
      </a>
      {'to get started.'}
    </ParagrafoWrapper>

    <LinkContent
      link="https://github.com/dtao/lazy.js"
      title="dtao/lazy.js"
      subtitle="lazy.js - Like Underscore, but lazier"
      linkSmall="github.com"
      img="https://cdn-images-1.medium.com/fit/c/160/160/0*cG6ackKfv_cL4kve."
      altImg="In Github"
    />

    <ParagrafoWrapper>
      <div className="second-title">7. CollectJS</div>
      {
        'At 3.5K stars, collect.js is a very promising and dependency free wrapper for working with arrays and objects in Javascript with dozens of useful functionalities in and API which is (almost) identical to Laravel Collections 5.5. The library is actively maintained, and is worth keeping an eye on.'
      }
    </ParagrafoWrapper>

    <LinkContent
      link="https://github.com/ecrmnn/collect.js/"
      title="ecrmnn/collect.js"
      subtitle="collect.js - Convenient and dependency free wrapper for working with arrays and objects"
      linkSmall="github.com"
      img="https://cdn-images-1.medium.com/fit/c/320/320/0*iYKBDHI_ZqNul_kn."
      altImg="In Github"
      className="variant"
    />

    <ParagrafoWrapper>
      <div className="second-title">8. ChanceJS</div>
      {
        'Chance is a minimalist generator of random strings, numbers, etc. to help reduce some monotony, while writing automated tests or anywhere else you need anything random. At only 3K stars, this library is surprisingly useful as we tend to repeat our patterns when asked to generate random things.'
      }
    </ParagrafoWrapper>

    <LinkContent
      link="https://github.com/chancejs/chancejs"
      title="chancejs/chancejs"
      subtitle="chancejs - Chance - Random generator helper for JavaScript"
      linkSmall="github.com"
      img="https://cdn-images-1.medium.com/fit/c/320/320/0*7LOj1NFRhFGo-hTf."
      altImg="In Github"
      className="variant"
    />

    <ParagrafoWrapper>
      <div className="second-title">9. ChartJS</div>
      {
        'At nearly 40k stars, chart.js is a great example of how sometimes less is more with 8 different data visualization types, each of them animated and customizable. Chart.js lets you create simple HTML5 Charts using the <canvas> tag, with great rendering performance across all modern browsers. Definitely one of the most useful and elegant libraries on the list.'
      }
    </ParagrafoWrapper>

    <LinkContent
      link="https://github.com/chartjs/Chart.js"
      title="chartjs/Chart.js"
      subtitle="Chart.js - Simple HTML5 Charts using the tag"
      linkSmall="github.com"
      img="https://cdn-images-1.medium.com/fit/c/320/320/0*Om2Tspx_UV-D34b9."
      altImg="In Github"
      className="variant"
    />

    <ImageContent
      img="https://cdn-images-1.medium.com/max/800/1*5vb_uzQfSxThunrMR2zU4w.png"
      alt="4"
      description="Polar Area visualization with chart.js"
    />

    <ParagrafoWrapper>
      <div className="second-title">10. Polished</div>
      {'At 3.5K stars, authored by the'}
      <a
        href="https://github.com/styled-components/styled-components"
        className="underline"
      >
        {'styled-components'}
      </a>
      {
        'team, Polished is a great lightweight toolset for writing styles in JavaScript with Sass-style helper functions and mixins. The library is compatible with styled-components, Aphrodite, Radium, or plain inline styles. This personal favorite is available on GitHub, and all single functionalities were made available in Bit’s community (non-official) so they can be individually installed/imported and used.'
      }
    </ParagrafoWrapper>

    <LinkContent
      link="https://github.com/styled-components/polished"
      title="styled-components/polished"
      subtitle="polished - A lightweight toolset for writing styles in JavaScript"
      linkSmall="github.com"
      img="https://cdn-images-1.medium.com/fit/c/320/320/0*PZdxNMlLJfTb12iq."
      altImg="In Github"
      className="variant"
    />

    <LinkContent
      link="https://bitsrc.io/ranm8/polished"
      title="polished. Javascript components by ranm8."
      subtitle="A lightweight toolset for writing styles in JavaScript 72 Javascript components. Examples: color / adjust-hue, color…"
      linkSmall="github.com"
      img="https://cdn-images-1.medium.com/fit/c/160/160/0*utKdZfYTomkVlWUb."
      altImg="In Github"
    />

    <ParagrafoWrapper>
      <div className="second-title">11. Mout</div>
      {
        'Mout.js is a collection of modular JavaScript utilities that can be used in the browser as AMD modules or on node.js, providing helper methods similar to those found on other languages standart libraries (Python, Ruby, PHP etc). mout.js lets you load only the modules/functions you need, and provides a consistent API and normalizes behavior across multiple browsers.'
      }
    </ParagrafoWrapper>

    <LinkContent
      link="https://github.com/mout/mout"
      title="mout/mout"
      subtitle="mout - Modular JavaScript Utilities"
      linkSmall="github.com"
      img="https://cdn-images-1.medium.com/fit/c/320/320/0*1iH_7kX_A5NHagei."
      altImg="In Github"
      className="variant"
    />

    <ParagrafoWrapper>
      <div className="second-title">Honorable mentions:</div>
      <div className="third-title">* Bit utils</div>
      {
        'Javascript utility functions delivering modularity and performance, used in Bit’s'
      }
      <a href="https://bitsrc.io/" className="underline">
        {'web hub'}
      </a>
      {
        'itself. These functions are individually available to install with NPM/Yarn, or to develop from any project using them (in any environment) using Bit itself. You can create your own similar collection, and gather useful functionalities from different libraries and projects into it.'
      }
    </ParagrafoWrapper>

    <LinkContent
      link="https://bitsrc.io/bit/utils"
      title="Bit - icons-utils / icons / secure - React component by grommet"
      subtitle="Secure SVG Icon. - written in react. Dependencies: classnames, prop-types, react. Javascript utility functions for…"
      linkSmall="github.com"
      img="https://cdn-images-1.medium.com/fit/c/160/160/0*utKdZfYTomkVlWUb."
      altImg="In Github"
    />

    <ImageContent
      img="https://cdn-images-1.medium.com/max/800/1*FhUJ1rHZegckmKEXOrg3kg.png"
      alt="4"
      description={<a href="https://bitsrc.io/bit/utils">Bit utils</a>}
    />

    <ParagrafoWrapper>
      <div className="third-title">* Voca</div>
      {
        'A Javascript library for string manipulations. It includes helpful functions such as '
      }
      <span className="italic">change case</span>
      {', '}
      <span className="italic">trim</span>
      {', '}
      <span className="italic">pad</span>
      {', '}
      <span className="italic">slugify</span>
      {', '}
      <span className="italic">latinise</span>
      {', '}
      <span className="italic">sprintf’y</span>
      {', '}
      <span className="italic">truncate</span>
      {', '}
      <span className="italic">escape</span>
      {
        ' and more. You can load individual functions to minimize the application builds. The library comes with a high-test coverage and has no dependancies.'
      }
    </ParagrafoWrapper>

    <LinkContent
      link="https://github.com/panzerdp/voca"
      title="panzerdp/voca"
      subtitle="voca - The ultimate JavaScript string library"
      linkSmall="github.com"
      img="https://cdn-images-1.medium.com/fit/c/160/160/0*uI0zCz8CbMrcLfR4."
      altImg="In Github"
    />
    <Divider />
  </ParagrafoWrapper>
);

export default News01;
