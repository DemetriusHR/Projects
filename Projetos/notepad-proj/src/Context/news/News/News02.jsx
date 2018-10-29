import React from 'react';

import ParagrafoWrapper from '../../../Containers/News/NewsFile/Containers/Paragrafo/Paragrafo.Style';
import ImageContent from '../../../Containers/News/NewsFile/Containers/ImageContent';
import Divider from '../../../Containers/News/NewsFile/Containers/Divider';

const News02 = () => (
  <ParagrafoWrapper>
    <ImageContent
      img="https://cdn-images-1.medium.com/max/800/0*neBHqBESSeOcYvs8"
      alt="hands"
      description="Day 39?—?Udemy ES6 Javascript | Part 2"
      width="50"
    />

    <ParagrafoWrapper>
      <div className="second-title">Overview</div>
      {
        'The remainder of the chapters in the course had pretty mind bending concepts and syntax. It took me a while to wrap my head around them. We went over classes, generators, symbol iterators. for…of loops and promises.'
      }
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      <div className="second-title">Progress Bar</div>
    </ParagrafoWrapper>

    <ImageContent
      img="https://cdn-images-1.medium.com/max/800/1*0qyrUOOqrbW1hA1kv4nipw.png"
      alt="notepad notes"
      width="50"
    />

    <ParagrafoWrapper>
      <div className="second-title">Key Takeaways</div>
      <ol>
        <li>
          <span className="bold">Classes:</span>
          {
            ' Classes were introduced in ES6 to simply the process of prototypical inheritence in ES5.'
          }
        </li>

        <li>
          <span className="bold">{'constructor(){}:'}</span>
          {
            ' Constructor method is a special method that can be called in the beginning of any class. It is used to initiate the class.'
          }
        </li>

        <li>
          <span className="bold">super():</span>
          {' A special method that'}
          <span className="bold">must</span>
          {
            ' be called from within a constructor method of a class that is an extension of another higher class. super() makes sure that both the initiations are passed on to the child class.'
          }
        </li>

        <li>
          <span className="bold">Generator Functions:</span>
          {
            ' Those functions that can be entered and exited multiple times. Useful for calling iterations.'
          }
        </li>

        <li>
          <span className="bold">For…of loop:</span>
          {
            ' A loop that is primarily called along with generator functions to iterate over an entity.'
          }
        </li>

        <li>
          <span className="bold">[Symbol.iterator]</span>
          {
            ' Is special function that teaches classes and objects on how to iterate. Classes and objects that have [Symbol.iterator] generator functions can then be iterated up to using for…of loops. Note?—?Arrays already have pre-built [Symbol.itertor] functions and can thus be iterated upon using for…of loops by deault.'
          }
        </li>

        <li>
          <span className="bold">Promises</span>
          {' have 3 different states: '}
          <br />
          {'a) ‘unresolved’ : waiting to be finished'}
          <br />
          {'b) ’resolved’: finished and successful'}
          <br />
          {'c) ‘rejected’: finished and un-successful'}
        </li>

        <li>
          <span className="bold">.then()</span>
          {' callback is run on promises that get resolved.'}
        </li>

        <li>
          <span className="bold">.catch()</span>
          {' callback is run on promises that get rejected.'}
        </li>
      </ol>
    </ParagrafoWrapper>
    <ParagrafoWrapper>
      {
        'This was a good digression to go over some of the basics of ES6 updates. I’ll wrap this up tomorrow with'
      }
      <span className="bold">
        {'Recap: Day 29–39 | 100 Days Full-Stack Challenge.'}
      </span>
    </ParagrafoWrapper>
    <Divider />
  </ParagrafoWrapper>
);

export default News02;
