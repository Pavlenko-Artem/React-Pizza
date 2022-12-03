import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={465}
    viewBox='0 0 280 465'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    className='skeleton'
    {...props}
  >
    <circle
      cx='137'
      cy='131'
      r='129'
    />
    <rect
      x='0'
      y='277'
      rx='10'
      ry='10'
      width='280'
      height='27'
    />
    <rect
      x='0'
      y='315'
      rx='9'
      ry='9'
      width='280'
      height='89'
    />
    <rect
      x='0'
      y='427'
      rx='10'
      ry='10'
      width='91'
      height='27'
    />
    <rect
      x='127'
      y='416'
      rx='30'
      ry='30'
      width='153'
      height='45'
    />
  </ContentLoader>
);

export default Skeleton;
